import React, { useState } from "react";
import { useTheme } from "../Components/ThemeContext"; // Hook para usar el tema
import "./profile.css";

function Profile() {
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro
  const [isEditing, setIsEditing] = useState(false); // Modo de edición
  const [profileData, setProfileData] = useState({
    name: "Nombre del Usuario",
    title: "Desarrollador Web",
    bio: "¡Hola! Soy un desarrollador apasionado por crear experiencias web increíbles. Me encanta aprender nuevas tecnologías y compartir conocimientos con la comunidad.",
  });

  // Manejar los cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Guardar cambios
  const handleSave = () => {
    setIsEditing(false);
    // Aquí podrías enviar los datos a tu API si es necesario
  };

  // Cancelar cambios
  const handleCancel = () => {
    setIsEditing(false);
    // Opcional: restaurar datos originales si es necesario
  };

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
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="profile-input"
                placeholder="Nombre del Usuario"
              />
              <input
                type="text"
                name="title"
                value={profileData.title}
                onChange={handleChange}
                className="profile-input"
                placeholder="Título"
              />
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                className="profile-textarea"
                placeholder="Sobre mí"
              />
              <div className="profile-actions">
                <button className="save-button" onClick={handleSave}>
                  Guardar
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className={`profile-name ${darkMode ? "dark-mode-text" : ""}`}>
                {profileData.name}
              </h1>
              <p className={`profile-title ${darkMode ? "dark-mode-text" : ""}`}>
                {profileData.title}
              </p>
              <div className="profile-bio">
                <h2 className={`bio-title ${darkMode ? "dark-mode-text" : ""}`}>
                  Sobre mí
                </h2>
                <p className={`bio-text ${darkMode ? "dark-mode-text" : ""}`}>
                  {profileData.bio}
                </p>
              </div>
              <div className="profile-contact">
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                  Editar Perfil
                </button>
                <button className="message-button">Enviar Mensaje</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
