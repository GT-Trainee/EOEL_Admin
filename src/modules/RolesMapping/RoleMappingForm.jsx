import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RoleMappingForm = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roleName: '',
    status: 'active'
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (roleId) {
      // Edit mode: fetch data for the role
      axios.get(`http://localhost:5000/role-mapping/${roleId}`)
        .then(response => {
          setFormData(response.data);
          setIsEditMode(true);
        })
        .catch(error => {
          console.error('Error fetching role mapping data:', error);
        });
    }
  }, [roleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update existing role mapping
      axios.put(`http://localhost:5000/role-mapping/${roleId}`, formData)
        .then(() => {
          alert('Role mapping updated successfully');
          navigate('/basic/RoleMapping');
        })
        .catch(error => {
          console.error('Error updating role mapping:', error);
        });
    } else {
      // Create new role mapping
      axios.post('http://localhost:5000/role-mapping', formData)
        .then(() => {
          alert('Role mapping added successfully');
          navigate('/basic/RoleMapping');
        })
        .catch(error => {
          console.error('Error adding role mapping:', error);
        });
    }
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/basic/Roles">Role Mapping</Breadcrumb.Item>
        <Breadcrumb.Item active>{isEditMode ? 'Edit Role' : 'Add Role'}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>{isEditMode ? 'Edit Role Mapping' : 'Add Role Mapping'}</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formRoleName">
                  <Form.Label className='mt-3'>Role Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="roleName"
                    value={formData.roleName}
                    onChange={handleChange}
                    placeholder="Enter role name"
                    style={{width:'40%'}}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formStatus">
                  <Form.Label className='mt-3'>Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    style={{width:'40%'}}
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Form.Control>
                </Form.Group>

                <div className="mt-3 d-flex">
                  <Button variant="secondary" className='me-3 mt-3' onClick={() => navigate('/basic/RoleMapping')}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" className="ml-2 mt-3">
                    {isEditMode ? 'Update Role' : 'Add Role'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RoleMappingForm;
