import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import './style.css';

// react-bootstrap
import { Row, Col, Button, Breadcrumb } from 'react-bootstrap';

// Material-UI
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

// project import
import Card from '../../components/Card/MainCard';

// Cell Renderer function for status
const StatusCellRenderer = (params) => {
  const status = params.value;
  let badgeClass = 'badge';

  if (status === 'active') {
    badgeClass += ' bg-success'; // Green for active
  } else if (status === 'inactive') {
    badgeClass += ' bg-danger'; // Red for inactive
  }

  return <span className={badgeClass}>{status}</span>;
};

// Internal Cell Renderer function for edit actions
const EditCellRenderer = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userId = props.data.userId; // or whichever field represents the user ID
    navigate(`/user/editDetails`);
  };

  return (
    <div className="text-center">
      <i
        className="feather icon-edit"
        style={{ cursor: 'pointer', color: '#007bff' }} // Blue color for the edit icon
        onClick={handleClick}
      />
    </div>
  );
};

const UserDetails = () => {
  const [columnDefs] = useState([
    { headerName: 'User ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Role', field: 'role' },
    { headerName: 'Contact', field: 'contact' },
    { headerName: 'Department', field: 'department' },
    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: 'statusCellRenderer' // Use custom cell renderer
    },
    {
      headerName: 'Actions',
      cellRenderer: 'editCellRenderer'
    }
  ]);

  const [rowData, setRowData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Set page size to 8 rows
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setRowData(response.data);
        setFilteredData(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [itemsPerPage]);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = rowData.filter(item =>
      Object.values(item).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(lowercasedFilter)
      )
    );
    setFilteredData(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, rowData, itemsPerPage]);

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleAddUser = () => {
    navigate('/user/AddUser');
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="./app/dashboard/analytics">
          <i className="feather icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="user/UserDetails">User</Breadcrumb.Item>
        <Breadcrumb.Item active><strong>User Details</strong></Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col className="btn-page">
          <Card title="User Details">
            <div className="search-container">
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  width: 200,
                  height: '40px',
                  '& .MuiInputBase-root': {
                    height: '35px',
                    marginTop: '10px'
                  },
                  '& .MuiInputLabel-root': {
                    top: '-1px'
                  }
                }}
              />
              <Button className="bg-primary addbtn" onClick={handleAddUser}>Create User +</Button>
            </div>
            <div className="ag-theme-alpine mt-2" style={{ height: '380px', width: '100%' }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={paginatedData}
                domLayout="autoHeight"
                onGridReady={(params) => params.api.sizeColumnsToFit()}
                components={{
                  statusCellRenderer: StatusCellRenderer,
                  editCellRenderer: EditCellRenderer
                }}
                suppressHorizontalScroll={true}
              />
            </div>

            <div className="mt-4 d-flex justify-content-center">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  variant="outlined"
                />
              </Stack>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserDetails;
