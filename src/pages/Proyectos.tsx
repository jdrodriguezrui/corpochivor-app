import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Page.css';
import ProjectCard from '../components/ProjectCard'
import {getProyectosCards} from '../content/Proyectos'

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Proyectos</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        
        {
          getProyectosCards().map((card,index)=>{
            return <ProjectCard color={card.color} id={card.id} titulo={card.titulo} key={index}/>
          })
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
