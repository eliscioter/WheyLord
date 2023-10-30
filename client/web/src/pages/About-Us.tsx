import {
  Button,
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

export default function About() {
  return (
    <>
      {/* Navbar Start */}
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container className="m-auto">
          <div className="d-flex flex-column w-100">
            <Nav className="top justify-content-evenly">
              <Navbar.Brand href="#home">WHEYLORD</Navbar.Brand>
              <Form>
                <div className="input-group">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className=""
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </div>
              </Form>
              <Nav className="ml-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Nav>
            <Nav className="bottom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Equipments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/equipments">
                      Strength
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/equipments">
                      Mobility
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Supplements" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/supplements">
                      Steroids
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/supplements">
                      Whey Protein
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/supplements">
                      Creatine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/supplements">
                      BCCAs
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Nav.Link href="/about-us">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Nav>
          </div>
        </Container>
      </Navbar>
      {/* Navbar End */}

      {/* About Us Start */}
      <Container className="text-center lh-lg">
        <div className="fs-1 fw-bold pt-5">About Us</div>
        <div className="fs-4 fw-semibold pt-3">When was it created?</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus aspernatur recusandae optio amet voluptas soluta
          debitis voluptate explicabo quisquam, eligendi consequuntur dolorum
          hic beatae possimus commodi veritatis nesciunt quidem nam nihil
          assumenda. Veritatis voluptates debitis aut commodi corporis natus
          nisi.
        </div>
        <div className="fs-4 fw-semibold pt-3">Why do we exist?</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          assumenda deserunt placeat nam asperiores repudiandae modi veniam
          ipsum, provident, quisquam dicta reprehenderit debitis fugit! Ducimus!
        </div>
        <div className="fs-4 fw-semibold pt-3">Our Mission & Vision</div>
        <Row>
          <Col xs={12} md={6}>
            <div className="fs-5 fw-semibold">Mission</div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            facilis! Laboriosam pariatur veniam at, numquam similique quasi hic
            temporibus facilis.
          </Col>
          <Col xs={12} md={6}>
            <div className="fs-5 fw-semibold">Vision</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            quibusdam eveniet eum velit minus pariatur provident autem totam
            rerum consequuntur?
          </Col>
        </Row>
        <div className="fs-4 fw-semibold pt-3 ">Community</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rerum
          similique adipisci dicta quibusdam odio eligendi minus culpa voluptate
          sunt, facilis neque incidunt eius quisquam ipsam! Magni molestias
          assumenda ut sapiente expedita minima, neque, ullam quisquam
          asperiores officia recusandae a sequi sit? Dolores hic voluptatem
          consequatur illum fugiat esse accusantium.
        </div>
      </Container>
      {/* About Us End */}
    </>
  );
}
