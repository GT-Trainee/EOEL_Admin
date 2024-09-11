import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserMappingForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    role: '',
    status: 'active'
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (userId) {
      // Edit mode: fetch data for the user
      axios.get(`http://localhost:5000/user-mapping/${userId}`)
        .then(response => {
          setFormData(response.data);
          setIsEditMode(true);
        })
        .catch(error => {
          console.error('Error fetching user mapping data:', error);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update existing user mapping
      axios.put(`http://localhost:5000/user-mapping/${userId}`, formData)
        .then(() => {
          alert('User mapping updated successfully');
          navigate('/basic/UserMapping');
        })
        .catch(error => {
          console.error('Error updating user mapping:', error);
        });
    } else {
      // Create new user mapping
      axios.post('http://localhost:5000/user-mapping', formData)
        .then(() => {
          alert('User mapping added successfully');
          navigate('/basic/UserMapping');
        })
        .catch(error => {
          console.error('Error adding user mapping:', error);
        });
    }
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/basic/UserMapping">User Mapping</Breadcrumb.Item>
        <Breadcrumb.Item active>{isEditMode ? 'Edit Mapping' : 'Add Mapping'}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>{isEditMode ? 'Edit User Mapping' : 'Add User Mapping'}</Card.Title>
             <Row>
             <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUserName">
                  <Form.Label className='mt-3'>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter user name"
                    style={{width:'40%'}}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formRole">
                  <Form.Label className='mt-3'>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Enter role"
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

                <Col md={12} className="mb-3 mt-5">
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
              </Form>
             </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserMappingForm;
