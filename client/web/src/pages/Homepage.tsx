import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
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
              <h5>Avid Gym Goer</h5>
              <p>Wake up. Eat. Go to the gym. Repeat</p>
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
              <Card style={{ width: "25rem", height:"500px", maxHeight: "500px" }}>
                <Card.Img variant="top" src="../src/assets/equipment1.png" />
                <Card.Body>
                  <Card.Title>Bench Press</Card.Title>
                  <Card.Text>
                    For the best chest workout, try the bench press.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" xl="4">
              <Card style={{ width: "25rem", height:"500px", maxHeight: "500px" }}>
                <Card.Img variant="top" src="../src/assets/equipment2.png" />
                <Card.Body>
                  <Card.Title>Dumbells</Card.Title>
                  <Card.Text>
                    Dumbells are a great first step into the world of strength.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" xl="4">
              <Card style={{ width: "25rem", height:"500px", maxHeight: "500px" }}>
                <Card.Img variant="top" src="../src/assets/equipment3.png" />
                <Card.Body>
                  <Card.Title>Pull-Up Bar</Card.Title>
                  <Card.Text>
                    Pull-Up Bars are a great way to build upper body strength.
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
            <Button className="align-self-center w-50 btn btn-light p-3 border border-black border-2" href="/supplements">
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
            <Card style={{ width: "20rem", height:"430px", maxHeight: "430px" }}>
              <Card.Img variant="top" src="../src/assets/supplement1.png" />
              <Card.Body>
                <Card.Title>Beta Alanine</Card.Title>
                <Card.Text>
                  Beta Alanine that helps you train harder and longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem", height:"430px", maxHeight: "430px" }}>
              <Card.Img variant="top" src="../src/assets/supplement2.png" />
              <Card.Body>
                <Card.Title>Beta Alanine</Card.Title>
                <Card.Text>
                  A stronger beta alanine that helps you train harder and
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem", height:"430px", maxHeight: "430px" }}>
              <Card.Img variant="top" src="../src/assets/whey1.png" className="h-100" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Whey Protein for muscle growth and recovery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem", height:"430px", maxHeight: "430px" }}>
              <Card.Img variant="top" src="../src/assets/whey2.png" />
              <Card.Body>
                <Card.Title>Whey Protein</Card.Title>
                <Card.Text>
                  Whey Protein for muscle growth and recovery.
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
