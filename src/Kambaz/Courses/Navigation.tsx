import { Link } from "react-router-dom";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <ul>
        <li>
          <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link">Home</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link">Modules</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link">Assignments</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link>
        </li>
        <li>
          <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link">People</Link>
        </li>
      </ul>
    </div>
  );
}

