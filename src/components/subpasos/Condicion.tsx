

import React from "react";
import {SubpasoData} from "../Subpaso"

export const Condicion: React.FC<{data: SubpasoData}> = (props) => {
  const data = props.data
  return(
    <div>
      <h6>{data.titulo}</h6>
    </div>
  )  
}