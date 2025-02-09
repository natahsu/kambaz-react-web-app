import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsSearch, BsCaretDownFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LessonControlButtons from "../../../Kambaz/Courses/Modules/LessonControlButtons";

export default function Assignments() {
  const navigate = useNavigate();

  return (
    <div className="wd-assignments-container">
      <div style={{ margin: '0 5rem' }}>
        <div className="d-flex justify-content-between align-items-center py-4">
          <div className="position-relative">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <BsSearch />
              </span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="form-control" 
                style={{ width: "240px" }}
              />
            </div>
          </div>
          <div>
            <button className="btn btn-light me-2">
              + Group
            </button>
            <button className="btn btn-danger">
              + Assignment
            </button>
          </div>
        </div>

        <ListGroup className="rounded-0" style={{ border: '0.5px solid #dee2e6' }}>
          <ListGroup.Item className="d-flex align-items-center bg-light py-3" style={{ border: '0.5px solid #dee2e6' }}>
            <BsGripVertical className="me-2 fs-4 text-dark" />
            <BsCaretDownFill className="me-2 fs-5" />
            <span className="fw-bold fs-5">ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-center">
              <span className="badge border border-dark text-dark bg-transparent rounded-pill me-3 fs-6">40% of Total</span>
              <span className="text-dark fs-4 me-2" style={{ cursor: "pointer" }}>+</span>
              <button className="btn btn-link p-0">
                <BsThreeDotsVertical className="fs-4 text-dark" />
              </button>
            </div>
          </ListGroup.Item>

          {[
            {
              id: "A1",
              date: "May 6",
              dueDate: "May 13"
            },
            {
              id: "A2",
              date: "May 13",
              dueDate: "May 20"
            },
            {
              id: "A3",
              date: "May 20",
              dueDate: "May 27"
            }
          ].map((assignment) => (
            <ListGroup.Item 
              key={assignment.id}
              className="py-3 position-relative"
              style={{ 
                cursor: "pointer",
                border: '0.5px solid #dee2e6'
              }}
              onClick={() => navigate("./editor")}
            >
              <div className="position-absolute h-100" 
                style={{ 
                  width: '4px', 
                  backgroundColor: '#198754',
                  left: 0,
                  top: 0
                }} 
              />
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-4 text-secondary" />
                <FaFileAlt className="me-4 fs-4 text-success" />
                <div className="flex-grow-1">
                  <div className="fw-bold fs-5 mb-2">{assignment.id}</div>
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="text-dark"> | <span className="fw-bold">Not available until</span> {assignment.date} at 12:00am |</span>
                  </div>
                  <div className="text-dark fs-6">
                    <span className="fw-bold">Due</span> {assignment.dueDate} at 11:59pm | 100 pts
                  </div>
                </div>
                <div style={{ transform: 'scale(1.2)' }}>
                  <LessonControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
