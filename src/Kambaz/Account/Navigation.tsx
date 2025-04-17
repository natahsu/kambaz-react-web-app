import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const isSignin = pathname.includes("Signin");
  const isSignup = pathname.includes("Signup");
  const isUsers = pathname.includes("Users"); // Add this line
  const { currentUser } = useSelector((state: any) => state.account);

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser ? (
        <>
          <Link
            to="/Kambaz/Account/Signin"
            id="wd-account-signin-link"
            className={`list-group-item ${
              isSignin ? "active text-black" : "text-danger"
            } border border-0`}
          >
            Signin
          </Link>
          <Link
            to="/Kambaz/Account/Signup"
            id="wd-account-signup-link"
            className={`list-group-item border border-0 ${
              isSignup ? "active text-black" : "text-danger"
            }`}
          >
            Signup
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/Kambaz/Account/Profile"
            id="wd-account-profile-link"
            className={`list-group-item ${
              pathname.includes("Profile") ? "active text-black" : "text-danger"
            } border border-0`}
          >
            Profile
          </Link>
          {currentUser.role === "ADMIN" && (
            <Link
              to="/Kambaz/Account/Users"
              id="wd-account-users-link"
              className={`list-group-item ${
                isUsers ? "active text-black" : "text-danger"
              } border border-0`}
            >
              Users
            </Link>
          )}
        </>
      )}
    </div>
  );
}
