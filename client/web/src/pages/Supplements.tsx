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

interface Supplement {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const supplements: Supplement[] = [
  {
    id: 1,
    name: "Whey Protein 1",
    price: 999,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 2,
    name: "Whey Protein 2",
    price: 199,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 3,
    name: "Whey Protein 3",
    price: 599,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 3,
    name: "Whey Protein 4",
    price: 699,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 1,
    name: "Whey Protein 1",
    price: 999,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 2,
    name: "Whey Protein 2",
    price: 199,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 3,
    name: "Whey Protein 3",
    price: 599,
    imageUrl: "../src/assets/home_whey1.webp",
  },
  {
    id: 3,
    name: "Whey Protein 4",
    price: 699,
    imageUrl: "../src/assets/home_whey1.webp",
  },
];

export default function Supplements() {
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

      {/* Supplements Body Start */}
      <div className="container">
        <h1 className="text-center my-5">Gym Supplements</h1>
        <div className="row">
          {supplements.map((supplement) => (
            <div className="col-md-3 mb-4" key={supplement.id}>
              <Card className="cardBuy border border-1 border-black">
                <Card.Img variant="top" src={supplement.imageUrl} />
                <Card.Body className="bg-light">
                  <Card.Title>{supplement.name}</Card.Title>
                  <Card.Text>PHP.{supplement.price}</Card.Text>
                  <Button variant="dark">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Supplements Body End */}
    </>
  );
}
