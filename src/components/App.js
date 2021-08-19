import React from 'react';
import Loggedin from './Loggedin';
import Login from './Login';
const showLogin = () => {
    if (window.location.pathname === "/") {
      return <Login />
    }
  }
  const showLoggedin = () => {
    if (window.location.pathname === "/loggedin") {
      return <Loggedin />
    }
  }
  const App=()=>{
      return(
          <div>
          {showLogin()}
          {showLoggedin()}
          </div>
      );

  }
  export default App;


  