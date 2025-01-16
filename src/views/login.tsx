import React, { useState } from "react";
import Login from "../Components/login";
import Register from "../Components/register";
import Restore from "../Components/restore";

function LoginMain() {
  const [value, setValue] = useState(0);

  const renderComponent = () => {
    switch (value) {
      case 0:
        return <Login />;
      case 1:
        return <Register />;
      case 2:
        return <Restore />;
      default:
        return <Login />;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setValue(0)}>Login</button>
        <button onClick={() => setValue(1)}>Register</button>
        <button onClick={() => setValue(2)}>Restore</button>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}

export default LoginMain;