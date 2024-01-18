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
import Login from "./pages/login";
import SignOut from "./pages/signout";

function App() {
  //const [token, setToken] = useState();
  //if(!token) {
    //return <Login setToken={setToken} />
  //}

  return (
    <div className="container">
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signout">
              <SignOut />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
