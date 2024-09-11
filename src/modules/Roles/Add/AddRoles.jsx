import React, { useState } from 'react';
import { Row, Col, Button, Form, Breadcrumb } from 'react-bootstrap';
import Card from '../../../components/Card/MainCard';
import { Autocomplete, TextField } from '@mui/material';

// Define the options for Autocomplete fields
const statuses = ['Active', 'Inactive'];
const permissions = ['Read', 'Write', 'Execute', 'Admin'];

const AddRoles = () => {
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    status: '',
    permissions: [],
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
    console.log('Role Data:', formData);
    // Handle form submission logic (e.g., send data to backend)
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="./app/dashboard/analytics">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="../Roles/Roles">Roles</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Role</Breadcrumb.Item>
      </Breadcrumb>
      <Card title="Add Role">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formRoleName">
                <Form.Label>Role Name</Form.Label>
                <Form.Control
                  type="text"
                  name="roleName"
                  value={formData.roleName}
                  onChange={handleChange}
                  placeholder="Enter role name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter role description"
                  rows={3}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formPermissions">
                <Form.Label>Permissions</Form.Label>
                <Autocomplete
                  multiple
                  options={permissions}
                  value={formData.permissions}
                  onChange={(event, newValue) => handleAutocompleteChange(event, newValue, 'permissions')}
                  renderInput={(params) => <TextField {...params} label="Permissions" variant="outlined" />}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
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
          <Col md={12} className="mb-3 d-flex justify-content-end">
              <Button variant="secondary" type="submit" className='me-3'>
                Reset
              </Button>
              <Button variant="primary" type="submit" className='me-3'>
                Save
              </Button>
              <Button variant="danger" type="submit" >
                Cancel
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
    </div>
  );
};

export default AddRoles;
