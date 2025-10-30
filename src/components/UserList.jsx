import React, { useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";

const UserList = () => {
  const { users, getUsers, getProfile, deleteUser } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await deleteUser(id);
      setModalData({
        title: "Deleted",
        message: "Deleted User",
        status: response.status || 204,
        id: id,
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
      <div className="list-group h-100">
        {users.map((user) => (
          <a
            key={user.id}
            className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center"
            href="#"
            onClick={() => getProfile(user.id)}
          >
            <div className="d-flex align-items-center">
              <img
                src={user.avatar}
                className="img-fluid mr-4 rounded-circle"
                width="70"
                alt={user.first_name}
              />
              <p className="mb-0 ms-3">
                {user.first_name} {user.last_name}
              </p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => handleDelete(e, user.id)}
            >
              Eliminar
            </Button>
          </a>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>{modalData?.message}</strong>
          </p>
          <p>
            <strong>Status:</strong> {modalData?.status}
          </p>
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

export default UserList;
