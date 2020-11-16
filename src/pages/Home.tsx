import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Corpochivor app</IonTitle>
        </IonToolbar>
      </IonHeader>      
      <IonContent fullscreen>
        <h1>Bienvenido!</h1>
        <p>Utilice el botón lateral para navegar rápidamente</p>
        <IonButton routerLink={"/tramites"}>Tramites</IonButton>
        <IonButton routerLink={"/"}>Proyectos</IonButton>
      </IonContent>
    </IonPage>
  )
};

export default Home;