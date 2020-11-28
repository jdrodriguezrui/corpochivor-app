import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon, IonItem, IonPage, IonToolbar, IonLabel } from '@ionic/react';
import { useParams } from 'react-router';
import { getProyecto } from '../content/Proyectos';
import './Proyecto.css'

export const Proyecto : React.FC<any> = () =>{
  const { id } = useParams<{ id: string; }>();  
  const data = getProyecto(id)
  const bigImg = id.charAt(0).toUpperCase() + id.slice(1) + 2;
  return(
    <IonPage>
      <IonToolbar>
        <IonItem color={data.color}>
          <img src = {"assets/images/"+data.id+".png"}  slot="start" width="80" height="80" alt={data.titulo}/>
          {data.titulo}
        </IonItem>
      </IonToolbar>

      <IonContent>
        <IonCard>
          <IonCardHeader color={data.color}>
            <IonCardTitle>
            Lider
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonIcon name="person" slot="start"/>
            <IonLabel>{data.lider}</IonLabel>
          </IonCardContent>
        </IonCard>
        
        <IonCard >
          <IonCardHeader color={data.color}>
            <IonCardTitle>
              Grupos de valor
            </IonCardTitle>
          </IonCardHeader>
          {
            data.grupos.map((grupo:any,index:number)=>{
              return(
                <IonCard>
                  <IonLabel color="dark">
                    <h2>{grupo.titulo}</h2>
                  </IonLabel>
                  <IonLabel>
                    {grupo.objetivo}
                  </IonLabel>
                </IonCard>
              )
            })
          }          
        </IonCard>
        <img src={"assets/images/"+bigImg+".jpg"} alt={data.id}/>
      </IonContent>
    </IonPage>
  )
}