
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound.js'
import Items from './components/Items.js';
import Dashboard from './components/Dashboard.js';
const Wrapper = ({ children }) => children;
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Header />
          
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/list" element={ <Items />} />
              <Route path="/favlist" element={<Dashboard />} />
              <Route path="/*" element={<NotFound />} />
              
            </Routes>
          </Wrapper>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
