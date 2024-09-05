import React, { useState } from 'react';
import { Row, Col, Form, Button, Card, Table, Alert, Pagination } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // For better table formatting in PDF
import './style.css'; // Import the CSS file for pagination styles

// Mock data for train details (replace with real data source)
const trainNumbers = [
  '1234567', '2345678', '3456789', '4567890', '5678901', '6789012', '7890123'
];

const reportStatuses = [
  'On Time', 'Early', 'Delayed', 'Cancelled'
];

const fileFormats = [
  'Excel', 'PDF', 'CSV'
];

const trainDetailsMock = {
  '1234567': {
    name: 'Express 1',
    departure: '10:00 AM',
    arrival: '6:00 PM',
  },
  '2345678': {
    name: 'Express 2',
    departure: '2:00 PM',
    arrival: '10:00 PM',
  },
  // Add mock details for other train numbers as needed
};

const IndianRailwayReport = () => {
  const [selectedReport, setSelectedReport] = useState('train-schedule');
  const [selectedTrainNumber, setSelectedTrainNumber] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedFileFormat, setSelectedFileFormat] = useState('');
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
    setSelectedTrainNumber(''); // Reset train number selection when report type changes
    setSelectedStatus(''); // Reset status selection
    setSelectedMonth(''); // Reset month selection
    setSelectedFileFormat(''); // Reset file format selection
    setShowTable(false); // Hide table when report type changes
    setReportGenerated(false); // Reset report generation state
  };

  const handleTrainNumberChange = (e) => {
    setSelectedTrainNumber(e.target.value);
    setShowTable(false); // Hide table until all selections are made
    setReportGenerated(false); // Reset report generation state
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleFileFormatChange = (e) => {
    setSelectedFileFormat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTrainNumber && selectedStatus && selectedMonth && selectedFileFormat) {
      setShowTable(true);
      setReportGenerated(true); // Set report generated state to true
    } else {
      setError('Please make all selections before generating the report.');
    }
  };

  const generateExcel = () => {
    const ws = XLSX.utils.json_to_sheet([
      {
        'Train ID': selectedTrainNumber,
        'Train Name': trainDetailsMock[selectedTrainNumber]?.name || 'N/A',
        'Departure Time': trainDetailsMock[selectedTrainNumber]?.departure || 'N/A',
        'Arrival Time': trainDetailsMock[selectedTrainNumber]?.arrival || 'N/A',
        'Status': selectedStatus,
        'Month': new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })
      }
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Report');
    XLSX.writeFile(wb, `TrainReport_${selectedTrainNumber}.xlsx`);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Train Report', 14, 16);
    doc.autoTable({
      startY: 20,
      head: [['Field', 'Value']],
      body: [
        ['Train ID', selectedTrainNumber],
        ['Train Name', trainDetailsMock[selectedTrainNumber]?.name || 'N/A'],
        ['Departure Time', trainDetailsMock[selectedTrainNumber]?.departure || 'N/A'],
        ['Arrival Time', trainDetailsMock[selectedTrainNumber]?.arrival || 'N/A'],
        ['Status', selectedStatus],
        ['Month', new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })]
      ]
    });
    doc.save(`TrainReport_${selectedTrainNumber}.pdf`);
  };

  const generateCSV = () => {
    const data = [
      {
        'Train ID': selectedTrainNumber,
        'Train Name': trainDetailsMock[selectedTrainNumber]?.name || 'N/A',
        'Departure Time': trainDetailsMock[selectedTrainNumber]?.departure || 'N/A',
        'Arrival Time': trainDetailsMock[selectedTrainNumber]?.arrival || 'N/A',
        'Status': selectedStatus,
        'Month': new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })
      }
    ];
    return (
      <CSVLink
        data={data}
        filename={`TrainReport_${selectedTrainNumber}.csv`}
        className="d-none"
        target="_blank"
      />
    );
  };

  const downloadReport = () => {
    if (reportGenerated) {
      switch (selectedFileFormat) {
        case 'Excel':
          generateExcel();
          break;
        case 'PDF':
          generatePDF();
          break;
        case 'CSV':
          // Trigger CSV download by rendering CSVLink
          document.getElementById('csv-download').click();
          break;
        default:
          setError('Unsupported file format.');
      }
    } else {
      setError('Please make all selections and display the table before downloading the report.');
    }
  };

  // Retrieve train details based on the selected train number
  const trainDetails = selectedTrainNumber ? trainDetailsMock[selectedTrainNumber] : {};

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [trainDetails].slice(indexOfFirstItem, indexOfLastItem);

  // Page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil([trainDetails].length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="mb-4 text-center">Indian Railway Report</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="reportType" className="mb-4">
                  <Form.Label>Select Report Type</Form.Label>
                  <Form.Control as="select" value={selectedReport} onChange={handleReportChange} custom>
                    <option value="train-schedule">Train Schedule</option>
                    <option value="passenger-details">Passenger Details</option>
                    <option value="other-report">Other Report</option>
                  </Form.Control>
                </Form.Group>

                {selectedReport === 'train-schedule' && (
                  <React.Fragment>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="trainNumber">
                          <Form.Label>Select Train Number</Form.Label>
                          <Form.Control as="select" value={selectedTrainNumber} onChange={handleTrainNumberChange} custom>
                            <option value="">Select train number</option>
                            {trainNumbers.map((number) => (
                              <option key={number} value={number}>{number}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="status">
                          <Form.Label>Select Status</Form.Label>
                          <Form.Control as="select" value={selectedStatus} onChange={handleStatusChange} custom>
                            <option value="">Select status</option>
                            {reportStatuses.map((status) => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="month">
                          <Form.Label>Select Month</Form.Label>
                          <Form.Control as="select" value={selectedMonth} onChange={handleMonthChange} custom>
                            <option value="">Select month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="fileFormat">
                          <Form.Label>Select File Format</Form.Label>
                          <Form.Control as="select" value={selectedFileFormat} onChange={handleFileFormatChange} custom>
                            <option value="">Select file format</option>
                            {fileFormats.map((format) => (
                              <option key={format} value={format}>{format}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit">Generate Report</Button>
                  </React.Fragment>
                )}
              </Form>
              {showTable && (
                <React.Fragment>
                  <Table striped bordered hover className="mt-4">
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
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          <td>{selectedTrainNumber}</td>
                          <td>{item.name || 'N/A'}</td>
                          <td>{item.departure || 'N/A'}</td>
                          <td>{item.arrival || 'N/A'}</td>
                          <td>{selectedStatus}</td>
                          <td>{new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination className="mt-4">
                    {pageNumbers.map((number) => (
                      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                        {number}
                      </Pagination.Item>
                    ))}
                  </Pagination>
                  <Button variant="success" onClick={downloadReport} className="mt-3">Download Report</Button>
                  <CSVLink
                    data={[{
                      'Train ID': selectedTrainNumber,
                      'Train Name': trainDetails.name || 'N/A',
                      'Departure Time': trainDetails.departure || 'N/A',
                      'Arrival Time': trainDetails.arrival || 'N/A',
                      'Status': selectedStatus,
                      'Month': new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })
                    }]}
                    filename={`TrainReport_${selectedTrainNumber}.csv`}
                    className="d-none"
                    id="csv-download"
                  />
                </React.Fragment>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IndianRailwayReport;
