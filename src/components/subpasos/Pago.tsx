

import React from "react";
import {SubpasoData} from "../Subpaso"

export const Pago: React.FC<{data: SubpasoData}> = (props) => {
  const data = props.data
  return(
    <div>
      <table>
        <tbody>
        <tr>
          <th>Descripción</th>
          <th>Tipo</th>
        </tr>
        <tr>
          <td>{data.descripcion}</td>
          <td>{data.tipoValor}</td>
        </tr>
        </tbody>
      </table>
      <h2>Entidad recaudadora</h2>
      <h6>Banco Agrario</h6>
      <h2>Tipo de cuenta</h2>
      <h6>Corriente</h6>
      <h2>Número de cuenta</h2>
      <h6>315340001983</h6>
      <h2>Nombre de cuenta</h2>
      <h6>Corporación Autónoma Regional de Chivor - CORPOCHIVOR</h6>
      <h2>Código de recaudo</h2>
      <h6>21472</h6>
    </div>
  )
}