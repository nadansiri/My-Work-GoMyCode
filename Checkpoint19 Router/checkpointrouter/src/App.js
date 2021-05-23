import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import Arr2 from "./Components/MoviesData";
import MovieList from "./Components/MovieList";
import FilterList from "./Components/FilterList";
import { MoviesData } from "./Components/MoviesData";

class App extends React.Component {
  state = { Filtering: false };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="List" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/addmovie">Add a movie</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/filtermovies">Filter Movies</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              {MovieList(Arr2)}
            </Route>
            <Route path="/addmovie">
              <h3>Would you like to add a new movie to our list?</h3>
              <div className="AddNewMovie">
                <MoviesData />
              </div>
            </Route>
            <Route path="/filtermovies">
              <div className="filtered">
                <FilterList />
              </div>
            </Route>
          </Switch>

          <footer>
          <hr />
            <h6>Movies @2021</h6>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
