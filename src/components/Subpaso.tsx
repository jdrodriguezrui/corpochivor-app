import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonIcon, IonItem, IonLabel } from "@ionic/react";
import * as icons from 'ionicons/icons';
import React from "react";
import './Subpaso.css'
import {Condicion} from './subpasos/Condicion'
import {Canal} from './subpasos/Canal'
import {Documento} from './subpasos/Documento'
import {Formulario} from './subpasos/Formulario'
import {Pago} from './subpasos/Pago'

export interface SubpasoData {
  type: String
  titulo: String
  url?: String
  anotaciones?: String
  descripcion?: String
  tipoMoneda?: String
  tipoValor?: String
  cantidad?: String
  valor? : String
  presencial?: Boolean
  web?: Boolean
}

export const Subpaso: React.FC<{subpasoData: SubpasoData}> = (props) => {
  const data = props.subpasoData
  return(
      <IonItem>
        <IonCard>          
          <IonCardHeader>
          <IonIcon ios={renderSubpasoIcon(data.type)} md={renderSubpasoIcon(data.type)} />
          <IonLabel>{renderSubpasoType(data.type)}</IonLabel>
          </IonCardHeader>
          <IonCardContent>
            {renderSubpasoContent(data.type, data)}
          </IonCardContent>
        </IonCard>
      </IonItem>
  )
};

function renderSubpasoContent(type: String, data: SubpasoData){
  switch(type){
    case "condicion":
      return <Condicion data={data}/>
    case "documento":
      return <Documento data={data}/>
    case "formulario":
      return <Formulario data={data}/>
    case "pago":
      return <Pago data={data}/>
    case "canal":
      return <Canal data={data}/>
  }
}

function renderSubpasoIcon(type: String){
  switch(type){
    case "condicion":
      return icons.helpCircleOutline
    case "documento":
      return icons.documentAttachOutline
    case "formulario":
      return icons.documentTextOutline
    case "pago":
      return icons.cashOutline
    case "canal":
      return icons.headsetOutline
  }
}

function renderSubpasoType(type: String){
  switch(type){
    case "condicion":
      return "Condición"
    case "documento":
      return "Documento"
    case "formulario":
      return "Formulario"
    case "pago":
      return "Pago"
    case "canal":
      return "Canales de atención"
  }
}