// src/Kambaz/Account/Signup.tsx
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function SignIn() {
  return (
    <div id="wd-signup-screen">
      <h1>Signin</h1>
      <Form.Control 
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />
      <Form.Control 
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Link 
        id="wd-signup-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2">
        Signin
      </Link>
      <Link 
        id="wd-signup-link" 
        to="/Kambaz/Account/Signup">
        Signup
      </Link>
    </div>
  );
}

