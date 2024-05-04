import React, { useState } from 'react';
import StudentInfo from '../../components/dashboard/studentInfo';
import Training from '../../components/dashboard/studentTraining';
import Footer from '../../components/header_footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentHeader from '../../components/header_footer/StudentHeader';
import './Dashboard.css';

function DataTable() {
  const [currentView, setCurrentView] = useState('StudentInfo');

  const handleNavigation = (viewName) => {
    setCurrentView(viewName);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <StudentHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 leftBody">
            <ul className="nav flex-column">
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'  }}>
                <i className="fas fa-regular fa-id-badge fa-md fa-2x"></i> Personal
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)}>
                <i className="fa fa-solid fa-book fa-md fa-2x"></i>  Study
                <i className="fa-solid fa-angles-down"></i>
                {isOpen && (
                  <ul>      
                    <li className="nav-item" style={{ paddingTop: '2rem' }}>
                      <Link to={'/student/course'} style={{ color: 'white', padding: '0', textDecoration: 'none'}}>Schedule</Link>
                    </li>
                    <li className="nav-item" style={{ paddingTop: '2rem' }}>
                      <Link to={'/student/course'} style={{ color: 'white', padding: '0', textDecoration: 'none'}}>Course</Link>
                    </li>
                    <li className="nav-item" style={{ paddingTop: '2rem' }}>
                      <Link to={'/student/courseRegistration'} style={{ color: 'white', padding: '0', textDecoration: 'none'}}>Course registration</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="col-md-10 rightBody">
            <div className="dataTable mx-auto">
              <div className="navigation">
                <a
                  onClick={() => handleNavigation('StudentInfo')}
                  className={currentView === 'StudentInfo' ? 'active top_navbar' : ' top_navbar'}
                >
                  Student Information
                </a>
                <a
                  onClick={() => handleNavigation('Training')}
                  className={currentView === 'Training' ? 'active top_navbar' : ' top_navbar'}
                >
                  Training Information
                </a>
              </div>
              <div style={{ padding: '10px' }}>
                <i style={{ fontWeight: 'bold' }}>Last updated time: dd/mm/yyyy realtime</i>
              </div>
              {currentView === 'StudentInfo' && <StudentInfo />}
              {currentView === 'Training' && <Training />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataTable;
