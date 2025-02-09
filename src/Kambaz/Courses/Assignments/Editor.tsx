import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container id="wd-assignments-editor" className="p-5" style={{ maxWidth: "1000px" }}>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
          />
        </Form.Group>

        <div className="d-flex align-items-center mb-3">
          <Form.Label className="text-end me-3 mb-0" style={{ minWidth: "150px" }}>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} style={{ width: "100px" }} />
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
            defaultValue="2024-05-13T23:59" 
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
                defaultValue="2024-05-06T00:00" 
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
                defaultValue="2024-05-20T23:59" 
              />
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Card.Body>
  </Card>
</div>

        <div className="d-flex justify-content-end border-top pt-3">
          <Button variant="light" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </Container>
  );
}
