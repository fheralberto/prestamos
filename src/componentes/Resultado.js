import React from 'react';

const Resultado = ({ cantidad, plazo, total }) => (
  <div className="resultado">
    <h4>Resultado de la cotización:</h4>
    <p>Cantidad solicitada: <span>$ {cantidad}</span></p>
    <p>Plazo a {plazo} meses</p>
    <p>Pago mensual: <span>$ {(total / plazo).toFixed(2)}</span></p>
    <h5>Total a pagar: <span>$ {(total).toFixed(2)}</span></h5>
  </div>
)
export default Resultado;