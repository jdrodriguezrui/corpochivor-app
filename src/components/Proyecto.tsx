import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { getProyecto } from '../content/Proyectos';

export const Proyecto : React.FC<any> = () =>{
  const { id } = useParams<{ id: string; }>();  
  const data = getProyecto(id)
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{data.titulo}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
      <IonText color="primary">
        <h1>{data.titulo}</h1>
        </IonText>
        <IonText color="primary">
          <h2>Lider</h2>
        </IonText>
        <p>{data.lider}</p>
        <IonText color="primary">
          <h1>Grupos de valor</h1>
        </IonText>
        {
          data.grupos.map((grupo:any,index:number)=>{
            return <div key={index}>
              <IonText color="secondary">
                <h2>{grupo.titulo}</h2>
              </IonText>
              <IonText color="secondary">
                <h2>Objetivo:</h2>
              </IonText>
              <p>{grupo.objetivo}</p>
            </div>
          })
        }
        
      </IonContent>
    </IonPage>
  )
}