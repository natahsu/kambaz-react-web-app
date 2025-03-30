import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, deleteCourse, updateCourse, setCourse } from "./Courses/reducer";
import "./index.css";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const account = useSelector((state: any) => state.account) || {};
  const { currentUser } = account;
  const { courses, course } = useSelector((state: any) => state.courses);

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Only show course creation form for FACULTY */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={() => dispatch(addCourse())}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateCourse())}>
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: Course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card style={{ border: "none" }}>
                <Link to={`/Kambaz/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                  <img src={course.image || "/images/reactjs.jpg"} width="100%" height={160} alt={course.name} />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text" style={{ maxHeight: 100, overflowY: "hidden" }}>{course.description}</p>
                    <button className="btn btn-primary">Go</button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(setCourse(course));
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
