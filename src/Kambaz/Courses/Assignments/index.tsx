import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsSearch, BsCaretDownFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { Modal } from "react-bootstrap";
import { useState } from "react"; // Remove local useState declaration

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
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

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

  const [showModal, setShowModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null); // Corrected type

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/assignments/new/editor`);
  };

  const handleDeleteAssignment = (e: React.MouseEvent, assignmentId: string) => {
    e.stopPropagation();
    setAssignmentToDelete(assignmentId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setShowModal(false);
      setAssignmentToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setAssignmentToDelete(null);
  };

  return (
    <div className="wd-assignments-container">
      {/* Your JSX content here */}
    </div>
  );
}
