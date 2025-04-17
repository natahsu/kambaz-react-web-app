import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/cat1.jpg",
    description: "New Description",
  });
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses(courses.map(c => 
        c._id === courseId ? { ...c, enrolled } : c
      ));
    } catch (error) {
      console.error("Enrollment update failed:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const [allCourses, enrolledCourses] = await Promise.all([
        courseClient.fetchAllCourses(),
        userClient.findCoursesForUser(currentUser._id)
      ]);
      const mergedCourses = allCourses.map((course: any) => ({
        ...course,
        enrolled: enrolledCourses.some((ec: any) => ec._id === course._id)
      }));
      setCourses(mergedCourses);
    } catch (error) {
      console.error("Course fetch failed:", error);
    }
  };

  const findCoursesForUser = async () => {
    try {
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(enrolledCourses.map((c: any) => ({ ...c, enrolled: true })));
    } catch (error) {
      console.error("User courses fetch failed:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      if (enrolling) {
        fetchCourses();
      } else {
        findCoursesForUser();
      }
    }
  }, [currentUser, enrolling]);

  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Course creation failed:", error);
    }
  };

  const deleteThisCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter(c => c._id !== courseId));
    } catch (error) {
      console.error("Course deletion failed:", error);
    }
  };

  const updateThisCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(courses.map(c => 
        c._id === course._id ? course : c
      ));
    } catch (error) {
      console.error("Course update failed:", error);
    }
  };

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteThisCourse}
                  updateCourse={updateThisCourse}
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                  updateEnrollment={updateEnrollment}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
