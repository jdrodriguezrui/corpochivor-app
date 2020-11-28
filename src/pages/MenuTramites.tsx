import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import {TramiteCard} from "../components/TramiteCard";
import {getTramiteCardList} from '../content/Tramites'

const MenuTramites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tramites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>        
        {
        getTramiteCardList().map((card:{id: string, text: string},index:number) => {
          return(
            <TramiteCard key={index} text={card.text} id={card.id}/>            
          );
        })}
      </IonContent>
    </IonPage>
  )
};

export default MenuTramites;