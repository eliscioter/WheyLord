import { Col, Container } from "react-bootstrap";
import { Product } from "./Shopping-Cart";
import { useOrderStore } from "../stores/order";
import { useParams } from "react-router-dom";

export default function ViewOrders() {
  const { order } = useOrderStore();
  const { id } = useParams();

  const parsedId = id ? id.toString() : "";
  return (
    <Container className="p-5">
      <div className="d-flex flex-row justify-content-between">
        <Col lg={6}>PRODUCT</Col>
        <Col lg={2}>PRICE</Col>
        <Col lg={2}>QUANTITY</Col>
        <Col lg={2}>SUBTOTAL</Col>
      </div>
      <div className="my-3 border border-1 border-secondary"></div>
      {order
        ?.find((product) => product.orderId === parsedId)
        ?.orderItems.map((product, index) => (
          <Product key={index} {...product} />
        ))}
    </Container>
  );
}
