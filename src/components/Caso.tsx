import { IonButton, IonIcon, IonList, IonListHeader } from "@ionic/react";
import { chevronDownSharp, chevronUpSharp } from "ionicons/icons";
import React, { useState } from "react";
import { Subpaso } from "./Subpaso";

interface CasoData{
  titulo: string
  subpasos: any[]
}

export const Caso: React.FC<{caso: CasoData, index:number}> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return(
      <IonList>      
        <IonListHeader color="warning">
          <IonButton onClick={()=>setCollapsed(!collapsed)}>
            {
              collapsed ? 
              <IonIcon ios={chevronDownSharp} md={chevronDownSharp}/> : 
              <IonIcon ios={chevronUpSharp} md={chevronUpSharp}/>
            }
          </IonButton>
          {props.caso.titulo}
        </IonListHeader>
        {
          !collapsed ?
          props.caso.subpasos.map((subpaso,index) => {
            return <Subpaso key={index} subpasoData={subpaso}/>
          })
          :
          null
        }
      </IonList>
  )
};