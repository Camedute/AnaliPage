import React from "react";
import { useTheme } from "../Components/ThemeContext"; // Hook para usar el tema
import "./profile.css";

function Profile() {
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro

  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      <div className={`profile-card ${darkMode ? "dark-mode" : ""}`}>
        <div className={`profile-header ${darkMode ? "dark-mode" : ""}`}>
          <div className="profile-cover"></div>
          <div className="profile-avatar">
            <img
              src="/api/placeholder/150/150"
              alt="Foto de perfil"
              className="avatar-img"
            />
          </div>
        </div>

        <div className={`profile-info ${darkMode ? "dark-mode" : ""}`}>
          <h1 className={`profile-name ${darkMode ? "dark-mode-text" : ""}`}>
            Nombre del Usuario
          </h1>
          <p className={`profile-title ${darkMode ? "dark-mode-text" : ""}`}>
            Desarrollador Web
          </p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">125</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat">
              <span className="stat-value">1.5K</span>
              <span className="stat-label">Seguidores</span>
            </div>
            <div className="stat">
              <span className="stat-value">842</span>
              <span className="stat-label">Siguiendo</span>
            </div>
          </div>

          <div className="profile-bio">
            <h2 className={`bio-title ${darkMode ? "dark-mode-text" : ""}`}>
              Sobre mí
            </h2>
            <p className={`bio-text ${darkMode ? "dark-mode-text" : ""}`}>
              ¡Hola! Soy un desarrollador apasionado por crear experiencias web
              increíbles. Me encanta aprender nuevas tecnologías y compartir
              conocimientos con la comunidad.
            </p>
          </div>

          <div className="profile-contact">
            <button className="edit-button">Editar Perfil</button>
            <button className="message-button">Enviar Mensaje</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
