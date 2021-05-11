import "./App.css";
import { arr } from "./Components/DataTvMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import MovieList from "./Components/MovieList";
import FilterMoviesByTitle from "./Components/FilterMoviesByTitle";
import FilterMoviesByRating from "./Components/FilterMoviesByRating";
import AddNewMovie from "./Components/NewMovie";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Checkpoint React-Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="List" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TV
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Other
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MovieList/>
      <div className="filtered">
      <FilterMoviesByTitle/>
      <FilterMoviesByRating/>
      </div>
      <h3>Would you like to add a new movie to our list?</h3>
      <div className="AddNewMovie">
        <AddNewMovie/>
      </div>
      <footer>
        <h6>Movies @2021</h6>
      </footer>
    </div>
  );
}

export default App;
