import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Components/Formulario";
import Login from "./Login";
import Registro from "./Components/Registro";

const App: React.FC = () => {
  const [user, setUser] = useState<string[]>([]);

  return (
    <Router> {/* Asegúrate de envolver todo con <Router> */}
      <Routes>
        <Route path="/" element={<Formulario setuser={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;
