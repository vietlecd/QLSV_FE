import React, { useEffect, useState } from 'react';
import TeacherInfo from './../../components/dashboard/teacherInfo';
import Footer from '../../components/header_footer/Footer';
import SubjectSchedule from './../../components/dashboard/subjectSchedule';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {LogOut} from './../../components/auth/logout';
import TeacherHeader from '../../components/header_footer/TeacherHeader';
function DataTable() {
  const [currentView, setCurrentView] = useState('TeacherInfo');

  const handleNavigation = (viewName) => {
    setCurrentView(viewName);
  };
  
  return (
    <div>
      <TeacherHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 leftBody">
            <ul className="nav flex-column">
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer' }}>
                <a onClick={() => handleNavigation('TeacherInfo')}>
                    <i className="fa-regular fa-address-book fa-2x"></i> Personal
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'}}>
                <a onClick={() => handleNavigation('SubjectSchedule')}>
                    <i className="fa-brands fa-blackberry fa-2x"></i> DashBoard
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-10 rightBody">
            <div className="dataTable mx-auto">
              <div className="navigation">
                <a className={'active top_navbar'}>
                  Teacher Information
                </a>
              </div>
              {currentView === 'TeacherInfo' && <TeacherInfo />}
              {currentView === 'SubjectSchedule' && <SubjectSchedule />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataTable;
