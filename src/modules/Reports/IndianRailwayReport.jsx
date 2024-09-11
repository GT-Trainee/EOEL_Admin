import React, { useState } from 'react';
import { Row, Col, Form, Button, Card, Table, Alert, Breadcrumb, ButtonGroup } from 'react-bootstrap';
import './style.css'; // Make sure to add necessary styles

const IndianRailwayReport = () => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedTrainNumber, setSelectedTrainNumber] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedFileFormat, setSelectedFileFormat] = useState('');
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false);

  const zones = ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'];
  const departments = {
    'Zone A': ['Dept A1', 'Dept A2', 'Dept A3', 'Dept A4'],
    'Zone B': ['Dept B1', 'Dept B2', 'Dept B3', 'Dept B4'],
    'Zone C': ['Dept C1', 'Dept C2', 'Dept C3', 'Dept C4'],
    'Zone D': ['Dept D1', 'Dept D2', 'Dept D3', 'Dept D4'],
    'Zone E': ['Dept E1', 'Dept E2', 'Dept E3', 'Dept E4']
  };
  const branches = {
    'Dept A1': ['Branch A1-1', 'Branch A1-2'],
    'Dept A2': ['Branch A2-1', 'Branch A2-2'],
    'Dept B1': ['Branch B1-1', 'Branch B1-2'],
    'Dept B2': ['Branch B2-1', 'Branch B2-2'],
    'Dept C1': ['Branch C1-1', 'Branch C1-2'],
    'Dept C2': ['Branch C2-1', 'Branch C2-2'],
    'Dept D1': ['Branch D1-1', 'Branch D1-2'],
    'Dept D2': ['Branch D2-1', 'Branch D2-2'],
    'Dept E1': ['Branch E1-1', 'Branch E1-2'],
    'Dept E2': ['Branch E2-1', 'Branch E2-2']
  };
  const trainNumbers = ['1234567', '2345678', '3456789'];
  const reportStatuses = ['On Time', 'Early', 'Delayed', 'Cancelled'];
  const fileFormats = ['Excel', 'PDF', 'CSV'];

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
    setSelectedDept('');
    setSelectedBranch('');
  };

  const handleDeptClick = (dept) => {
    setSelectedDept(dept);
    setSelectedBranch('');
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTrainNumber && selectedStatus && selectedMonth && selectedFileFormat && selectedZone && selectedDept && selectedBranch) {
      setShowTable(true);
      setError('');
    } else {
      setError('Please make all selections before generating the report.');
    }
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="./app/dashboard/analytics"><i className="feather icon-home" /></Breadcrumb.Item>
        <Breadcrumb.Item href="/">Reports</Breadcrumb.Item>
        <Breadcrumb.Item active><strong>Indian Railway Report</strong></Breadcrumb.Item>
      </Breadcrumb>

      <Row className="justify-content-center mt-4">
        <Col xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="mb-4">Indian Railway Report</Card.Title>
              {error && <Alert variant="danger" className="custom-alert">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="mb-4">
                
                {/* Zone, Dept, Branch Selection in Columns */}
                <Row className="mb-4">
                  <Col md={3} className="custom-form-col">
                    <Form.Group controlId="zones">
                      <Form.Label>Select Zone</Form.Label>
                      <ButtonGroup vertical className="w-100">
                        {zones.map((zone) => (
                          <Button
                            key={zone}
                            variant={selectedZone === zone ? 'primary' : 'secondary'}
                            className="mb-2 w-100 custom-button"
                            onClick={() => handleZoneClick(zone)}
                          >
                            {zone}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </Form.Group>
                  </Col>

                  <Col md={3} className="custom-form-col">
                    {selectedZone && (
                      <Form.Group controlId="departments">
                        <Form.Label>Select Department</Form.Label>
                        <ButtonGroup vertical className="w-100">
                          {departments[selectedZone].map((dept) => (
                            <Button
                              key={dept}
                              variant={selectedDept === dept ? 'primary' : 'secondary'}
                              className="mb-2 w-100 custom-button"
                              onClick={() => handleDeptClick(dept)}
                            >
                              {dept}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </Form.Group>
                    )}
                  </Col>

                  <Col md={3} className="custom-form-col">
                    {selectedDept && (
                      <Form.Group controlId="branches">
                        <Form.Label>Select Branch</Form.Label>
                        <ButtonGroup vertical className="w-100">
                          {branches[selectedDept].map((branch) => (
                            <Button
                              key={branch}
                              variant={selectedBranch === branch ? 'primary' : 'secondary'}
                              className="mb-2 w-100 custom-button"
                              onClick={() => handleBranchClick(branch)}
                            >
                              {branch}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </Form.Group>
                    )}
                  </Col>

                  <Col md={3} className="custom-form-col" style={{backgroundColor:'whitesmoke'}}>
                   {/* After Zone, Dept, Branch Selection, show Train/Report Fields */}
                    {selectedZone && selectedDept && selectedBranch && (
                      <>
                        {/* Train Number */}
                        <Form.Group controlId="trainNumber" className="custom-form-group">
                          <Form.Label className='mt-4'>Select Train Number</Form.Label>
                          <Form.Control as="select" value={selectedTrainNumber} onChange={(e) => setSelectedTrainNumber(e.target.value)} className="custom-select" required>
                            <option value="">Select train number</option>
                            {trainNumbers.map((number) => (
                              <option key={number} value={number}>{number}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>

                        {/* Status */}
                        <Form.Group controlId="status" className="custom-form-group">
                          <Form.Label>Select Status</Form.Label>
                          <Form.Control as="select" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="custom-select" required>
                            <option value="">Select status</option>
                            {reportStatuses.map((status) => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>

                        {/* Month */}
                        <Form.Group controlId="month" className="custom-form-group">
                          <Form.Label>Select Month</Form.Label>
                          <Form.Control as="select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="custom-select" required>
                            <option value="">Select month</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>

                        {/* File Format */}
                        <Form.Group controlId="fileFormat" className="custom-form-group">
                          <Form.Label>Select File Format</Form.Label>
                          <Form.Control as="select" value={selectedFileFormat} onChange={(e) => setSelectedFileFormat(e.target.value)} className="custom-select" required>
                            <option value="">Select file format</option>
                            {fileFormats.map((format) => (
                              <option key={format} value={format}>{format}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="custom-button custom-button-primary">Generate Report</Button>
                      </>
                    )}
                  </Col>
                </Row>

              </Form>

              {/* Report Table */}
              {showTable && (
                <Card className="mb-4">
                  <Card.Body>
                    <Table bordered responsive className="custom-table">
                      <thead>
                        <tr>
                          <th>Train ID</th>
                          <th>Train Name</th>
                          <th>Departure Time</th>
                          <th>Arrival Time</th>
                          <th>Status</th>
                          <th>Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedTrainNumber}</td>
                          <td>{'Express 1'}</td>
                          <td>{'10:00 AM'}</td>
                          <td>{'6:00 PM'}</td>
                          <td>{selectedStatus}</td>
                          <td>{new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IndianRailwayReport;
