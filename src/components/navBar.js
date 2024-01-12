import { Link } from "react-router-dom";
import Home from '../components/svg/home';

function navBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="http://www.bbc.co.uk">
          <Home />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leads">All Leads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addLead">Add Lead</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default navBar;
  