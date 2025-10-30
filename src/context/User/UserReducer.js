import {
  GET_PROFILE,
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../Types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    case CREATE_USER:
      return {
        ...state,
      };
    case UPDATE_USER:
      return {
        ...state,
      };
    case DELETE_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
