import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-cover"></div>
          <div className="profile-avatar">
            <img 
              src="/api/placeholder/150/150"
              alt="Foto de perfil"
              className="avatar-img"
            />
          </div>
        </div>

        <div className="profile-info">
          <h1 className="profile-name">Nombre del Usuario</h1>
          <p className="profile-title">Desarrollador Web</p>
          
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
            <h2>Sobre mí</h2>
            <p>
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