import React, { useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown,FormControl,Button} from "react-bootstrap";
import Arr2 from "./Components/MoviesData";
import MovieList from "./Components/MovieList";
import FilterList from './Components/FilterList';
import { MoviesData } from "./Components/MoviesData";

class App extends React.Component {
  state = {Filtering: false};
render() {
  const buttonMsg = this.state.Filtering ? "Back to Main":"Search for a movie";
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Checkpoint React-Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="List" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TV</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Button  className="Toggle" variant="dark" onClick={() => this.setState({ Filtering: !this.state.Filtering })}>
      {buttonMsg}
        </Button>
      {//Afficher la liste filtrée si on effectue une recherche
      this.state.Filtering?
      <div className="filtered">
      <FilterList/>
      </div>:MovieList(Arr2)}
      
      <h3>Would you like to add a new movie to our list?</h3>
      <div className="AddNewMovie">
        <MoviesData />
      </div>
      <footer>
        <h6>Movies @2021</h6>
      </footer>
    </div>
  );
}
}

export default App;
