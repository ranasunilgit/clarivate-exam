import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Items = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [albumdata, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  
  
  let p =1;
    localStorage.setItem('pg',p)
  const fetchData = async() =>{
                
                localStorage.setItem('pg',p)
                p++;
                let pgno = localStorage.getItem('pg')
    setScrollCount(prevCount => prevCount + 1);
    console.log('rana---------'+pgno)
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pgno}&_limit=10`);
  const newData = await response.json();
  setAlbum(prevData => [...prevData, ...newData]); // Append new data to existing data
  
       
    } catch (error){
        setError(error);
    } finally {
        setLoading(false);
      }
}   
useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial mount
  useEffect(() => {
    const handleScroll = () => {
      
      fetchData()
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='row'>
      <div className='col-9 mt-4'>
      <h4>SHOWING ALBUM LIST</h4>
      </div>
      <div className='col-3 position-fixed  start-50 mb-3 '>
      <Link to="/">
              <Button variant="info">Back to Dashboard</Button>{' '}
          </Link>
      </div>
      
      <div style={{ height: '18000px', background: '#f0f0f0' }}>
      <DataTable data={albumdata} />

      </div>
    </div>
  );
};

export default Items;
