

import React from "react";
import {SubpasoData} from "../Subpaso"

export const Documento: React.FC<{data: SubpasoData}> = (props) => {
  const data = props.data
  return(
    <div>
      <h6>{data.titulo}</h6>
      <p>{data.anotaciones}</p>
    </div>
  )
}