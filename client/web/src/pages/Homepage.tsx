import { Button, Card, Carousel, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./homepage.css";

export default function Homepage() {
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

      {/* Body Start */}
      {/* Carousel Start*/}
      <div className="home-carousel">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className=""
              src="../src/assets/home_carousel1.jpg"
              alt="First slide"
              style={{ objectFit: "cover", height: "90vh", width: "100%" }}
            />
            <Carousel.Caption className="text-white">
              <h5>David Goggins</h5>
              <p>You don't know me son!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="../src/assets/home_carousel2.webp"
              alt="Second slide"
              style={{ objectFit: "cover", height: "90vh", width: "100%" }}
            />
            <Carousel.Caption className="text-white">
              <h5>David Goggins</h5>
              <p>Who's gonna carry the boats and the logs? I AM!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="../src/assets/home_carousel3.jpg"
              alt="Third slide"
              style={{ objectFit: "cover", height: "90vh", width: "100%" }}
            />
            <Carousel.Caption className="text-white">
              <h5>Some random nigga</h5>
              <p>
                Wake up. Eat. Go to the gym. Get arrested for no reason.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Carousel End */}

      {/* Product Preview Start */}
      <div className="product-preview my-5 py-5">
        <Container className="h-100">
          <div className="py-5 fs-1">
            A gym equipment with your goals in mind.
          </div>
          <Row className="g-3">
            <Col md="12" xl="4">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src="../src/assets/home_equip1.webp" />
                <Card.Body>
                  <Card.Title>Gym Equipment 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, veniam.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" xl="4">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src="../src/assets/home_equip2.jpg" />
                <Card.Body>
                  <Card.Title>Gym Equipment 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis, fugit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" xl="4">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src="../src/assets/home_equip3.jpg" />
                <Card.Body>
                  <Card.Title>Gym Equipment 3</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure, non?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Product Preview End */}

      {/* Try Supplement Start */}
      <div className="supplement-preview">
        <div className="h-100 d-flex flex-column justify-content-center align-items-end">
          <div className="me-5 pe-5 d-flex flex-column justify-content-center">
            <div className="text-white fs-1">Try our supplements today.</div>
            <Button className="align-self-center w-50 btn btn-light p-3 border border-black border-2">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className="m-5 px-5">
        <div className="fs-3">
          Protein Shakes: They're the simplest way to build muscle quickly and
          shrink your recovery time. But it's also important that you choose the
          highest quality protein powder available and take it in responsibly.
        </div>
        <Row className="pt-5 mx-0 g-3">
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="../src/assets/home_whey1.webp" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, veniam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="../src/assets/home_whey1.webp" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, veniam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="../src/assets/home_whey1.webp" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, veniam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="../src/assets/home_whey1.webp" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, veniam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* Try Supplement End */}
      {/* Body End */}

      {/* Footer */}
    </>
  );
}
