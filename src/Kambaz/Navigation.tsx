import { Link } from "react-router-dom";

export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation">
            <ul>
                <li>
                    <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a>
                </li>
                <li>
                    <Link to="/Kambaz/Account" id="wd-account-link">Account</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Dashboard" id="wd-course-link">Courses</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link>
                </li>
                <li>
                    <Link to="/Labs" id="wd-labs-link">Labs</Link>
                </li>
            </ul>
        </div>
    );
}

