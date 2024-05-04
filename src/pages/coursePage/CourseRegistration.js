import React, { useMemo, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Table, Button, Modal, Form, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import StudentHeader from '../../components/header_footer/CourseHeader';
import Footer from '../../components/header_footer/Footer';

const CourseRegistration = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [courses, setCourses] = useState([
    {
      'subjectId': 'CO2039',
      'name': 'LTNC',
      'room': '413-H6',
      'amount': '40',
      'teacher': 'Mai Đức Trung',
      'time': '13:00-15:00',
    },
    {
      'subjectId': 'COxxxx',
      'name': 'XYZ',
      'room': '202-H6',
      'amount': '50',
      'teacher': 'Tên Giảng Viên',
      'time': 'hh:mm-hh:mm',
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [registeredCourses, setRegisteredCourses] = useState([
    {
      'stt': '1',
      'subjectId': 'CO2039',
      'name': 'LTNC',
      'room': '413-H6',
      'amount': '40',
      'teacher': 'Mai Đức Trung',
      'time': '13:00-15:00',
    }
  ]);
  const [teacher, setTeacher] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('your_api_endpoint_here');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleRegister = async (row) => {
    // Your code to post registration data to the server
    // This could involve sending selectedCourse, teacher, and time
    // to the server to handle the registration process
    for (let i in registeredCourses) {
      if (row.original.subjectId === registeredCourses[i]['subjectId']) {
        alert('Môn học đã được đăng ký!!!');
        return;
      }
    }
    console.log('Đăng ký cho:', row.original);
    alert('Đăng ký môn thành công');
    setTeacher('');
    setTime('');
    setShowModal(false);
  };
  const handleCloseModal = () => {
    setTeacher('');
    setTime('');
    setShowModal(false);
  };
  const handleShowModal = () => {
    //setSelectedCourse(course);
    setShowModal(true);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'subjectId',
        header: 'Mã môn học',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.subjectId,
          helperText: validationErrors?.subjectId,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              subjectId: undefined,
            }),
          //readOnly: true,
        },
      },
      {
        accessorKey: 'name',
        header: 'Tên môn học',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.name,
          helperText: validationErrors?.name,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },
      {
        accessorKey: 'room',
        header: 'Phòng học',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.room,
          helperText: validationErrors?.room,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              room: undefined,
            }),
        },
      },
      {
        accessorKey: 'amount',
        header: 'Số lượng',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.amount,
          helperText: validationErrors?.amount,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'teacher',
        header: 'Giảng viên',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.teacher,
          helperText: validationErrors?.teacher,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              teacher: undefined,
            }),
        },
      },
      {
        accessorKey: 'time',
        header: 'Giờ học',
        muiEditTextFieldProps: {
          type: 'text',
          required: true,
          error: !!validationErrors?.time,
          helperText: validationErrors?.time,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              time: undefined,
            }),
        },
      },

      {
        accessorKey: 'register',
        header: 'Đăng ký môn',
        Cell: ({ row }) => (
          <Button onClick={() => handleRegister(row)}>
            Đăng ký
          </Button>
        ),
      },
    ],
    [validationErrors]
  );

  const table = useMaterialReactTable({
    columns,
    data: courses,
    getRowId: (row) => row.subjectId,
    initialState: { columnVisibility: { subjectId: true, name: true, room: true, amount: true, teacher: true, time: true } },
    muiTableContainerProps: {
      sx: {
        overflowX: 'auto',
        width: '100%',
      },
    }
  });

  return (
    <>
      <StudentHeader />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#register">
        <Row style={{ marginTop: '2%' }}>
          <Col sm={2}>
            <ListGroup>
              <ListGroup.Item action href="#register">
                Đăng ký học phần
              </ListGroup.Item>
              <ListGroup.Item action href="#education">
                Chương trình đào tạo
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="#register">
                <h4>Chọn môn học đăng ký</h4>
                <MaterialReactTable style={{ minWidth: '1000px' }} table={table} />

                <h4 style={{ marginTop: '2rem' }}>Phiếu đăng ký</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã môn học</th>
                      <th>Tên môn học</th>
                      <th>Phòng học</th>
                      <th>Số lượng</th>
                      <th>Giảng viên</th>
                      <th>Giờ học</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredCourses.map(registeredCourse => (
                      <tr key={registeredCourse.id}>
                        <td>{registeredCourse.stt}</td>
                        <td>{registeredCourse.subjectId}</td>
                        <td>{registeredCourse.name}</td>
                        <td>{registeredCourse.room}</td>
                        <td>{registeredCourse.amount}</td>
                        <td>{registeredCourse.teacher}</td>
                        <td>{registeredCourse.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="#education">
                <h1>CHƯƠNG TRÌNH ĐÀO TẠO</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký môn ... {/*selectedCourse && selectedCourse.name*/}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTeacher">
              <Form.Label>Giảng viên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên giảng viên"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Giờ học</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập giờ học"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleRegister}>
            Đăng ký
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseRegistration;