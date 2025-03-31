import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsSearch, BsCaretDownFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  module: string;
  availableDate: string;
  dueDate: string;
  points: number;
  status: string;
}

export default function Assignments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid } = useParams();
    
  const assignments = useSelector((state: any) => 
    state.assignments ? state.assignments.assignments : []
  );

  const courseAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString('default', { month: 'short' }),
      day: date.getDate(),
      time: date.toLocaleString('default', { hour: '2-digit', minute: '2-digit' })
    };
  };
  
  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/assignments/new/editor`);
  };
  
  const handleDeleteAssignment = (e: React.MouseEvent, assignmentId: string) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
            <button className="btn btn-danger" onClick={handleAddAssignment}>
              + Assignment
            </button>
          </div>
        </div>

        <ListGroup className="rounded-0" style={{ border: '0.5px solid #dee2e6' }}>
          <ListGroup.Item className="d-flex align-items-center bg-light py-3" 
            style={{ border: '0.5px solid #dee2e6' }}>
            <BsGripVertical className="me-2 fs-4 text-dark" />
            <BsCaretDownFill className="me-2 fs-5" />
            <span className="fw-bold fs-5">ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-center">
              <span className="badge border border-dark text-dark bg-transparent rounded-pill me-3 fs-6">
                40% of Total
              </span>
              <span className="text-dark fs-4 me-2" style={{ cursor: "pointer" }}>+</span>
              <button className="btn btn-link p-0">
                <BsThreeDotsVertical className="fs-4 text-dark" />
              </button>
            </div>
          </ListGroup.Item>

          {courseAssignments.map((assignment: Assignment) => {
            console.log("Rendering assignment:", assignment);
            const availableDate = formatDate(assignment.availableDate);
            const dueDate = formatDate(assignment.dueDate);
            
            return (
              <ListGroup.Item 
                key={assignment._id}
                className="py-3 position-relative"
                style={{ 
                  cursor: "pointer",
                  border: '0.5px solid #dee2e6'
                }}
                onClick={() => navigate(`/Kambaz/Courses/${cid}/assignments/${assignment._id}/editor`)}
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
                    <div className="fw-bold fs-5 mb-2">{assignment.title}</div>
                    <div className="fs-6">
                      <span className="text-danger">{assignment.module}</span>
                      <span className="text-dark"> | 
                        <span className="fw-bold">Not available until</span> 
                        {` ${availableDate.month} ${availableDate.day} at ${availableDate.time}`} |
                      </span>
                    </div>
                    <div className="text-dark fs-6">
                      <span className="fw-bold">Due</span> 
                      {` ${dueDate.month} ${dueDate.day} at ${dueDate.time}`} | 
                      {` ${assignment.points} pts`}
                    </div>
                  </div>
                  <div>
                    <button 
                      className="btn btn-danger btn-sm me-2"
                      onClick={(e) => handleDeleteAssignment(e, assignment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}
