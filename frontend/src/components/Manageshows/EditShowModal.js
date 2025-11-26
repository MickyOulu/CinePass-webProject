import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EditShowModal = ({ show, onClose, onSubmit }) => {
  const [showData, setShowData] = useState(show);

  // Pre-fill form with show data when the modal is opened
  useEffect(() => {
    setShowData(show);
  }, [show]);

  const handleChange = (e) => {
    setShowData({
      ...showData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(showData); // Submit the updated show data
    onClose(); // Close the modal
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Show</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formShowName">
            <Form.Label>Show Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={showData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="date"
              value={showData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={showData.location}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formScreen">
            <Form.Label>Screen</Form.Label>
            <Form.Control
              type="text"
              name="screen"
              value={showData.screen}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAdultPrice">
            <Form.Label>Adult Price</Form.Label>
            <Form.Control
              type="text"
              name="adultPrice"
              value={showData.adultPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formKidPrice">
            <Form.Label>Kid Price</Form.Label>
            <Form.Control
              type="text"
              name="kidPrice"
              value={showData.kidPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formSeats">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="text"
              name="seats"
              value={showData.seats}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditShowModal;
