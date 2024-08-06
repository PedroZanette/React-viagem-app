// Destino.jsx (modificado)
import React from 'react';
import '../../App.css';

const Destino = ({ destino, setDestino }) => {


  return (
    <button onClick={() => setDestino(destino)}>
      <div className="destino">
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
        <p><strong>Distância: {destino.distancia} km</strong></p>
      </div>
    </button>
  );
};

export default Destino;