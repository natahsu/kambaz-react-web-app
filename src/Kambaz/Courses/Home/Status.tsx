export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div style={{ 
          flexDirection: 'column',
          gap: '5px'
        }}>
          <div>
            <button>Unpublish</button>
            <button>Publish</button>
          </div> <br></br>
          <button>Import Existing Content</button> <br></br>
          <button>Import from Commons</button><br></br>
          <button>Choose Home Page</button><br></br>
          <button>View Course Stream</button><br></br>
          <button>New Announcement</button><br></br>
          <button>New Analytics</button><br></br>
          <button>View Course Notifications</button><br></br>
        </div>
      </div>
    );
  }
  