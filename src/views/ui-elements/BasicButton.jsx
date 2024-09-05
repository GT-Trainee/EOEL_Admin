import React, { useState } from 'react';

// react-bootstrap
import { Row, Col, Button, Form } from 'react-bootstrap';

// project import
import Card from '../../components/Card/MainCard';

const BasicButton = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    file: null,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card title="Upload Form">
            <Form onSubmit={handleSubmit}>
              {/* Name input */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              {/* Email input */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              {/* Description input */}
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter description"
                />
              </Form.Group>

              {/* File upload input */}
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Upload File</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  onChange={handleChange}
                  accept=".jpg,.png,.pdf,.docx"
                  required
                />
                <Form.Text className="text-muted">
                  Accepted file types: .pdf, .excel, .csv
                </Form.Text>
              </Form.Group>

              {/* Submit button */}
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicButton;
