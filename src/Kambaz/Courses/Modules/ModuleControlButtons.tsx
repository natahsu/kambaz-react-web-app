import { FaCheckCircle, FaEllipsisV, FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ 
  moduleId, 
  deleteModule, 
  editModule 
}: {
  moduleId: string; 
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void 
}) {
  return (
    <span className="float-end">
      <FaPencil 
        onClick={() => editModule(moduleId)} 
        className="text-primary me-3" 
      />
      <FaTrash 
        className="text-danger me-2 mb-1" 
        onClick={() => deleteModule(moduleId)}
      />
      <FaCheckCircle className="text-success" />
      <FaPlus className="ms-2" />
      <FaEllipsisV className="ms-2" />
    </span>
  );
}
