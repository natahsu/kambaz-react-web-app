import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/reactjs.jpg" width={200} />
              <div>
                <h5> CS1234 React JS </h5>
                <p className="wd-dashboard-course-title">
                  Full Stack Software Developer </p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/python.jpg" width={200} />
              <div>
                <h5>CS2345 Python Programming</h5>
                <p className="wd-dashboard-course-title">
                  Data Science Fundamentals</p>
                <button>Go</button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/nodejs.jpg" width={200} />
              <div>
                <h5>CS3456 Node.js</h5>
                <p className="wd-dashboard-course-title">
                  Backend Development</p>
                <button>Go</button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/4567/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/java.jpg" width={200} />
              <div>
                <h5>CS4567 Java Programming</h5>
                <p className="wd-dashboard-course-title">
                  Object-Oriented Programming</p>
                <button>Go</button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/database.jpg" width={200} />
              <div>
                <h5>CS5678 Database Systems</h5>
                <p className="wd-dashboard-course-title">
                  SQL and NoSQL Fundamentals</p>
                <button>Go</button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/6789/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/webdev.jpg" width={200} />
              <div>
                <h5>CS6789 Web Development</h5>
                <p className="wd-dashboard-course-title">
                  HTML, CSS, and JavaScript</p>
                <button>Go</button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/7890/Home"
                className="wd-dashboard-course-link" >
              <img src="/images/mobile.jpg" width={200} />
              <div>
                <h5>CS7890 Mobile Development</h5>
                <p className="wd-dashboard-course-title">
                  iOS and Android Development</p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

);}
