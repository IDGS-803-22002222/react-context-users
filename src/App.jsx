import React from "react";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";

const App = () => {
  return (
    <div>
      <header>
        <h1>React Context</h1>
      </header>
      <UserState>
        <UserList />
        <Profile />
      </UserState>
    </div>
  );
};

export default App;
