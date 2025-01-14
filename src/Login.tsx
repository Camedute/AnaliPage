import { Formulario } from './Components/Formulario';
import { Home } from "./Components/Home";
import { useState } from "react";
import './App.css';

function Login() {
  const [user, setuser] = useState<string[]>([]); // Tipar correctamente el estado

  return (
    <>
      <div className="App">
        {
          user.length === 0 
            ? <Formulario setuser={setuser} />
            : <Home user={user} setuser={setuser} />
        }
      </div>
    </>
  );
}

export default Login;
