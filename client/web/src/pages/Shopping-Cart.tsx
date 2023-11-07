import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useCartStore } from "../stores/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useOrderStore } from "../stores/order";
import { FormattedDate } from "../helpers/date";

interface CartItem {
  name: string;
  price: number;
  quantity?: number;
  imageUrl: string;
}

export const Product: React.FC<CartItem> = ({ imageUrl, name, price, quantity }) => {
  const subtotal = price * (quantity ?? 1);

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

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart } = useCartStore();
  const { order } = useOrderStore();

  const subTotal = cart.reduce(
    (acc, product) => acc + product.price * (product?.quantity ?? 1),
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    navigate(`/checkout`);
  };

  const handleViewOrder = (id: string) => {
    navigate(`/view-order/${id}`);
  }
  return (
    <>
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
            {cart.map((product, index) => (
              <Product key={index} {...product} />
            ))}
            <div className="my-3 border border-1 border-secondary"></div>
            <div className="d-flex flex-row">
              <Button
                variant="outline-dark"
                className="ms-auto"
                href="/equipments"
              >
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
              <Col lg={6} className="fw-bold">
                Total
              </Col>
              <Col lg={6} className="fw-bold ms-auto text-success text-end">
                {subTotal.toLocaleString("en-PH", {
                  style: "currency",
                  currency: "PHP",
                })}
              </Col>
            </div>
            <div className="border border-1 border-secondary"></div>
            <Button
              variant="dark"
              className="fw-semibold w-100"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      {order && (
        <Container className="mt-5 py-5">
          <h3>Current Orders</h3>

          <Row>
            {order &&
              order.map((orderItem) => (
                <Col onClick={() => handleViewOrder(orderItem.orderId)}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{orderItem.orderId}</Card.Title>
                      <Card.Text>
                        <p>Order Date: {FormattedDate(orderItem.orderDate)}</p>
                        <p>Order Status: {orderItem.orderStatus}</p>
                        <p>
                          Order Total:{" "}
                          {orderItem.orderTotal.toLocaleString("en-ph", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ShoppingCart;
