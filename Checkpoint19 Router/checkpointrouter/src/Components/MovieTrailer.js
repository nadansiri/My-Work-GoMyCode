import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";


const MovieTrailer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Trailer">
      <Button variant="btn" onClick={handleShow}>
        Trailer
      </Button>

      <Modal
      size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="Trailer">
        {props.trailer}
        <hr/>
        </div>
        <h5>Synopsis:</h5>
        <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieTrailer;
