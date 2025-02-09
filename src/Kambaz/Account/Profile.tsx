import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control 
        id="wd-username"
        placeholder="alice"
        className="mb-2"
      />
      <Form.Control 
        id="wd-password"
        placeholder="123"
        type="password"
        className="mb-2"
      />
      <Form.Control 
        id="wd-first-name"
        placeholder="Alice"
        className="mb-2"
      />
      <Form.Control 
        id="wd-last-name"
        placeholder="Wonderland"
        className="mb-2"
      />
      <Form.Control 
        type="date"
        className="mb-2"
      />
      <Form.Control 
        type="email"
        placeholder="alice@wonderland.com"
        className="mb-2"
      />
      <Form.Select 
        className="mb-2">
        <option>User</option>
        <option>Admin</option>
      </Form.Select>
      <Link 
        id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100">
        Signout
      </Link>
    </div>
  );
}
