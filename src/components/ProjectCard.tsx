import { IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React from "react";
import './ProjectCard.css'

const ProjectCard: React.FC<{id: String, titulo: String}> = (props) => {
  return(
    <IonCard routerLink={"/proyecto/"+props.id.toString()}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={"assets/images/"+props.id.toString() + ".png"}/>            
            </IonCol>
            <IonCol>
            {props.titulo}
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
};

export default ProjectCard