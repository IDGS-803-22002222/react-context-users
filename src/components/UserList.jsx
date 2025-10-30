import React, { useEffect } from "react";
import UserContext from "../context/User/UserContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const UserList = () => {
  //Usamos el hook useContext para consumir el state
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-action d-flex flex-row justify-content-star"
          href="#"
          onClick={() => getProfile(user.id)}
        >
          <img
            src={user.avatar}
            className="img-fluid mr-4 rounded-circle"
            width="70"
          />
          <p>
            {user.first_name} {user.last_name}
          </p>
          <div style={{ position: "revert-layer" }}>
            <Button variant="danger" type="submit">
              Eliminar
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default UserList;
