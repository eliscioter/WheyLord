import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import "./inventory.css";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "sonner";
// import UpdateInventoryModal from "../pages/components/InventoryModal.tsx";

interface Item {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  quantity: number;
}

export default function Inventory() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Bench Press",
      imageURL: "../src/assets/equipment1.png",
      price: 3500,
      quantity: 10,
    },
    {
      id: 2,
      name: "Dumbbells",
      imageURL: "../src/assets/equipment2.png",
      price: 1500,
      quantity: 10,
    },
    {
      id: 3,
      name: "Pull-Up Bar",
      imageURL: "../src/assets/equipment3.png",
      price: 2200,
      quantity: 10,
    },
    {
      id: 4,
      name: "Beta-Alanine",
      imageURL: "../src/assets/supplement1.png",
      price: 1349,
      quantity: 10,
    },
    {
      id: 5,
      name: "Micronized Creatine",
      imageURL: "../src/assets/supplement3.png",
      price: 1620,
      quantity: 10,
    },
    {
      id: 6,
      name: "Gold Standard Whey Protein",
      imageURL: "../src/assets/whey1.png",
      price: 1100,
      quantity: 10,
    },
  ]);

  // const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const handleShowUpdate = () => {
  //   setShowUpdateModal(true);
  // };

  // const handleCloseUpdate = () => {
  //   setShowUpdateModal(false);
  // };

  const handleUpdate = (
    id: number,
    property: "price" | "quantity",
    operation: "add" | "subtract"
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [property]:
                operation === "add" ? item[property] + 1 : item[property] - 1,
            }
          : item
      )
    );
  };
  const handleAdd = (id: number) => handleUpdate(id, "price", "add");
  const handleSubtract = (id: number) => handleUpdate(id, "price", "subtract");
  const handleAddQuantity = (id: number) => handleUpdate(id, "quantity", "add");
  const handleSubtractQuantity = (id: number) =>
    handleUpdate(id, "quantity", "subtract");

  function handleEdit(){
    toast.success("Edited Successfully");
  }

  return (
    <Container>
      {/* <UpdateInventoryModal
        showUpdate={showUpdateModal}
        handleCloseUpdate={handleCloseUpdate}
        handleShowUpdate={function (): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
      {/* <div className="py-5 d-flex justify-content-end">
        <Button
          variant="dark"
          className="fw-semibold"
          onClick={handleShowUpdate}
        >
          ADD PRODUCT
        </Button>
      </div> */}
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img
                  className="product-img"
                  src={item.imageURL}
                  alt={item.name}
                />
              </td>
              <td style={{ maxWidth: "5rem" }}>
                <div className="d-flex justify-content-center align-items-center border border-1 border-black rounded-pill p-1">
                  <Button
                    onClick={() => handleSubtract(item.id)}
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
                    ₱{item.price}
                  </span>
                  <Button
                    onClick={() => handleAdd(item.id)}
                    size="sm"
                    variant="text"
                    className="fw-bold fs-6"
                  >
                    +
                  </Button>
                </div>
              </td>
              <td style={{ maxWidth: "5rem" }}>
                <div className="d-flex justify-content-center align-items-center border border-1 border-black rounded-pill p-1">
                  <Button
                    onClick={() => handleSubtractQuantity(item.id)}
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
                    {item.quantity}
                  </span>
                  <Button
                    onClick={() => handleAddQuantity(item.id)}
                    size="sm"
                    variant="text"
                    className="fw-bold fs-6"
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>
                <Button variant="success">
                  <FontAwesomeIcon icon={faFloppyDisk} onClick={handleEdit} />
                </Button>
                <span className="px-1"></span>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
