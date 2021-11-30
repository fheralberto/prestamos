import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';


const Formulario = ( 
  {cantidad, guardarCantidad, plazo, guardarPlazo} ) => {
  // Define state
  const [error, guardaError] = useState(false)
  // onSubmit:
  const calcularPrestamo = (e)=>{
    e.preventDefault()
    // Validar
    if(cantidad === 0 || plazo === ""){
      guardaError(true);
      return;
    }
    // Elimina el error previo
    guardaError(false);
    // Cotizar
  }

  return (
    <Fragment>
    <form onSubmit={ calcularPrestamo }>
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
            className="button-primary u-full-width"
          />
        </div>
        {error ? 
          <p className="error">
            Todos los campos son obligatorios*
          </p> 
          : null}
      </div>
    </form>
    </Fragment>
  );
}

export default Formulario;