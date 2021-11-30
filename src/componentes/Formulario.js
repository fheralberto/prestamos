import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { calcularTotal } from '../helpers';
import Mensaje from "./Mensaje"
import Resultado from "./Resultado"
import Spinner from './Spinner';

const Formulario = (props) => {
  const { cantidad, guardarCantidad, plazo, guardarPlazo,
    total, guardarTotal, guardarCargando, cargando } = props;
  // Define state
  const [error, guardaError] = useState(false);
  // onSubmit:
  const calcularPrestamo = (e) => {
    e.preventDefault()
    // Validar
    if (cantidad <= 0 || plazo === "" ||
      isNaN(cantidad) === true || isNaN(plazo) === true) {
      guardaError(true); // error = true
      return;
    }
    // Elimina el error previo (error = false)
    guardaError(false);
    // Habilita el spinner
    guardarCargando(true)
    // Espera 3 segundos para cotizar
    setTimeout(() => {
      // Cotizar
      const calculado = calcularTotal(cantidad, plazo)
      // Se guarda el valor a total
      // Deshabilita el spinner
      guardarCargando(false)
      guardarTotal(calculado); //:::::
    }, 3000);
  }
  // Componente condicional
  let componente;
  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    if (!error) {
      componente = <Resultado
        cantidad={cantidad}
        plazo={plazo}
        total={total}
      />
    }
  }
  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div>
          <div className="row">
            <label className="six columns">Cantidad Prestamo</label>
            <input
              className="six columns"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={
                e => guardarCantidad(parseInt(e.target.value))
              }
            />
          </div>
          <div className="row">
            <label className="six columns">Plazo para Pagar</label>
            <select
              className="six columns"
              onChange={
                e => guardarPlazo(parseInt(e.target.value))
              }
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div className="btn-submit">
            <input
              type="submit"
              value="Calcular"
              className="u-full-width boton"
            />
          </div>
          {componente}
          {error ?
            <p className="error">
              Complete los campos para cotizar*
            </p>
            : null}
        </div>
      </form>
    </Fragment>
  );
}

export default Formulario;