import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";
import { useTheme } from "../Components/ThemeContext"; // Para el tema oscuro
import agregarArchivo from './agregarArchivo.png'; // Importación de imagen

export function Home() {
  const [redirect, setRedirect] = useState(false);
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro

  const divDrag = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragCounter = useRef(0);

  // Estado para almacenar los archivos arrastrados
  const [files, setFiles] = useState<File[]>([]);

  // Usar referencias para las funciones de eventos
  const handleDraginRef = useRef<(e: DragEvent) => void>();
  const handleDragRef = useRef<(e: DragEvent) => void>();
  const handleDropRef = useRef<(e: DragEvent) => void>();
  const handleDragoutRef = useRef<(e: DragEvent) => void>();

  // Inicializar funciones en useEffect
  useEffect(() => {
    handleDraginRef.current = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current++;
      if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
        setDragging(true);
      }
    };

    handleDragRef.current = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    handleDropRef.current = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
      dragCounter.current = 0;

      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        const droppedFiles = Array.from(e.dataTransfer.files); // Convertir FileList a Array
        setFiles(droppedFiles); // Actualizar el estado con los archivos
        console.log("Archivos arrastrados:", droppedFiles);
      }
    };

    handleDragoutRef.current = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setDragging(false);
      }
    };
  }, []);

  useEffect(() => {
    const div = divDrag.current;
    if (div) {
      const dragin = handleDraginRef.current!;
      const drag = handleDragRef.current!;
      const drop = handleDropRef.current!;
      const dragout = handleDragoutRef.current!;

      div.addEventListener("dragenter", dragin);
      div.addEventListener("dragover", drag);
      div.addEventListener("drop", drop);
      div.addEventListener("dragleave", dragout);

      return () => {
        div.removeEventListener("dragenter", dragin);
        div.removeEventListener("dragover", drag);
        div.removeEventListener("drop", drop);
        div.removeEventListener("dragleave", dragout);
      };
    }
  }, []);

  const closeSession = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
      <div className={`card ${darkMode ? "dark-mode" : ""}`}>
        <div className="header">
          <h1 className={`home-title ${darkMode ? "dark-mode" : ""}`}>Bienvenido a AnaliPage</h1>
        </div>

        <div className="content">
          <p className={`welcome-text ${darkMode ? "dark-mode" : ""}`}>
            Explora nuestras características y disfruta de una experiencia única.
          </p>

          <div ref={divDrag} className={dragging ? "main dragging" : "main"}>
            {dragging ? (
              <div className="containerDragging">
                <div className="divCenter">
                  <img src={agregarArchivo} width={50} height={50} alt="Logo Agregar Archivos" />
                  &nbsp; Agregar Archivos
                </div>
              </div>
            ) : (
              <div>Arrastra Archivos Aquí</div>
            )}
          </div>

          {files.length > 0 && (
            <div className="file-list">
              <h3>Archivos cargados:</h3>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    <strong>Nombre:</strong> {file.name} <br />
                    <strong>Tamaño:</strong> {(file.size / 1024).toFixed(2)} KB <br />
                    <strong>Tipo:</strong> {file.type || "Desconocido"}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={closeSession}
            className={`logout-button ${darkMode ? "dark-mode" : ""}`}
            aria-label="Cerrar sesión"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="footer">
          <p className={`footer-text ${darkMode ? "dark-mode" : ""}`}>© 2025 AnaliPage. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
