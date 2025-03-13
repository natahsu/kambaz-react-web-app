import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  module: string;
  availableDate: string;
  dueDate: string;
  points: number;
  status: string;
  description?: string;
}

export default function AssignmentsEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, assignmentId } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const assignmentToEdit = assignments.find((a: Assignment) => a._id === assignmentId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  useEffect(() => {
    if (assignmentToEdit) {
      setTitle(assignmentToEdit.title);
      setDescription(assignmentToEdit.description || "");
      setPoints(assignmentToEdit.points);
      setDueDate(assignmentToEdit.dueDate.slice(0,16));
      setAvailableDate(assignmentToEdit.availableDate.slice(0,16));
      setAvailableUntilDate(assignmentToEdit.availableUntilDate ? assignmentToEdit.availableUntilDate.slice(0,16) : "");
    }
  }, [assignmentToEdit]);

  const handleSave = () => {
    dispatch(updateAssignment({
      _id: assignmentId,
      title,
      description,
      points,
      dueDate,
      availableDate,
      availableUntilDate,
    }));
    navigate(`/Kambaz/Courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/assignments`);
  };

  return (
    <div className="container py-4">
      <h3>Edit Assignment</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available From Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={availableDate}
            onChange={(e) => setAvailableDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available Until Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={availableUntilDate}
            onChange={(e) => setAvailableUntilDate(e.target.value)}
          />
        </div>

        <button className="btn btn-success me-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
       </form>
      </div>
    );
}