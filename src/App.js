import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './components/navBar';
import NavBar from './components/navBar';
import Home from './pages/home';
import Leads from './pages/leads';
import Footer from './components/footer';
import AddLead from "./pages/addLead";
import UpdateLead from "./pages/updateLead";
import DeleteLead from "./pages/deleteLead";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/leads">
            <Leads />
          </Route>
          <Route path="/addLead">
            <AddLead />
          </Route>
          <Route path="/updateLead">
            <UpdateLead />
          </Route>
          <Route path="/deleteLead">
            <DeleteLead />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
