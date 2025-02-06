import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation" 
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <Link 
        to="/Kambaz/Account" 
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white pt-4"
      >
        <FaRegCircleUser className="fs-1" /><br />
        Account
      </Link>
      
      <Link 
        to="/Kambaz/Dashboard" 
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
      </Link>
      
      <Link 
        to="/Kambaz/Courses" 
        id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </Link>
      
      <Link 
        to="/Kambaz/Calendar" 
        id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </Link>
      
      <Link 
        to="/Kambaz/Inbox" 
        id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox
      </Link>
      
      <Link 
        to="/Labs" 
        id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs
      </Link>
    </div>
  );
}
