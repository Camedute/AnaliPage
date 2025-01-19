// Updated OldAnalisis.tsx
import React, { useState } from 'react';
import './oldAnalisis.css';

function OldAnalisis() {
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const analysisData = [
    {
      id: 1,
      fecha: '2025-01-15',
      tipo: 'Análisis de Ventas',
      usuario: 'Ana García',
      resultado: 'Incremento del 25% en ventas',
      detalles: {
        metricas: {
          ventasTotales: '$150,000',
          promedioPorVenta: '$300',
          clientesNuevos: 125
        },
        recomendaciones: [
          'Aumentar inventario de productos top',
          'Implementar programa de fidelización',
          'Revisar precios de productos C'
        ]
      }
    },
    {
      id: 2,
      fecha: '2025-01-10',
      tipo: 'Análisis de Inventario',
      usuario: 'Carlos Ruiz',
      resultado: 'Optimización necesaria',
      detalles: {
        metricas: {
          productosTotales: 1500,
          stockBajo: 45,
          valorInventario: '$250,000'
        },
        recomendaciones: [
          'Reordenar productos agotados',
          'Liquidar inventario antiguo',
          'Ajustar niveles de reorden'
        ]
      }
    }
  ];

  const showAnalysisDetail = (analysis: any) => {
    setSelectedAnalysis(analysis);
    setShowModal(true);
  };

  const runNewAnalysis = () => {
    alert('Iniciando nuevo análisis...');
  };

  return (
    <div className="old-analysis-container">
      <h1>Análisis Históricos</h1>
      
      <div className="analysis-table">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Usuario</th>
              <th>Resultado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {analysisData.map((analysis) => (
              <tr key={analysis.id}>
                <td>{analysis.fecha}</td>
                <td>{analysis.tipo}</td>
                <td>{analysis.usuario}</td>
                <td>{analysis.resultado}</td>
                <td>
                  <button 
                    className="view-button"
                    onClick={() => showAnalysisDetail(analysis)}
                  >
                    Ver Análisis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedAnalysis && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedAnalysis.tipo}</h2>
              <button 
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="analysis-info">
                <p><strong>Fecha:</strong> {selectedAnalysis.fecha}</p>
                <p><strong>Usuario:</strong> {selectedAnalysis.usuario}</p>
                <p><strong>Resultado:</strong> {selectedAnalysis.resultado}</p>
              </div>

              <div className="metrics-section">
                <h3>Métricas Principales</h3>
                <div className="metrics-grid">
                  {Object.entries(selectedAnalysis.detalles.metricas).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span className="metric-label">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recommendations-section">
                <h3>Recomendaciones</h3>
                <ul>
                  {selectedAnalysis.detalles.recomendaciones.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <button 
                  className="analyze-button"
                  onClick={runNewAnalysis}
                >
                  Analizar de Nuevo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OldAnalisis;