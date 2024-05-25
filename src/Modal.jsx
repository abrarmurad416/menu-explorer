import React from "react";
// import { Button, Modal } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CustomModal({ show, onClose }) {
  return (
    <div>
      <Modal isOpen={show} toggle={onClose}>
        <ModalHeader onClose={onClose}><b>High Park</b></ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam ipsam aut deserunt cupiditate vero voluptatem nulla ab laudantium neque, corrupti modi a quisquam voluptate facere maiores! Obcaecati, quidem aperiam repellendus aspernatur sit sunt nam. Eligendi, voluptas at, expedita vero vitae fugiat iure rerum veritatis autem temporibus quis culpa fuga.
        </ModalBody>
        <ModalBody>
          Activities
        </ModalBody>
        <ModalBody>
          Activities
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClose}>
            <a href="https://www.highparktoronto.com/" target="_blank" rel="noreferrer" className="text-light text-decoration-none ">Link to site</a>
          </Button>
          <Button color="danger" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
