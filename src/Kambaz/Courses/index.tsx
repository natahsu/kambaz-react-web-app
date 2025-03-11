import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import db from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const { courses } = db;
  const currentCourse = courses.find(course => course._id === cid);
  const courseTitle = currentCourse ? currentCourse.name : "name";

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
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId/editor" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="*" element={<div>No match for: {window.location.pathname}</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
