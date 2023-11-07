import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FloatingLabel,
  FormFloating,
} from "react-bootstrap";
import { useCartStore } from "../stores/cart";
import { useOrderStore } from "../stores/order";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Checkout() {
  const {cart, clearCart} = useCartStore();
  const {setOrder} = useOrderStore();
  const navigate = useNavigate();
  const deliveryCharge = 150;
  const subTotal = cart.reduce(
    (acc, product) => acc + product.price * (product?.quantity ?? 1),
    0
  );

  const sum = subTotal + deliveryCharge;
  const handleOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setOrder({orderId: uuidv4(), orderDate: new Date(), orderStatus: "Pending", orderItems: cart, orderTotal: sum});
    clearCart();
    toast.success("Order placed successfully");
    navigate(`/cart`);
  };

  return (
    <>
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
                {subTotal.toLocaleString("en-PH", {
                  style: "currency",
                  currency: "PHP",
                })}
              </Col>
            </div>
            <div className="d-flex flex-row">
              <Col lg={6}>
                Shipping fee
              </Col>
              <Col lg={6} className="fw-bold ms-auto text-end">
              {`${deliveryCharge.toLocaleString(
                  "en-PH",
                  {
                    style: "currency",
                    currency: "PHP",
                  }
                )}`}
              </Col>
            </div>
            <div className="d-flex flex-row">
              <Col lg={6} className="fw-bold">
                Total
              </Col>
              <Col lg={6} className="fw-bold ms-auto text-success text-end">
                {sum.toLocaleString("en-PH", {
                  style: "currency",
                  currency: "PHP",
                })}
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
              onClick={handleOrder}
            >
              Order Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
