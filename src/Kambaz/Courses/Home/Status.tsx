import { MdOutlineNotifications } from "react-icons/md";
import { BiBlock, BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { TbNews } from "react-icons/tb";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "250px" }} className="p-3">
      <h2 className="mb-3">Course Status</h2>
      
      <div className="d-flex mb-4">
        <Button variant="light" size="sm" className="w-50 text-nowrap border">
          <BiBlock className="me-2" /> Unpublish
        </Button>
        <Button variant="success" size="sm" className="w-50">
          <FaCheck className="me-2" /> Published
        </Button>
      </div>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <BiImport className="me-2" /> Import Existing Content
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <LiaFileImportSolid className="me-2" /> Import from Commons
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <AiOutlineHome className="me-2" /> Choose Home Page
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <HiOutlineStatusOnline className="me-2" /> View Course Stream
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <TbNews className="me-2" /> New Announcement
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <BsBarChartLine className="me-2" /> New Analytics
      </Button>
      
      <Button variant="light" size="sm" className="w-100 mb-2 text-start border ps-3">
        <MdOutlineNotifications className="me-2" /> View Course Notifications
      </Button>
    </div>
  );
}
