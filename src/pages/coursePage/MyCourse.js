import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { Table, Button, Modal, Form, Row, Col, Tab, ListGroup } from 'react-bootstrap';

import StudentHeader from '../../components/header_footer/CourseHeader';
import Footer from '../../components/header_footer/Footer';

function MyCourse() {
  return (
    <>
      <StudentHeader />
      <div style={{ margin: '5% 10%' }}>
        <div style={{ marginBottom: '2%' }}>
          <h2 style={{ color: '#eba234' }}>Khóa học của tôi</h2>
        </div>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 7 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default MyCourse;