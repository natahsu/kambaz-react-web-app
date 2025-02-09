import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router";
import { FaUserFriends } from "react-icons/fa";

export default function KambazNavigation() {
  const [selected, setSelected] = useState("/Kambaz/Dashboard"); // Default selected link

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="images/neulogo.jpg" width="75px" />
      </a>

      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        onClick={() => setSelected("/Kambaz/Account")}
        className={`list-group-item text-center border-0 pt-4 ${
          selected === "/Kambaz/Account" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser className={`fs-1 ${selected === "/Kambaz/Account" ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>

      {[
        { to: "/Kambaz/Dashboard", Icon: AiOutlineDashboard, id: "wd-dashboard-link", label: "Dashboard" },
        { to: "/Kambaz/Courses", Icon: LiaBookSolid, id: "wd-course-link", label: "Courses" },
        { to: "/Kambaz/Calendar", Icon: IoCalendarOutline, id: "wd-calendar-link", label: "Calendar" },
        { to: "/Kambaz/Inbox", Icon: FaInbox, id: "wd-inbox-link", label: "Inbox" },
        { to: "/Kambaz/Courses/:cid/People", Icon: FaUserFriends, id: "wd-people-link", label: "People" },
        { to: "/Labs", Icon: LiaCogSolid, id: "wd-labs-link", label: "Labs" },
      ].map(({ to, Icon, id, label }) => (
        <Link
          key={to}
          to={to}
          id={id}
          onClick={() => setSelected(to)}
          className={`list-group-item text-center border-0 ${
            selected === to ? "bg-white text-danger" : "bg-black text-white"
          }`}
        >
          <Icon className={`fs-1 text-danger`} /> {/* Always Red */}
          <br />
          {label}
        </Link>
      ))}
    </div>
  );
}
