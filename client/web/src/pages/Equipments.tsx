import { Card, Button } from "react-bootstrap";
import "./equipments.css";
import { equipments } from "../db/equipments";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cart";
import { toast } from "sonner";

export default function Equipments() {
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
      {/* Equipments Body Start */}
      <div className="container">
        <h1 className="text-center my-5">Gym Equipments</h1>
        <div className="row">
          {equipments.map((equipment) => (
            <div
              className="col-md-4 mb-4"
              key={equipment.id}
              onClick={() => handleViewItem(equipment.id)}
            >
              <Card className="cardBuy border border-1 border-black">
                <Card.Img variant="top" src={equipment.imageUrl} />
                <Card.Body className="bg-light">
                  <Card.Title>{equipment.name}</Card.Title>
                  <Card.Text>₱{equipment.price}</Card.Text>
                  <Button
                    variant="dark"
                    onClick={() =>
                      handleAddToCart(
                        equipment.id,
                        equipment.imageUrl,
                        equipment.name,
                        equipment.price
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
      {/* Equipments Body End */}
    </>
  );
}
