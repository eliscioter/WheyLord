import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { equipments } from "../db/equipments";
import { supplements } from "../db/supplements";
import { useCartStore } from "../stores/cart";

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

const ProductPage: React.FC<Props> = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const itemId = id ? parseInt(id) - 1 : 0;
  const [quantity, setQuantity] = useState(cart[itemId]?.quantity ?? 1);
  const getProducts = () => {
    if (type === "equipments") {
      return equipments;
    } else {
      return supplements;
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
    increaseQuantity(quantity);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseQuantity(quantity);
    }
  };

  const handleAddToCart = (
    id: number,
    imageUrl: string,
    name: string,
    price: number
  ) => {
    setQuantity(quantity + 1);
    increaseQuantity(quantity);
    setCart({ id, imageUrl, name, price, quantity });
  };

  const handleBuyNow = (
    id: number,
    imageUrl: string,
    name: string,
    price: number
  ) => {
    setQuantity(quantity + 1);
    increaseQuantity(quantity);
    setCart({ id, imageUrl, name, price, quantity });
    navigate(`/cart`);
  };

  return (
    <div>
      {/* Product Body Start */}
      <Container className="">
        <Row className="pt-5">
          <Col lg={5} className="">
            <Card className="border border-1 border-black">
              <Card.Img
                variant="top"
                src={getProducts()[itemId].imageUrl}
                className="img-thumbnail"
              />
            </Card>
          </Col>
          <Col lg={7} className="d-flex flex-column">
            <div className="fs-1 fw-semibold">{getProducts()[itemId].name}</div>
            <div className="fs-3 fw-medium">
              {getProducts()[itemId].price.toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
              })}
            </div>
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
                <span
                  onClick={() =>
                    handleAddToCart(
                      getProducts()[itemId].id,
                      getProducts()[itemId].imageUrl,
                      getProducts()[itemId].name,
                      getProducts()[itemId].price
                    )
                  }
                  className="ps-3"
                >
                  Add to cart
                </span>
              </Button>
              <Button
                onClick={() =>
                  handleBuyNow(
                    getProducts()[itemId].id,
                    getProducts()[itemId].imageUrl,
                    getProducts()[itemId].name,
                    getProducts()[itemId].price
                  )
                }
                className="py-2 w-25 border border-1 border-black rounded-pill ms-3 fw-medium"
                variant="dark"
              >
                Buy Now
              </Button>
            </div>
            <div className="pt-3 fs-5">{getProducts()[itemId].description}</div>
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
