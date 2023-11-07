import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Product: React.FC<CartItem> = ({ imageUrl, name, price, quantity }) => {
  const subtotal = price * quantity;

  return (
    <div className="d-flex flex-row align-items-center justify-content-between">
      <Col lg={6} className="py-1">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ height: "90px", width: "auto", maxWidth: "90px" }}
          className="border border-2 border-light p-1"
        />
        <span className="ms-3 fs-5 fw-medium">{name}</span>
      </Col>
      <Col lg={2}>{price}</Col>
      <Col lg={2}>{quantity}</Col>
      <Col lg={2}>{subtotal}</Col>
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const products = [
    {
      imageUrl: "../src/assets/home_whey1.webp",
      name: "Whey Protein Gold",
      price: 500,
      quantity: 2,
    },
    {
      imageUrl: "../src/assets/home_equip1.webp",
      name: "Lat Pulldown",
      price: 1500,
      quantity: 1,
    },
    {
      imageUrl: "../src/assets/home_equip2.jpg",
      name: "Mega Gym",
      price: 2000,
      quantity: 3,
    },
  ];

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

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
      <Container className="p-0 mt-5">
        <div className="fs-1 fw-medium text-center">SHOPPING CART</div>
        <Row className="pt-5">
          <Col lg={8}>
            <div className="d-flex flex-row justify-content-between">
              <Col lg={6}>PRODUCT</Col>
              <Col lg={2}>PRICE</Col>
              <Col lg={2}>QUANTITY</Col>
              <Col lg={2}>SUBTOTAL</Col>
            </div>
            <div className="my-3 border border-1 border-secondary"></div>
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
            <div className="my-3 border border-1 border-secondary"></div>
            <div className="d-flex flex-row">
              <Form>
                <div className="input-group w-100">
                  <Form.Control
                    type="input"
                    placeholder="Enter Coupon Code"
                    className=""
                    aria-label="Discount"
                  />
                  <Button variant="dark">Apply</Button>
                </div>
              </Form>
              <Button variant="outline-dark" className="ms-auto">
                &lt; Return to Shop
              </Button>
            </div>
          </Col>
          <Col
            lg={4}
            className="mt-3 py-3 d-flex flex-column justify-content-between border border-1 rounded-3"
          >
            <div className="fs-3 fw-medium">CART TOTALS</div>
            <div className="border border-1 border-secondary"></div>
            <div className="d-flex flex-row">
              <Col lg={6} className="fw-semibold">
                Subtotal
              </Col>
              <Col lg={6} className="fw-semibold ms-auto text-success text-end">
                PHP {total}
              </Col>
            </div>
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
            <Button variant="dark" className="fw-semibold w-100"  href="/checkout">
              Proceed to Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
