import React, { useState } from 'react';
import { Row, Col, Button, Form, Breadcrumb } from 'react-bootstrap';
import Card from '../../../components/Card/MainCard';
import { Autocomplete, TextField } from '@mui/material';

// Define the options for Autocomplete fields
const roles = ['Admin', 'User', 'Manager', 'Engineer'];
const departments = ['HR', 'IT', 'Finance', 'Operations'];
const statuses = ['Active', 'Inactive'];
const employmentTypes = ['Permanent', 'Contract', 'Temporary'];
const railwayIds = ['1234', '5678', '91011', '1213']; // Example railway IDs

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    railwayId: '',
    designation: '',
    department: '',
    role: '',
    contact: '',
    status: '',
    gender: '',
    nationality: '',
    employmentType: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Autocomplete value change
  const handleAutocompleteChange = (event, newValue, fieldName) => {
    setFormData({ ...formData, [fieldName]: newValue });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData);
    // Handle form submission logic (e.g., send data to backend)
  };

  return (
    <div>
      <Breadcrumb>
      <Breadcrumb.Item href="./app/dashboard/analytics">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="../user/UserDetails">Users</Breadcrumb.Item>
        <Breadcrumb.Item active><strong>Create User</strong></Breadcrumb.Item>
      </Breadcrumb>
      <Card title="Add User">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formRailwayId">
                <Form.Label>Railway ID</Form.Label>
                <Autocomplete
                  options={railwayIds}
                  value={formData.railwayId}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'railwayId')}
                  renderInput={(params) => <TextField {...params} label="Railway ID" variant="outlined" />}
                  disableClearable
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter designation"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Autocomplete
                  options={departments}
                  value={formData.department}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'department')}
                  renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
                  disableClearable
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Autocomplete
                  options={roles}
                  value={formData.role}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'role')}
                  renderInput={(params) => <TextField {...params} label="Role" variant="outlined" />}
                  disableClearable
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Autocomplete
                  options={statuses}
                  value={formData.status}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'status')}
                  renderInput={(params) => <TextField {...params} label="Status" variant="outlined" />}
                  disableClearable
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formNationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter nationality"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group controlId="formEmploymentType">
                <Form.Label>Employment Type</Form.Label>
                <Form.Control
                  as="select"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Employment Type</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3 d-flex justify-content-end">
              <Button variant="secondary" type="submit" className='me-3'>
                Reset
              </Button>
              <Button variant="primary" type="submit" className='me-3'>
                Save
              </Button>
              <Button variant="danger" type="submit">
                Cancel
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
