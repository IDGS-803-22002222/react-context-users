import React, { useEffect } from "react";
import UserContext from "../context/User/UserContext";
import { useContext } from "react";

const UserList = () => {
  //Usamos el hook useContext para consumir el state
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return <div>UserList</div>;
};

export default UserList;
