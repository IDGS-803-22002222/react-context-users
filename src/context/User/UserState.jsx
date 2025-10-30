/**
 * Archivo que representa la definicion del estado, aqui estara
 * el estado que se va a consumir
 *
 */

import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
import UserContext from "./UserContext";
import {
  GET_PROFILE,
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../Types";

const UserState = (props) => {
  //Definimos estado inicial
  const initialState = {
    users: [],
    selectedUser: null,
  };

  //definimos eñ useReducer para manejar el estatdo de la aplicacion
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios("https://reqres.in/api/users/", {
      headers: { "x-api-key": " reqres-free-v1" },
    });
    console.log(res.data.data);
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios("https://reqres.in/api/users/" + id, {
      headers: { "x-api-key": " reqres-free-v1" },
    });
    console.log(res.data.data);
    dispatch({
      type: GET_PROFILE,
      payload: res.data.data,
    });
  };
  const createUser = async (userData) => {
    try {
      const res = await axios.post("https://reqres.in/api/users", userData, {
        headers: { "x-api-key": " reqres-free-v1" },
      });
      console.log(res.data);
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const res = await axios.put(
        `https://reqres.in/api/users/${id}`,
        userData,
        {
          headers: { "x-api-key": " reqres-free-v1" },
        }
      );
      console.log(res.data);
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`https://reqres.in/api/users/${id}`, {
        headers: { "x-api-key": " reqres-free-v1" },
      });
      console.log("Delete response:", res.status);
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
      return { status: res.status, id };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
