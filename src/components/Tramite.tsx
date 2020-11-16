import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import ExploreContainer from "./ExploreContainer";
import {TramiteContainer} from "./TramiteContainer"

export interface TramiteState{
  titulo: string,
  url:  string,
  descripcion: string,
  resultado?: string
  ciudadano?: any[],
  extranjero?: any[],
  institucion?: any[],
  organizacion?: any[],
  error: boolean
  [selector:string]: any
}

export const Tramite: React.FC<{data: TramiteState | null}> = (props) => {
  const data = props.data
  return(
    
    <IonPage>      
        {data ? <TramiteContainer data={data}/> : <ExploreContainer name={"Trámite no encontrado"}/>}
    </IonPage>

  )
};