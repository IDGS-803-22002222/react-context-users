import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import UserContext from "../context/User/UserContext";

const UserForm = () => {
  const { createUser, updateUser, selectedUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: `${selectedUser.first_name} ${selectedUser.last_name}`,
        job: selectedUser.email,
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(formData);
      setModalData({
        title: "Added User",
        body: response,
        status: 201,
      });
      setShowModal(true);
      setFormData({ name: "", job: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = async (e) => {
    e.preventDefault();
    if (!selectedUser) {
      alert("Por favor selecciona un usuario de la lista primero");
      return;
    }
    try {
      const response = await updateUser(selectedUser.id, formData);
      setModalData({
        title: "Modified User",
        body: response,
        status: 200,
      });
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <>
      <div className="mb-3">
        <Form>
          <Row>
            <Col md={5}>
              <Form.Group className="mb-2">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-2">
                <Form.Label>Job:</Form.Label>
                <Form.Control
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  placeholder="Job"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex gap-2 mt-2">
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
            <Button variant="dark" onClick={handleModify}>
              Modify
            </Button>
          </div>
        </Form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Status:</strong> {modalData?.status}
          </p>
          {modalData?.body && (
            <>
              {modalData.body.id && (
                <p>
                  <strong>ID:</strong> {modalData.body.id}
                </p>
              )}
              {modalData.body.name && (
                <p>
                  <strong>Name:</strong> {modalData.body.name}
                </p>
              )}
              {modalData.body.job && (
                <p>
                  <strong>Job:</strong> {modalData.body.job}
                </p>
              )}
              {modalData.body.createdAt && (
                <p>
                  <strong>Date:</strong> {modalData.body.createdAt}
                </p>
              )}
              {modalData.body.updatedAt && (
                <p>
                  <strong>Date:</strong> {modalData.body.updatedAt}
                </p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserForm;
