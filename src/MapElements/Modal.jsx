// Imports
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import parkData from "./parkData";

// show - boolean indicating modal visibility
// onClose - closing the modal function
// itemID - identifier to specific park item
export default function CustomModal({ show, onClose, itemId }) {

  // Find the park data based on the itemId
  // Using filter and then accessing the first item
  const item = parkData.filter(item => item.id === itemId)[0]; 

  // Handle if item data is not found
  if (!item) return null; 

  return (
    <div>
      {/* if show is true then modal is rendered, onClose closes the modal */}
      <Modal isOpen={show} toggle={onClose}>
        <ModalHeader><b>{item.header}</b></ModalHeader>
        <ModalBody>
          {item.description}
        </ModalBody>
        {/* 2-column layout */}
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-tree-fill h3 me-2"></i>
                  <h5>Nature</h5>
                </div>
                {/* mapping over nature description for each park */}
                <ul>
                  {item.nature.map((natureItem) => (
                    <li key={natureItem.id}>{natureItem}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-bicycle h3 me-2"></i>
                  <h5>Activities</h5>
                </div>
                {/* mapping over activities description for each park */}
                <ul>
                  {item.activities.map((activityItem) => (
                    <li key={activityItem.id}>{activityItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
        {/* link to wbeiste and onClose button */}
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
