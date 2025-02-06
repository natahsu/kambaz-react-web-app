import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./index.css";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS4550-12631 Web Development",
      description: "Section 12631 2024 Spring Full Semester",
      image: "/images/database.jpg"
    },
    {
      id: "2345",
      title: "CS4550-12632 Web Development",
      description: "Section 12632 2024 Spring Full Semester",
      image: "/images/java.jpg"
    },
    {
      id: "3456",
      title: "CS4550-12633 Web Development",
      description: "Section 12633 2024 Spring Full Semester",
      image: "/images/mobile.jpg"
    },
    {
      id: "4567",
      title: "CS4550-12634 Web Development",
      description: "Section 12634 2024 Spring Full Semester",
      image: "/images/nodejs.jpg"
    },
    {
      id: "5678",
      title: "CS4550-12635 Web Development",
      description: "Section 12635 2024 Spring Full Semester",
      image: "/images/python.jpg"
    },
    {
      id: "6789",
      title: "CS4550-12636 Web Development",
      description: "Section 12636 2024 Spring Full Semester",
      image: "/images/reactjs.jpg"
    },
    {
      id: "7890",
      title: "CS4550-12637 Web Development",
      description: "Section 12637 2024 Spring Full Semester",
      image: "/images/webdev.jpg"
    },
    {
      id: "8901",
      title: "CS4550-12638 Web Development",
      description: "Section 12638 2024 Spring Full Semester",
      image: "/images/teslabot.jpg"
    }
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <Card className="wd-dashboard-course">
                <Link
                  to={`/Kambaz/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    height={120}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description">
                      {course.description}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
