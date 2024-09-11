import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Form, Card, Breadcrumb, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';

// Define the options for Autocomplete fields
const roles = ['Admin', 'User', 'Manager', 'Engineer'];
const departments = ['HR', 'IT', 'Finance', 'Operations'];

const EditDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [roleOptions, setRoleOptions] = useState(roles);
  const [departmentOptions, setDepartmentOptions] = useState(departments);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAutocompleteChange = (event, newValue, fieldName) => {
    setFormData(prevData => ({ ...prevData, [fieldName]: newValue }));
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:5000/users/${userId}`, formData)
      .then(response => {
        alert('User updated successfully');
        navigate('/'); // Navigate back to the user details page
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="edit-details-page">
      <Breadcrumb>
        <Breadcrumb.Item href='./app/dashboard/analytics'>
          <i className="feather icon-home" /> 
        </Breadcrumb.Item>
        <Breadcrumb.Item href="../user/UserDetails">Users</Breadcrumb.Item>
        <Breadcrumb.Item active>Edit User</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Body>
          <Card.Title>Edit User</Card.Title>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    placeholder="Enter name"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Autocomplete
                    options={roleOptions}
                    value={formData.role || ''}
                    onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'role')}
                    renderInput={(params) => <TextField {...params} label="Role" variant="outlined" />}
                    disableClearable
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formContact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    value={formData.contact || ''}
                    onChange={handleChange}
                    placeholder="Enter contact"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Autocomplete
                    options={departmentOptions}
                    value={formData.department || ''}
                    onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'department')}
                    renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
                    disableClearable
                  />
                </Form.Group>
              </Col>
            </Row>
            <Col md={12} className="mb-3 d-flex justify-content-end">
              <Button variant="secondary" type="submit" className='me-3'>
                Reset
              </Button>
              <Button variant="primary" type="submit" className='me-3'>
                Save Changes
              </Button>
              <Button variant="danger" type="submit">
                Cancel
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditDetails;
