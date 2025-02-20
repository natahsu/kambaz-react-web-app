import { useParams, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import db from "../../../Kambaz/Database"; 

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  status: string;
}



export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams<{ courseId: string; assignmentId: string }>();
  const assignment = db.assignments.find((a: Assignment) => a._id === assignmentId);


  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <Container id="wd-assignments-editor" className="p-5" style={{ maxWidth: "1000px" }}>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <div className="d-flex align-items-center mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Points</Form.Label>
          <Form.Control type="number" defaultValue={assignment.points} style={{ width: "100px" }} />
        </div>

        <div className="d-flex align-items-center mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Assignment Group</Form.Label>
          <Form.Select style={{ width: "200px" }}>
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </div>

        <div className="d-flex align-items-center mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Display Grade as</Form.Label>
          <Form.Select style={{ width: "200px" }}>
            <option>Percentage</option>
          </Form.Select>
        </div>

        <div className="d-flex mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Submission Type</Form.Label>
          <Card style={{ flex: 1 }}>
            <Card.Body>
              <Form.Select className="mb-3">
                <option>Online</option>
              </Form.Select>
              <div>
                <div className="fw-bold mb-2">Online Entry Options</div>
                <div className="ms-3">
                  <Form.Check type="checkbox" label="Text Entry" />
                  <Form.Check type="checkbox" label="Website URL" defaultChecked />
                  <Form.Check type="checkbox" label="Media Recordings" />
                  <Form.Check type="checkbox" label="Student Annotation" />
                  <Form.Check type="checkbox" label="File Uploads" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Assign</Form.Label>
          <Card style={{ flex: 1 }}>
            <Card.Body>
              <div className="mb-3">
                <div className="fw-bold mb-2">Assign to</div>
                <div className="border rounded p-2">
                  Everyone
                  <Button variant="link" className="ms-2 p-0 text-decoration-none">×</Button>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Due</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="datetime-local"
                    defaultValue={assignment.dueDate}
                  />
                </div>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-bold">Available from</Form.Label>
                    <div className="d-flex align-items-center">
                      <Form.Control
                        type="datetime-local"
                        defaultValue={assignment.availableDate}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-bold">Until</Form.Label>
                    <div className="d-flex align-items-center">
                      <Form.Control
                        type="datetime-local"
                        defaultValue={assignment.dueDate}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-content-end border-top pt-3">
          <Link to={`/Kanbas/courses/${courseId}/assignments`}>
            <Button variant="light" className="me-2">Cancel</Button>
          </Link>
          <Link to={`/Kanbas/courses/${courseId}/assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
}
