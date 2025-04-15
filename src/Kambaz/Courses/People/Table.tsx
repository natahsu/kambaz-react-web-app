import { Button, Table, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as coursesClient from "../client";
import { useEffect, useState } from "react";
import ProtectedFaculty from "../../ProtectedFaculty";
export default function PeopleTable() {
  const { cid } = useParams();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const response = await coursesClient.findEnrollmentsForCourse(
          cid as string
        );
        setEnrollments(response || []);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
        setEnrollments([]);
      }
    }

    fetchEnrollments();
  }, [cid]);
  async function handleAddUser() {
    try {
      await coursesClient.addUserToCourse(cid as string, userId);
      const updatedEnrollments = await coursesClient.findEnrollmentsForCourse(
        cid as string
      );
      setEnrollments(updatedEnrollments || []);
      setUserId("");
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user to course:", error);
      alert("Failed to add user. Please try again.");
    }
  }
  return (
    <div id="wd-people-table">
      <ProtectedFaculty studentAccess={<></>}>
        <div className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="me-2"
          />
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </div>
      </ProtectedFaculty>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}