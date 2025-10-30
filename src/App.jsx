import React from "react";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div className="container p-4">
      <header>
        <h1>React Context</h1>
      </header>
      <UserState>
        <div className="row">
          <Formulario />
          <div className="col-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </UserState>
    </div>
  );
};

export default App;
