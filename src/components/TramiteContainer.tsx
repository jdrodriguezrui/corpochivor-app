import { IonButtons, IonContent, IonHeader, IonMenuButton, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Paso } from "./Paso";
import {TramiteState} from './Tramite'
import {TramiteInfo} from './TramiteInfo'
import './TramiteContainer.css'

interface State{
  selected: string
}

interface Props{
  data: TramiteState
}



export const TramiteContainer: React.FC<Props> = (props) => {
  const [state, setState] = useState<State>({selected: "info"})
  const tramiteState = props.data

  const segmentOnChange = (e: any) => {
    setState({...state, selected: e.detail.value || "undefined"})
    document.querySelector('ion-content')?.scrollToTop(500);
  }

  return(
  <div>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Trámite</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSegment scrollable onIonChange={e => segmentOnChange(e)} value={state.selected}>
          <IonSegmentButton value="info">Información</IonSegmentButton>
          {tramiteState.ciudadano ?
          <IonSegmentButton value="ciudadano">Ciudadano</IonSegmentButton> 
          : null}
          {tramiteState.organizacion ?
          <IonSegmentButton value="organizacion">Organizacion</IonSegmentButton>
          : null}
          {tramiteState.extranjero ?
          <IonSegmentButton value="extranjero">Extranjero</IonSegmentButton>
          : null}
          {tramiteState.institucion ?
          <IonSegmentButton value="institucion">Institucion</IonSegmentButton> 
          : null}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
    
        {
          state.selected === "info" ?          
          <TramiteInfo data={tramiteState}></TramiteInfo>
          :
          <IonContent force-overscroll fullscreen>
          {tramiteState[state.selected] && tramiteState[state.selected].map((paso:any, index:any)=>{
            return(              
              <Paso key={index} paso={paso} index={index}/>              
            )
          })}
          </IonContent>
        }      
  </div>
  )
}