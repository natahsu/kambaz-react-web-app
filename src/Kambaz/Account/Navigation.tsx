import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  
  return (
    <div className="nav flex-column">
      <Link
        to="/Kambaz/Account/Signin"
        className={`nav-link border-0 ${
          pathname.includes("Signin") 
            ? "text-dark border-start border-4 border-dark" 
            : "text-danger"
        }`}>
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        className={`nav-link border-0 ${
          pathname.includes("Signup") 
            ? "text-dark border-start border-4 border-dark" 
            : "text-danger"
        }`}>
        Signup
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        className={`nav-link border-0 ${
          pathname.includes("Profile") 
            ? "text-dark border-start border-4 border-dark" 
            : "text-danger"
        }`}>
        Profile
      </Link>
    </div>
  );
}
