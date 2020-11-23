import { IonCard, IonCardContent, IonText } from "@ionic/react";
import React from "react";
import './ProjectCard.css'

export const TramiteCard: React.FC<{id: string, text: string}> = (props) => {
  return(
    <IonCard routerLink={"/tramite/"+props.id.toString()}>
      <IonCardContent>
        <IonText color="dark">{props.text}</IonText>
      </IonCardContent>
    </IonCard>
  )
};