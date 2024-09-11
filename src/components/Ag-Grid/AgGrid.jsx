import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './style.css';

// Reusable AgGrid component
const AgGrid = ({ columnDefs, rowData, customComponents, height = '380px' }) => {
  return (
    <div className="ag-theme-alpine" style={{ height, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight"
        onGridReady={(params) => params.api.sizeColumnsToFit()}
        components={customComponents}
        suppressHorizontalScroll={true}
      />
    </div>
  );
};

export default AgGrid;
