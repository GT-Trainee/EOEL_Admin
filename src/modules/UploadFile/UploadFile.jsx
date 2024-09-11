import React, { useState } from 'react';
import { Row, Col, Button, Form, Breadcrumb, Alert } from 'react-bootstrap';
import Card from '../../components/Card/MainCard';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
    console.log('Uploading file:', file);
    setSuccess('File uploaded successfully!');
    // Handle file upload logic here
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="./app/dashboard/analytics">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">Files</Breadcrumb.Item>
        <Breadcrumb.Item active>Upload File</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <Card title="Upload File">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              {/* File Upload Section */}
              <Form.Group className="mb-3">
                <Form.Label>Select File</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  style={{width:'25%'}}
                  required
                />
              </Form.Group>

              {/* Submit button */}
              <Button variant="primary" type="submit" className=" mb-2">
                Upload
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UploadFile;
