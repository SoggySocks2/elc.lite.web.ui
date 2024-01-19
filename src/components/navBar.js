import { Link } from "react-router-dom";
import Home from '../components/svg/home';

function navBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <Home />
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false" to="#">Leads</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/addLead">Add Lead</Link>
                <Link className="dropdown-item" to="/leads">All Leads</Link>
                <Link className="dropdown-item" to="/updateLead">Edit Lead</Link>
                <Link className="dropdown-item" to="/deleteLead">Delete Lead</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false" to="#">User</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/addUser">Add User</Link>
                <Link className="dropdown-item" to="/resetPassword">Rset Password</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default navBar;
  