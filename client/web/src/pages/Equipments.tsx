import {
  Card,
  Button,
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "./equipments.css";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Equipment {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const equipments: Equipment[] = [
  {
    id: 1,
    name: "Treadmill",
    price: 999,
    imageUrl: "../src/assets/home_equip1.webp",
  },
  {
    id: 2,
    name: "Dumbbells",
    price: 199,
    imageUrl: "../src/assets/home_equip2.jpg",
  },
  {
    id: 3,
    name: "Bench Press",
    price: 599,
    imageUrl: "../src/assets/home_equip3.jpg",
  },
  {
    id: 1,
    name: "Lat Pulldown",
    price: 1200,
    imageUrl: "./src/assets/home_equip1.webp",
  },
  {
    id: 2,
    name: "Leg Press",
    price: 1599,
    imageUrl: "../src/assets/home_equip2.jpg",
  },
  {
    id: 3,
    name: "Quad Extension",
    price: 599,
    imageUrl: "../src/assets/home_equip3.jpg",
  },
];

export default function Equipments() {
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

      {/* Equipments Body Start */}
      <div className="container">
        <h1 className="text-center my-5">Gym Equipments</h1>
        <div className="row">
          {equipments.map((equipment) => (
            <div className="col-md-4 mb-4" key={equipment.id}>
              <a href="/product" style={{ textDecoration: "none" }}>
                <Card className="cardBuy border border-1 border-black">
                  <Card.Img variant="top" src={equipment.imageUrl} />
                  <Card.Body className="bg-light">
                    <Card.Title>{equipment.name}</Card.Title>
                    <Card.Text>PHP.{equipment.price}</Card.Text>
                    <Button variant="dark">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Equipments Body End */}
    </>
  );
}
