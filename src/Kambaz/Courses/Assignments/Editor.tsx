import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";

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
  availableUntilDate?: string;
}

export default function AssignmentsEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, assignmentId } = useParams();
    
  const assignments = useSelector((state: any) => 
    state.assignments ? state.assignments.assignments : []
  );
  
  const isNewAssignment = assignmentId === "new";
  
  const assignmentToEdit = isNewAssignment 
    ? null 
    : assignments.find((a: Assignment) => a._id === assignmentId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");
  const [module, setModule] = useState("Module 1");

  useEffect(() => {
    if (assignmentToEdit) {
      setTitle(assignmentToEdit.title);
      setDescription(assignmentToEdit.description || "");
      setPoints(assignmentToEdit.points);
      setModule(assignmentToEdit.module);
      
      try {
        setDueDate(assignmentToEdit.dueDate.slice(0,16));
        setAvailableDate(assignmentToEdit.availableDate.slice(0,16));
        if (assignmentToEdit.availableUntilDate) {
          setAvailableUntilDate(assignmentToEdit.availableUntilDate.slice(0,16));
        }
      } catch (e) {
        console.error("Error formatting dates:", e);
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        setDueDate(nextWeek.toISOString().slice(0,16));
        setAvailableDate(today.toISOString().slice(0,16));
        setAvailableUntilDate(nextWeek.toISOString().slice(0,16));
      }
      
    } else if (isNewAssignment) {
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7);
      
      setTitle("New Assignment");
      setDescription("");
      setPoints(100);
      setModule("Module 1");
      setDueDate(nextWeek.toISOString().slice(0,16));
      setAvailableDate(today.toISOString().slice(0,16));
      setAvailableUntilDate(nextWeek.toISOString().slice(0,16));
    }
  }, [assignmentToEdit, isNewAssignment]);

  const handleSave = () => {
    const assignmentData = {
      title,
      description,
      points,
      dueDate,
      availableDate,
      availableUntilDate,
      module,
      course: cid,
      status: "PUBLISHED"
    };
    
    
    if (isNewAssignment) {
      dispatch(addAssignment(assignmentData));
    } else {
      dispatch(updateAssignment({
        ...assignmentData,
        _id: assignmentId
      }));
    }
    
    navigate(`/Kambaz/Courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    console.log("Canceling assignment edit/creation");
    navigate(`/Kambaz/Courses/${cid}/assignments`);
  };

  return (
    <div className="container py-4">
      <h3>{isNewAssignment ? "Create Assignment" : "Edit Assignment"}</h3>
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
          <label className="form-label">Module</label>
          <input
            type="text"
            className="form-control"
            value={module}
            onChange={(e) => setModule(e.target.value)}
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

        <button type="button" className="btn btn-success me-2" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
