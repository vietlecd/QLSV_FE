import React from 'react'; // Use React for functional components
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function SubjectSchedule(props){
    return(
      <>
        <nav>
          <div className="navigation long_navigation" style={{width: '100%', borderTop: '3px solid blue'}}>
            <h3
            >
              DASHBOARD
            </h3>
          </div>
        </nav>
        <div className='subjectBox' style={{width: '20vh'}}></div>
      </>
    )
}
export default SubjectSchedule;