import { useState } from "react";
import { useParams } from "react-router";
import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  console.log("Current course ID:", cid);
  
  const [moduleName, setModuleName] = useState("");
  
  const { modules } = useSelector((state: any) => state.modules);
  console.log("Modules from Redux:", modules);
  
  const filteredModules = modules ? modules.filter((module: any) => module.course === cid) : [];
  console.log("Filtered modules for course:", filteredModules);
  
  const dispatch = useDispatch();

  return (
    <div className="wd-modules-container">
      <ModulesControls 
        moduleName={moduleName} 
        setModuleName={setModuleName}
        addModule={() => {
          console.log("Adding module with name:", moduleName, "to course:", cid);
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} 
      />
      <div className="wd-modules-wrapper">
        <ListGroup className="rounded-0" id="wd-modules">
          {modules && modules.length > 0 ? (
            modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => {
                console.log("Rendering module:", module);
                return (
                  <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                      <BsGripVertical className="me-2 fs-3" />
                      {!module.editing && module.name}
                      {module.editing && (
                        <input className="form-control w-50 d-inline-block"
                          onChange={(e) => {
                            console.log("Updating module name to:", e.target.value);
                            dispatch(
                              updateModule({ ...module, name: e.target.value })
                            );
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              console.log("Finishing edit for module:", module._id);
                              dispatch(updateModule({ ...module, editing: false }));
                            }
                          }}
                          defaultValue={module.name}/>
                      )}
                      <ModuleControlButtons
                        moduleId={module._id}
                        deleteModule={(moduleId) => {
                          console.log("Deleting module:", moduleId);
                          dispatch(deleteModule(moduleId));
                        }}
                        editModule={(moduleId) => {
                          console.log("Editing module:", moduleId);
                          dispatch(editModule(moduleId));
                        }}
                      />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                      {module.lessons && module.lessons.map((lesson: any) => (
                        <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                          <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </ListGroup.Item>
                );
              })
          ) : (
            <div>No modules found for this course</div>
          )}
        </ListGroup>
      </div>
    </div>
  );
}
