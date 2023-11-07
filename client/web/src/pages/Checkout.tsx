import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormFloating,
} from "react-bootstrap";

export default function Checkout() {
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
      <Container className="mt-5">
        <div className="fs-1 fw-medium text-center">CHECKOUT</div>
        <Row>
          <Col lg={8}>
            <div className="fs-3">BILLING DETAILS</div>
            <div className="my-2 border border-1 "></div>
            <Form>
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingFirstName"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="First Name" />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingLastName"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Last Name" />
                  </FloatingLabel>
                </Col>
              </Row>
              <Col>
                <FloatingLabel
                  controlId="floatingAddress"
                  label="Complete Address"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Home Address" />
                </FloatingLabel>
              </Col>
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingPhoneNumber"
                    label="Phone Number"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Phone Number" />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Email Address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@email.com" />
                  </FloatingLabel>
                </Col>
              </Row>
              <Col>
                <Form.Group className="mb-3" controlId="OrderNotes">
                  <Form.Label>Order Notes (optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Notes about your order, e.g special notes for delivery"
                  />
                </Form.Group>
              </Col>
            </Form>
          </Col>
          <Col
            lg={4}
            className="mt-3 py-3 d-flex flex-column justify-content-between border border-1 rounded-3"
          >
            <div className="fs-3 fw-medium">CART TOTALS</div>
            <div className="border border-1"></div>
            <div className="d-flex flex-row">
              <Col lg={6} className="fw-semibold">
                Subtotal
              </Col>
              <Col lg={6} className="fw-semibold ms-auto text-success text-end">
                Php. 3000
              </Col>
            </div>
            <div className="border border-1"></div>
            <Col lg={4}>Shipping</Col>
            <Col lg={8} className="w-100">
              <Form className="d-flex flex-column justify-content-end">
                <Form.Check
                  label="Free Shipping(Metro Manila Only)"
                  name="group1"
                  type="radio"
                  id={`radio-1`}
                  reverse={true}
                />
                <Form.Check
                  label="Store Pick Up"
                  name="group1"
                  type="radio"
                  id={`radio-2`}
                  reverse={true}
                />
                <Form.Check
                  label="Delivery charge: Php. 150.00"
                  name="group1"
                  type="radio"
                  id={`radio3`}
                  reverse={true}
                />
              </Form>
            </Col>
            <div className="d-flex flex-row">
              <Col lg={6} className="fw-bold">
                Total
              </Col>
              <Col lg={6} className="fw-bold ms-auto text-success text-end">
                PHP 6000
              </Col>
            </div>
            <div className="border border-1 border-secondary"></div>
            <div>
              <FormFloating>
                <div className="d-flex flex-row align-items-center">
                  <Form.Check
                    label="Cash On Delivery"
                    name="group2"
                    type="radio"
                    id={`radio-1`}
                  />
                  <FontAwesomeIcon icon={faTruck} className="ms-2 fs-5" />
                </div>
                <div className="d-flex flex-row align-items-center">
                  <Form.Check
                    label="GCash"
                    name="group2"
                    type="radio"
                    id={`radio-2`}
                  />
                  <FontAwesomeIcon icon={faMoneyBill} className="ms-2 fs-5" />
                </div>
              </FormFloating>
            </div>
            <Button
              variant="dark"
              className="fw-semibold w-100"
              href="/checkout"
            >
              Order Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
