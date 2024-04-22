import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedId } from './Action';
import Button from 'react-bootstrap/Button';
const DataTable = ({ data,selectedIds, toggleSelectedId }) => {
    const handleClick = (id,title) => {
        toggleSelectedId(id,title);
      };
  return (
    <table>
      <thead>
        <tr>
          <th>AlBUM ID</th>
          <th>Title</th>
          
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><img src={item.thumbnailUrl}></img></td>
            <td>
            
                
              <Button variant={selectedIds.some(selected => selected.id === item.id) ? "primary" : "danger" } 
            onClick={() => handleClick(item.id,item.title)}>
              {selectedIds.some(selected => selected.id === item.id ) ? "Subscribed" : "Unsubscribe" } 
              
              </Button>{' '}


            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const mapStateToProps = (state) => ({
    selectedIds: state.selectedIds,
  });
  
  export default connect(mapStateToProps, { toggleSelectedId })(DataTable);