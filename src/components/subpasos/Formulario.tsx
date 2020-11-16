

import { IonButton } from "@ionic/react";
import React from "react";
import {SubpasoData} from "../Subpaso"

export const Formulario: React.FC<{data: SubpasoData}> = (props) => {
  const data = props.data
  return(
    <div>
      <h6>{data.titulo}</h6>
      <IonButton href={(data.url || "").toString()} color="secondary">Descargar</IonButton>
    </div>
  )
}