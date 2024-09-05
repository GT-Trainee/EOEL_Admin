import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-quartz.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './style.css';

// react-bootstrap
import { Row, Col, Button, Offcanvas, Form } from 'react-bootstrap';

// project import
import Card from '../../components/Card/MainCard';

// Cell Renderer function for status
const StatusCellRenderer = (params) => {
  const status = params.value; // Get the status from the data
  let badgeClass = 'badge';

  if (status === 'active') {
    badgeClass += ' bg-success'; // Green for active
  } else if (status === 'inactive') {
    badgeClass += ' bg-danger'; // Red for inactive
  }

  return <span className={badgeClass}>{status}</span>;
};

const BasicBadges = () => {
  const [show, setShow] = useState(false); // State to control the modal visibility
  const [columnDefs] = useState([
    { headerName: 'User ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Role', field: 'role' },
    { headerName: 'Contact', field: 'contact' },
    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: 'statusCellRenderer' // Use custom cell renderer
    },
    { headerName: 'Department', field: 'department' }
  ]);

  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(8); // Set page size to 8 rows

  // Fetch data from JSON server
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Paginate data
  const paginatedData = rowData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Function to show the modal (offcanvas)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <Row>
        <Col className="btn-page">
          <Card title="User Details">
            <div className="d-flex justify-content-end mb-3">
              <Button className="bg-primary" onClick={handleShow}>Add +</Button>
            </div>
            <div className="ag-theme-quartz mt-2" style={{ height: 'auto', width: '100%' }}>
              <AgGridReact className='grid'
                columnDefs={columnDefs}
                rowData={paginatedData}
                domLayout="autoHeight" // Adjust height automatically
                onGridReady={(params) => params.api.sizeColumnsToFit()} // Resize columns to fit grid width
                components={{ statusCellRenderer: StatusCellRenderer }} // Register cell renderer
                suppressHorizontalScroll={false} // Add this prop to suppress horizontal scroll
              />
            </div>
            <div className="mt-4">
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={Math.ceil(rowData.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Offcanvas (Slide-in modal) */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="Enter contact" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" placeholder="Enter department" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>active</option>
                <option>inactive</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default BasicBadges;
