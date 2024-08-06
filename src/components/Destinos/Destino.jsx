// Destino.jsx (modificado)
import React from 'react';
import '../../App.css';

const Destino = ({ nome, descricao, distancia }) => {
  return (
    <div className="destino">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p><strong>Distância: {distancia} km</strong></p>
    </div>
  );
};

export default Destino;