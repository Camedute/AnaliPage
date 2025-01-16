import { Routes, Route } from "react-router-dom";
import Navbar from "./Navegacion/navbar";
interface HomeProps {
  user: string[];
  setuser: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Home({ user, setuser }: HomeProps) {
  const handleLogout = () => {
    setuser([]); // Limpia el usuario para simular el logout
  };

  return (
    <div>
      <Navbar />
      <h1>Bienvenido a AnaliPage</h1>
      <h2>{user[0]}</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>


    </div>
  );
}

export default Home;
