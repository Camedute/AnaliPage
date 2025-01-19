import React from "react";
import { useTheme } from "../Components/ThemeContext"; // Importa el hook useTheme
import "./settings.css";

function Settings() {
  const { darkMode, toggleTheme } = useTheme(); // Usa el hook para obtener darkMode y toggleTheme

  const [settings, setSettings] = React.useState({
    showGridLines: true,
    enableAnimations: true,
    chartStyle: "bar",
    dataLabels: true,
    colorScheme: "default",
  });

  const handleSettingChange = (setting: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="settings-card">
        <h1 className="settings-title">Configuración</h1>

        {/* Sección de Tema */}
        <section className="settings-section">
          <h2>Apariencia</h2>
          <div className="setting-item">
            <label className="setting-label">
              Modo Oscuro
              <div
                className={`toggle ${darkMode ? "active" : ""}`}
                onClick={toggleTheme} // Cambia el tema usando toggleTheme
              >
                <div className="toggle-slider"></div>
              </div>
            </label>
          </div>
        </section>

        {/* Sección de Gráficos */}
        <section className="settings-section">
          <h2>Preferencias de Gráficos</h2>

          <div className="setting-item">
            <label className="setting-label">
              Mostrar líneas de cuadrícula
              <div
                className={`toggle ${settings.showGridLines ? "active" : ""}`}
                onClick={() =>
                  handleSettingChange("showGridLines", !settings.showGridLines)
                }
              >
                <div className="toggle-slider"></div>
              </div>
            </label>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              Habilitar animaciones
              <div
                className={`toggle ${settings.enableAnimations ? "active" : ""}`}
                onClick={() =>
                  handleSettingChange(
                    "enableAnimations",
                    !settings.enableAnimations
                  )
                }
              >
                <div className="toggle-slider"></div>
              </div>
            </label>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              Mostrar etiquetas de datos
              <div
                className={`toggle ${settings.dataLabels ? "active" : ""}`}
                onClick={() =>
                  handleSettingChange("dataLabels", !settings.dataLabels)
                }
              >
                <div className="toggle-slider"></div>
              </div>
            </label>
          </div>

          <div className="setting-item">
            <label className="setting-label">Tipo de gráfico predeterminado</label>
            <select
              value={settings.chartStyle}
              onChange={(e) =>
                handleSettingChange("chartStyle", e.target.value)
              }
              className="select-input"
            >
              <option value="bar">Barras</option>
              <option value="line">Líneas</option>
              <option value="pie">Circular</option>
              <option value="area">Área</option>
            </select>
          </div>

          <div className="setting-item">
            <label className="setting-label">Esquema de colores</label>
            <select
              value={settings.colorScheme}
              onChange={(e) =>
                handleSettingChange("colorScheme", e.target.value)
              }
              className="select-input"
            >
              <option value="default">Predeterminado</option>
              <option value="monochrome">Monocromático</option>
              <option value="colorful">Colorido</option>
              <option value="pastel">Pastel</option>
            </select>
          </div>
        </section>

        <div className="settings-actions">
          <button className="save-button">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
