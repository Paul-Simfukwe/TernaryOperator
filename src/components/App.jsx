import React from "react";
import Logins from "./Logins";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Logins />}
      {currentTime > 12 && <h1>Hello Friend!</h1>}
    </div>
  );
}

export default App;
