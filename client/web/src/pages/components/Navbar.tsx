import { Navbar, Container, Nav } from "react-bootstrap";

import { faCartShopping, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "../../stores/login";
export default function NavigationBar() {
  const { user, deAuth } = useAuthStore();

  const handleLogout = () => {
    deAuth();
    localStorage.clear();
    window.location.reload();
  };

  const isLogin = user ? true : false;

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid className="m-auto">
        <div className="d-flex flex-column w-100">
          <Nav className="top justify-content-evenly">
            <Navbar.Brand href="#home">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faDumbbell}
                  style={{ color: "#0f0f0f" }}
                  size="2x"
                  className=""
                />
                <div className="ms-2">WHEYLORD</div>
              </div>
            </Navbar.Brand>
            {!isLogin ? (
              <Nav className="ml-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

                <Nav.Link href="/cart">
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          <Nav className="bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/equipments">Equipments</Nav.Link>
                <Nav.Link href="/supplements">Supplements</Nav.Link>
                <Nav.Link href="/about-us">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
