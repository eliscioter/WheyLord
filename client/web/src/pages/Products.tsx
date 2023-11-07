import { faCartShopping, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

type Props = {
  product?: Product;
};

const ProductPage: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    // Wala lang to para lang matawag
    product?.price;
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add product to cart
  };

  const handleBuyNow = () => {
    // Redirect to checkout page
  };

  return (
    <div>
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
                  <div className="">|WHEYLORD</div>
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

      {/* Product Body Start */}
      <Container className="">
        <Row className="pt-5">
          <Col lg={5} className="">
            <Card className="border border-1 border-black">
              <Card.Img
                variant="top"
                src="../src/assets/home_equip1.webp"
                className="img-thumbnail"
              />
            </Card>
          </Col>
          <Col lg={7} className="d-flex flex-column">
            <div className="fs-1 fw-semibold">Lorem ipsum dolor sit amet.</div>
            <div className="fs-3 fw-medium">PHP. 2,500.00</div>
            <div className="fst-italic text-secondary">
              Shipping calculated at checkout
            </div>
            <div className="pt-3 fw-medium">Quantity</div>
            <div className="d-flex pt-1">
              <div className="border border-1 border-black rounded-pill p-1">
                <Button
                  onClick={handleSubtract}
                  size="sm"
                  variant="text"
                  className="fw-bold fs-6"
                >
                  -
                </Button>
                <span
                  style={{
                    width: "60px",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  {quantity}
                </span>
                <Button
                  onClick={handleAdd}
                  size="sm"
                  variant="text"
                  className="fw-bold fs-6"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="pt-3">
              <Button
                className="py-2 w-25 border border-1 border-black rounded-pill fw-medium"
                variant="light"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span onClick={handleAddToCart} className="ps-3">
                  Add to cart
                </span>
              </Button>
              <Button
                onClick={handleBuyNow}
                className="py-2 w-25 border border-1 border-black rounded-pill ms-3 fw-medium"
                variant="dark"
                href="/cart"
              >
                Buy Now
              </Button>
            </div>
            <div className="pt-3 fs-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              veritatis, adipisci accusantium dolores unde itaque omnis
              quibusdam iure minus repellendus nam id optio doloribus cum,
              cumque velit. Earum suscipit natus laudantium molestias corporis
              aperiam debitis adipisci veritatis, ipsa mollitia iure eum
              corrupti tempore vel aut incidunt magnam odio temporibus odit.
            </div>
          </Col>
        </Row>
      </Container>
      {/* Product Body End */}
    </div>
  );
};

export default ProductPage;
// <div className="product-page">
// <div className="product-image">
//   <img src={product?.image} alt={product?.name} />
// </div>
// <div className="product-details">
//   <h2>{product?.name}</h2>
//   <p>{product?.description}</p>
//   <div className="product-price">
//     <span>${product?.price}</span>
//   </div>
//   <div className="product-quantity">
//     <button onClick={handleSubtract}>-</button>
//     <span>{quantity}</span>
//     <button onClick={handleAdd}>+</button>
//   </div>
//   <div className="product-buttons">
//     <button onClick={handleAddToCart}>Add to Cart</button>
//     <button onClick={handleBuyNow}>Buy Now</button>
//   </div>
// </div>
// </div>
