import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../assets/Imagenes/Header/logo.png"
import col from "../../../assets/Imagenes/Header/col.svg"
import { Link, useLocation } from "react-router-dom";
import "./header.css"

const Header = () => {

    const location = useLocation()
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="header mb-3 px-4 pt-3">
          <Container fluid>
            <Link to="/"><Navbar.Brand><img src={logo} id="logo" className="mb-1"/></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  TECHnosotras
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navegacion justify-content-end flex-grow-1 pb-2">
                  <Nav.Link as={Link} to="/" className={location.pathname === `/` ? `activado` : ``}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/" className={location.pathname === `/about` ? `activado` : ``}>Quiénes Somos</Nav.Link>
                  <Nav.Link as={Link} to="/" className={location.pathname === `/talent` ? `activado` : ``}>Nuestro Talento</Nav.Link>
                  <Nav.Link as={Link} to="/Cursos" className={location.pathname === `/cursos` ? `activado` : ``}>Cursos</Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link as={Link} to="/">COL <img src={col} className="mb-1"/></Nav.Link>
                  <Nav.Link as={Link} to="/" className={location.pathname === `/eventos` ? `activado` : ``}><button className="eventos px-3 mb-1">Eventos</button></Nav.Link>
                  <Nav.Link as={Link} to="/" className={location.pathname === `/postulate` ? `activado` : ``}><button className="postulate px-3 mb-1">Postúlate</button></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;