import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Quizzes from "./Quizzes";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { courses } = useSelector((state: any) => state.courses);

  const course = courses.find((course: any) => course._id === cid);
  const courseTitle = course ? course.name : "name";

  const pathSegments = pathname.split("/").filter(segment => segment);
  const section = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "";
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {courseTitle} {section && `> ${section}`}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Quizzes" element={<Quizzes courses={courses} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
