import React from "react";
// import { Button, Modal } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CustomModal({ show, onClose }) {
  return (
    // <Modal show={show} onHide={onClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal heading</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={onClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={onClose}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    <div>
      <Modal isOpen={show} toggle={onClose}>
        <ModalHeader onClose={onClose}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClose}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
