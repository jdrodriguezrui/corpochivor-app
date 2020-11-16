import { IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import React from "react";
import './ProjectCard.css'

export interface ProjectCardProps {
  img: String,
  text: String,
  url: String
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return(
    <IonCard routerLink={props.url.toString()}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={props.img.toString()}/>            
            </IonCol>
            <IonCol>
            {props.text}
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
};