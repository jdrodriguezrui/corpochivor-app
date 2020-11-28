import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,IonIcon,IonItem,IonLabel,IonList,IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import * as icons from "ionicons/icons";
import React from "react";
import './PQRS.css'

const PQRS: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><b>Portal de PQRS</b></IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonCard className="pqrscard" href="https://pqrd.corpochivor.gov.co/open.php" color="hydric">
          <IonCardContent>
            <IonIcon className="pqrsicon" md={icons.paperPlane} ios={icons.paperPlane}/>
            <IonLabel>Abrir nueva solicitud</IonLabel>
          </IonCardContent>
        </IonCard>
        <IonCard className="pqrscard" href="https://pqrd.corpochivor.gov.co/view.php" color="medium">
          <IonCardContent>
            <IonIcon className="pqrsicon" md={icons.time} ios={icons.time}/>
            <IonLabel>Ver estado de una solicitud</IonLabel>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
};

export default PQRS;