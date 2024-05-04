import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function StudentInfo() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const userdata = sessionStorage.getItem('userdata');
    if(userdata){
      const retrivedata = JSON.parse(userdata);
      setInfo(retrivedata);
    }
  }, [])
  return (
    <div className="student-info"> 
      <div className="smallbox">
        <p>Personal Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}> 
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <div style={{ textAlign: 'center' }}>
            <i className="fa-regular fa-id-badge fa-8x"></i>
          </div>
          <p style={{ fontWeight: 'bold' }}>
            Last profile photo update time: ___
          </p>
        </div>
        <div className="data-box col-3x">
          <p style={{ fontWeight: 'bold' }}>#Full Name</p>
          <p>{info.name}</p>
          <p style={{ fontWeight: 'bold' }}>#Student ID</p>
          <p>{info.mssv}</p>
          <p style={{ fontWeight: 'bold' }}>#Sex</p>
          <p>{info.private_info||'None'}</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Class</p>
          <p>{info.private_info||'None'}</p>
          <p style={{ fontWeight: 'bold' }}>#Major</p>
          <p>{info.private_info||'None'}</p>
          <p style={{ fontWeight: 'bold' }}>#Faculty</p>
          <p>{info.private_info||'None'}</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Identity Card Number</p>
          <p>{info.private_info||'None'}</p>
          <p style={{ fontWeight: 'bold' }}>#Date of issue of identity card</p>
          <p>{info.private_info||'None'}</p>
          <p style={{ fontWeight: 'bold' }}>#Place of issue of identity card</p>
          <p>{info.private_info||'None'}</p>
        </div>
      </div>
      <div className="smallbox">
        <p>Address Information</p>
      </div>
      <div className="data-container" style={{ display: 'flex' }}>
        <div className="data-box" style={{ marginLeft: '4vh' }}>
          <p style={{ fontWeight: 'bold' }}>#Address</p>
          <p>{info.private_info||'None'}</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Telephone Number</p>
          <p>{info.private_info||'None'}</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#University Email</p>
          <p>{info.private_info||'None'}</p>
        </div>
        <div className="data-box">
          <p style={{ fontWeight: 'bold' }}>#Other Email</p>
          <p>{info.private_info||'None'}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
