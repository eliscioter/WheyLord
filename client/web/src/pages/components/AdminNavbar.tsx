import { Navbar, Container, Nav } from "react-bootstrap";

import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAdminAuthStore } from "../../stores/adminlogin";
export default function AdminNavigationBar() {
  const { admin, deAuth } = useAdminAuthStore();

  const handleLogout = () => {
    deAuth();
    localStorage.clear();
    window.location.reload();
  };

  const isLogin = admin;

  if (!isLogin) {
    return null;
  }

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
              <Nav className="ml-auto">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
          </Nav>
          <Nav className="bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/admin/inventory">Inventory</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
