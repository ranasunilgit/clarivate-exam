
import { NavLink  } from 'react-router-dom';


import { Button, Navbar } from 'react-bootstrap'
function Header(){
  
    return <> 
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink  className="navbar-brand" to="/list">Clarivate Dinesh</NavLink >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    
      
    
      <li className="nav-item">
        <NavLink  className="nav-link" to="/">Dashboard</NavLink >
      </li>
     
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/list">
         List AlBUM
        </NavLink> 
      </li>
      
      
     
      
    </ul>
  </div>
  
</nav>
  </>;
}
export default Header;