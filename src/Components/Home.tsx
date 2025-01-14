interface HomeProps {
    user: string[];
    setuser: React.Dispatch<React.SetStateAction<string[]>>;
  }
  
  export function Home({ user, setuser }: HomeProps) {
    const handleLogout = () => {
      setuser([]);
    };
  
    return (
      <div>
        <h1>Bienvenido a AnaliPage</h1>
        <h2>{user[0]}</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  }
  