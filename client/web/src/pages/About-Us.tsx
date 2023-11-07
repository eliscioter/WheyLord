import {
  Container,
  Col,
  Row,
} from "react-bootstrap";

export default function About() {
  return (
    <>
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
