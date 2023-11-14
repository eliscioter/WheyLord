
import { Button, Form, Col, Row, Modal, FloatingLabel } from 'react-bootstrap';

interface UpdateInventoryModalProps {
  showUpdate: boolean;
  handleCloseUpdate: () => void;
  handleShowUpdate: () => void;
}

const UpdateInventoryModal: React.FC<UpdateInventoryModalProps> = ({ showUpdate, handleCloseUpdate }) => {
  return (
    <>
      <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton className="modal-header text-white">
          <Modal.Title>Update Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="g-2">
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingName"
                  label="Product Name"
                >
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingPrice"
                  label="Price"
                >
                  <Form.Control
                    type="number"
                    placeholder="Product Price"
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingQuantity"
                  label="Quantity"
                >
                  <Form.Control
                    type="number"
                    placeholder="Product Quantity"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="my-3 border-top border-dark border-2"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseUpdate} className="px-4 rounded-pill fw-semibold border border-2 border-dark">
            CANCEL
          </Button>
          <Button className="upButton px-4 rounded-pill fw-semibold border border-2 border-dark">UPDATE</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateInventoryModal;
