// Modal.jsx
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import parkData from "./parkData"; // Import parkData here if you prefer

export default function CustomModal({ show, onClose, itemId }) {
  // Find the park data based on the itemId
  const item = parkData.filter(item => item.id === itemId)[0]; // Using filter and then accessing the first item

  if (!item) return null; // Handle if item data is not found

  return (
    <div>
      <Modal isOpen={show} toggle={onClose}>
        <ModalHeader><b>{item.header}</b></ModalHeader>
        <ModalBody>
          {item.description}
        </ModalBody>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-tree-fill h3 me-2"></i>
                  <h5>Nature</h5>
                </div>
                <ul>
                  {item.nature.map((natureItem, index) => (
                    <li key={index}>{natureItem}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-bicycle h3 me-2"></i>
                  <h5>Activities</h5>
                </div>
                <ul>
                  {item.activities.map((activityItem, index) => (
                    <li key={index}>{activityItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => window.open(item.website, "_blank")}>
            Link to site
          </Button>
          <Button color="danger" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
