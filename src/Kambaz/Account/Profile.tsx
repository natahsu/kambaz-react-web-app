import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client.ts";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.account);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <Form>
            <Form.Group controlId="wd-username" className="mb-2">
              <Form.Control
                defaultValue={profile.username}
                placeholder="Username"
                className="wd-username"
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-password" className="mb-2">
              <Form.Control
                defaultValue={profile.password}
                type="password"
                placeholder="Password"
                className="wd-password"
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-firstname" className="mb-2">
              <Form.Control
                defaultValue={profile.firstName}
                placeholder="First Name"
                id="wd-firstname"
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-lastname" className="mb-2">
              <Form.Control
                defaultValue={profile.lastName}
                placeholder="Last Name"
                id="wd-lastname"
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-dob" className="mb-2">
              <Form.Control
                defaultValue={profile.dob ? profile.dob.substring(0, 10) : ""}
                type="date"
                id="wd-dob"
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-email" className="mb-2">
              <Form.Control
                defaultValue={profile.email}
                type="email"
                id="wd-email"
                placeholder="Email"
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="wd-role" className="mb-2">
              <Form.Control
                as="select"
                value={profile.role}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </Form.Control>
            </Form.Group>
            <button
              onClick={updateProfile}
              className="btn btn-primary w-100 mb-2"
            >
              Update
            </button>
            <Link
              id="wd-signout-btn"
              to="/Kambaz/Account/Signin"
              className="btn btn-danger w-100 mb-2"
              onClick={signout}
            >
              Sign out
            </Link>
          </Form>
        </div>
      )}
    </div>
  );
}