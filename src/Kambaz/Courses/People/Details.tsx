import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import FormControl from "react-bootstrap/FormControl";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  const startEditing = () => {
    setEditing(true);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  const saveUser = async () => {
    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ");
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      role
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />

      {/* Name Section */}
      <div className="text-danger fs-4 mb-3">
        {!editing && (
          <FaPencil
            onClick={startEditing}
            className="float-end fs-5 mt-2 wd-edit"
            style={{ cursor: "pointer" }}
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save"
            style={{ cursor: "pointer" }}
          />
        )}
        {!editing ? (
          <div
            className="wd-name"
            onClick={startEditing}
            style={{ cursor: "pointer" }}
          >
            {user.firstName} {user.lastName}
          </div>
        ) : (
          <FormControl
            className="wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveUser()}
            autoFocus
          />
        )}
      </div>

      {/* Role Section */}
      <div className="mb-3">
        <b>Role:</b>
        {editing ? (
          <FormControl
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
          </FormControl>
        ) : (
          <div className="wd-roles">{user.role}</div>
        )}
      </div>

      {/* Email Section */}
      <div className="mb-3">
        <b>Email:</b>
        {editing ? (
          <FormControl
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
          />
        ) : (
          <div className="wd-email">{user.email}</div>
        )}
      </div>

      {/* Non-editable Fields */}
      <div className="mb-3">
        <b>Login ID:</b>
        <div className="wd-login-id">{user.loginId}</div>
      </div>
      <div className="mb-3">
        <b>Section:</b>
        <div className="wd-section">{user.section}</div>
      </div>
      <div>
        <b>Total Activity:</b>
        <div className="wd-total-activity">{user.totalActivity}</div>
      </div>
    </div>
  );
}
