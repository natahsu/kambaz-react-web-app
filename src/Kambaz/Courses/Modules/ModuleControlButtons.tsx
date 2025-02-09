import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";

export default function ModuleControlButtons() {
  return (
    <span className="float-end">
      <FaCheckCircle className="text-success" />
      <FaPlus className="ms-2" />
      <FaEllipsisV className="ms-2" />
    </span>
  );
}