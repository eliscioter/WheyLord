import { Card, Button } from "react-bootstrap";
import "./equipments.css";
import { supplements } from "../db/supplements";
import { useCartStore } from "../stores/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Supplements() {
  const navigate = useNavigate();

  const { setCart } = useCartStore();
  const handleAddToCart = (
    id: number,
    imageUrl: string,
    name: string,
    price: number
  ) => {
    setCart({ id, imageUrl, name, price });
    toast.success("Added to cart");
  };

  const handleViewItem = (id: number) => {
    navigate(`/products/equipments/${id}`);
  };
  return (
    <>
      {/* Supplements Body Start */}
      <div className="container">
        <h1 className="text-center my-5">Gym Supplements</h1>
        <div className="row">
          {supplements.map((supplement) => (
            <div className="col-md-3 mb-4" key={supplement.id} onClick={() => handleViewItem(supplement.id)}>
              <Card className="cardBuy border border-1 border-black">
                <Card.Img variant="top" className="card-img" src={supplement.imageUrl} />
                <Card.Body className="bg-light">
                  <Card.Title>{supplement.name}</Card.Title>
                  <Card.Text>PHP.{supplement.price}</Card.Text>
                  <Button
                    variant="dark"
                    onClick={() =>
                      handleAddToCart(
                        supplement.id,
                        supplement.imageUrl,
                        supplement.name,
                        supplement.price
                      )
                    }
                  >
                    Add to Cart
                  </Button>
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
