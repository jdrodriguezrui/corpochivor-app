

import React from "react";
import {SubpasoData} from "../Subpaso"

const canalInfo : any = {
  "presencial" : {
    "titulo" : "Punto de atención Corpochivor",
    "direccion" : "Carrera 5 No. 10-125	.Garagoa, Boyacá",
    "telefono"  : "(8) 7502189 – 7501951 – 7501356"
  },
  "web" : {
    "titulo" : "Ventanilla Integral de Trámites Ambientales en Línea - VITAL",
    "url"    : "http://vital.anla.gov.co/SILPA/TESTSILPA/Security/Login.aspx"
  }
}

export const Canal: React.FC<{data: SubpasoData}> = (props) => {
  const data = props.data
  return(
    <div>
      {data.presencial ? 
      <div>
        <h3>{canalInfo.presencial.titulo}</h3>
        <h4>Dirección: {canalInfo.presencial.direccion}</h4>
        <h4>Teléfono: {canalInfo.presencial.telefono}</h4>
      </div>
      :null}
      {data.web ? 
      <div>
        <h3>Atención web</h3>
        <a href={canalInfo.web.url}>{canalInfo.web.titulo}</a>
      </div>
        :null}
    </div>
  )
}