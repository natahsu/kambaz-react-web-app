import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./index.css";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS4550-87234 Web Development",
      description: "CS4550.87234.120947\n120947 Spring 2025 Semester Full Term",
      image: "/images/blue.jpg"
    },
    {
      id: "2345",
      title: "CS3200-98321 Database Design",
      description: "CS3200.98321.125678\n125678 Spring 2025 Semester Full Term",
      image: "/images/darkblue.jpg"
    },
    {
      id: "3456",
      title: "CS3500-67289 Object-Oriented Design",
      description: "CS3500.67289.134567\n134567 Spring 2025 Semester Full Term",
      image: "/images/green.jpg"
    },
    {
      id: "4567",
      title: "CS3650-74532 Computer Systems",
      description: "CS3650.74532.145678\n145678 Spring 2025 Semester Full Term",
      image: "/images/hotpink.jpg"
    },
    {
      id: "5678",
      title: "CS3700-85643 Networks and Distributed Systems",
      description: "CS3700.85643.156789\n156789 Spring 2025 Semester Full Term",
      image: "/images/orange.jpg"
    },
    {
      id: "6789",
      title: "CS4500-92345 Software Development",
      description: "CS4500.92345.167890\n167890 Spring 2025 Semester Full Term",
      image: "/images/pink.jpg"
    },
    {
      id: "7890",
      title: "CS4800-81234 Algorithms and Data",
      description: "CS4800.81234.178901\n178901 Spring 2025 Semester Full Term",
      image: "/images/red.jpg"
    },
    {
      id: "8901",
      title: "CS2510-76543 Fundamentals of Computer Science",
      description: "CS2510.76543.189012\n189012 Spring 2025 Semester Full Term",
      image: "/images/yellow.jpg"
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
                  <Card.Body className="bg-white">
                    <Card.Title className="wd-dashboard-course-title">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description text-secondary">
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
