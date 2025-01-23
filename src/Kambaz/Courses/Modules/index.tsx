export default function Modules() {
    return (
      <div>
        <div>
          <button>Collapse All</button>
          <button>View Progress</button>
          <select>
          <option>Publish All</option>
            </select>          
            <button id="wd-add-Module">+ Module</button>
        </div>
        <ul>
          <li>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ul>
              <li>LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Learn what is Web Development</li>
                </ul>
              </li>
              <li>READING
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>
              <li>SLIDES
                <ul>
                  <li>Introduction to Web Development</li>
                  <li>Creating HTML and CSS with Node.js</li>
                  <li>Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Week 1, Lecture 2 - Formatting User Interfaces with HTML</li>
        </ul>
      </div>
    );
  }
  