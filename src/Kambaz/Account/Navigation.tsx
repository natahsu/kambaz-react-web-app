import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  const isSignin = pathname.includes("Signin");
  const isSignup = pathname.includes("Signup");
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
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-account-profile-link"
          className="list-group-item text-black active border border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}