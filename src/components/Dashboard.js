// ComponentB.js
import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {Link } from "react-router-dom";
debugger
const Dashboard = ({ selectedIds }) => {
  let dd = selectedIds;
  const Nothing = <div className='text-danger fw-bold' >No Fav item in your bucket</div>
  return (
    <div className='row'>
      
      <div id="subsdiv" className='col-8 '>
      <h3>Favourite Items:</h3>
      
      {selectedIds.length > 0 ? '' : Nothing}
        {selectedIds.map((item,index) => (
          <div className='text-primary fw-bold' key={item.id}>You subscribed to:{item.id}--{item.title}</div>
        ))}
      </div>
          <div className='col-4 mt-3'>
          <Link to="/list">
              <Button variant="info">Go To List Page</Button>{' '}
          </Link>
          
          </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedIds: state.selectedIds,
});

export default connect(mapStateToProps)(Dashboard);
