import { IonCard, IonItem, IonText } from "@ionic/react";
import React from "react";
import './ProjectCard.css'

const ProjectCard: React.FC<{id: String, titulo: string, color: string}> = (props) => {
  return(
    <IonCard color={props.color} routerLink={"/proyecto/"+props.id.toString()}>
      <IonItem color={props.color}>
      <img src = {"assets/images/"+props.id+".png"} slot="start" width="80" height="80" alt={props.titulo}/>
        <IonText>
          {props.titulo}
        </IonText>
      </IonItem>
    </IonCard>
  )
};

export default ProjectCard