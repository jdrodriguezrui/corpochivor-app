import { IonButton, IonIcon, IonList, IonListHeader } from "@ionic/react";
import {chevronDownSharp, chevronUpSharp} from 'ionicons/icons';

import React, { useState } from "react";
import { Subpaso } from "./Subpaso";

interface PasoData{
  titulo: string
  subpasos: any[]
  casos?: any[]
}

export const Paso: React.FC<{paso: PasoData, index: number}> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return(
      <IonList>      
        <IonListHeader>
          <IonButton onClick={()=>setCollapsed(!collapsed)}>
            {
              collapsed ? 
              <IonIcon ios={chevronDownSharp} md={chevronDownSharp}/> : 
              <IonIcon ios={chevronUpSharp} md={chevronUpSharp}/>
            }
          </IonButton>
          {props.paso.titulo}
        </IonListHeader>
        {
          !collapsed ?
          props.paso.subpasos.map((subpaso,index) => {
            return <Subpaso key={index} subpasoData={subpaso}/>
          })
          :
          null
        }
      </IonList>
  )
};