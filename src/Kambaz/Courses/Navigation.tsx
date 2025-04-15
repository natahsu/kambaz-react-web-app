import { Link, useParams, useLocation } from "react-router-dom";
export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(`${link}`);
        return (
          <Link
            to={`/Kambaz/Courses/${cid}/${link}`}
            id="wd-course-home-link"
            className={`list-group-item border border-0 ${
              isActive ? "active" : ""
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}