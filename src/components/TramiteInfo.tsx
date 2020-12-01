import { IonButton, IonContent, IonText } from "@ionic/react";
import React from "react";
import { TramiteState } from "./Tramite";

interface Props{
  data: TramiteState
}

export const TramiteInfo: React.FC<Props> = (props) => {
  const tramiteState = props.data
  return(
    <IonContent className="infoContent" fullscreen>
            <IonText color="primary"className="title">
              <h2>{tramiteState.titulo}</h2>
            </IonText>
            <IonText color="secondary"className="title">
              <h3>Descripción</h3>
            </IonText>
            <IonText>{tramiteState.descripcion}</IonText>
            <IonText color="secondary"className="title">
              <h3>Resultado y plazos de espera</h3>
            </IonText>
            <IonText>{tramiteState.resultado}</IonText>
            <IonButton expand="block"color="primary" href={tramiteState.url}>              
              Más información
            </IonButton>
    </IonContent>
  )
}
