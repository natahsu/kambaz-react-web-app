export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          <label htmlFor="wd-name">Assignment Name</label>
        </div>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br /><br />
        
        <textarea 
          id="wd-description" 
          rows={8}
          style={{ width: '400px' }}
          defaultValue="The assignment is available online Submit a link to the landing page of your application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambaz application where to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page." 
        />
        <br /><br />
        
        <table cellSpacing={12}>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" defaultValue={100} />
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option>Percentage</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td></td>
              <td>
                <div style={{ marginTop: '10px' }}>
                  Online Entry Options
                  <div style={{ marginTop: '8px' }}>
                    <div>
                      <input type="checkbox" id="wd-text-entry" />
                      <label htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div>
                      <input type="checkbox" id="wd-website-url" />
                      <label htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div>
                      <input type="checkbox" id="wd-media-recordings" />
                      <label htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div>
                      <input type="checkbox" id="wd-student-annotation" />
                      <label htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div>
                      <input type="checkbox" id="wd-file-uploads" />
                      <label htmlFor="wd-file-uploads">File Uploads</label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-assign-to">Assign to</label>
              </td>
              <td>
                <input id="wd-assign-to" defaultValue="Everyone" style={{ width: '200px' }} />
              </td>
            </tr>
            
            <tr>
              <td colSpan={2}>
                <div style={{ marginTop: '20px' }}>
                  <div>Due</div>
                  <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
                </div>
              </td>
            </tr>
            
            <tr>
              <td colSpan={2}>
                <div>Available from</div>
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
                <div style={{ display: 'inline-block', marginLeft: '20px' }}>Until</div>
                <input 
                  type="date" 
                  id="wd-available-until" 
                  defaultValue="2024-05-20"
                  style={{ marginLeft: '10px' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ 
          borderTop: '1px solid #ccc',
          marginTop: '20px',
          paddingTop: '20px',
          textAlign: 'right'
        }}>
          <button>Cancel</button>
          <button style={{ marginLeft: '10px' }}>Save</button>
        </div>
      </div>
    );
  }
  