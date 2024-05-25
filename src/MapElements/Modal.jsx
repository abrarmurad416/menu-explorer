import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import parkData from "./parkData"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CustomModal({ show, onClose }) {
  return (
    <div>
      <Modal isOpen={show} toggle={onClose}>
        {parkData.map((item, index) => (
          <div>
            <ModalHeader key={index} onClose={onClose}><b>{item.header}</b></ModalHeader>
            <ModalBody key={index}>
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
              <Button color="success" key={index} onClick={onClose}>
                <a href={item.website} target="_blank" rel="noreferrer" className="text-light text-decoration-none ">Link to site</a>
              </Button>
              <Button color="danger" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </div>
        ))}
      </Modal>
    </div>
  );
}
