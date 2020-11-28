import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,IonIcon,IonItem,IonLabel,IonList,IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import * as icons from "ionicons/icons";
import React, { useState } from "react";
import './PQRS.css'

const Denuncia: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><b>Tu denuncia ambiental</b></IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
      <IonList class="ion-margin">
      <IonLabel class="ion-padding">
        <b>
          Municipio:
        </b>  
      </IonLabel>
      <IonItem>  
      <IonLabel style={{"display":"none"}}>Seleccione el municipio</IonLabel>
      <IonSelect placeholder="Seleccione el municipio" okText="Ok" cancelText="Cancelar" > 
        <IonSelectOption value="Almeida">Almeida</IonSelectOption> 
        <IonSelectOption value="Boyacá">Boyacá</IonSelectOption> 
        <IonSelectOption value="Campohermoso">Campohermoso</IonSelectOption> 
        <IonSelectOption value="Chinavita">Chinavita</IonSelectOption>
        <IonSelectOption value="Chivor">Chivor</IonSelectOption>
        <IonSelectOption value="Ciénega">Ciénega</IonSelectOption>
        <IonSelectOption value="Garagoa">Garagoa</IonSelectOption> 
        <IonSelectOption value="Guateque">Guateque</IonSelectOption> 
        <IonSelectOption value="Guayatá">Guayatá</IonSelectOption> 
        <IonSelectOption value="Jenesano">Jenesano</IonSelectOption>
        <IonSelectOption value="La Capilla">La Capilla</IonSelectOption>
        <IonSelectOption value="Macanal">Macanal</IonSelectOption>
        <IonSelectOption value="Nuevo Colón">Nuevo Colón</IonSelectOption> 
        <IonSelectOption value="Pachavita">Pachavita</IonSelectOption> 
        <IonSelectOption value="Ramiriquí">Ramiriquí</IonSelectOption> 
        <IonSelectOption value="San Luis de Gaceno">San Luis de Gaceno</IonSelectOption>
        <IonSelectOption value="Santa María">Santa María</IonSelectOption>
        <IonSelectOption value="Somondoco">Somondoco</IonSelectOption>
        <IonSelectOption value="Sutatenza">Sutatenza</IonSelectOption> 
        <IonSelectOption value="Tenza">Tenza</IonSelectOption> 
        <IonSelectOption value="Tibaná">Tibaná</IonSelectOption> 
        <IonSelectOption value="Turmequé">Turmequé</IonSelectOption>
        <IonSelectOption value="Úmbita">Úmbita</IonSelectOption>
        <IonSelectOption value="Ventaquemada">Ventaquemada</IonSelectOption>
        <IonSelectOption value="Viracachá">Viracachá</IonSelectOption>  
        </IonSelect> 
      </IonItem> 
    </IonList>
    <IonList class="ion-margin">
      <IonLabel class="ion-padding">
        <b>
          Tipo de denuncia:
        </b>
      </IonLabel>
      <IonItem>
      <IonLabel style={{"display":"none"}} >Seleccione el tipo de denuncia</IonLabel>  
      <IonSelect placeholder="Seleccione el tipo de denuncia" okText="Ok" cancelText="Cancelar" > 
        <IonSelectOption value="Incendio forestal">Incendio forestal</IonSelectOption> 
        <IonSelectOption value="Vertimiento de residuos">Vertimiento de residuos</IonSelectOption> 
        <IonSelectOption value="Construcción en área natural">Construcción en área natural</IonSelectOption> 
        <IonSelectOption value="Minería ilegal">Minería ilegal</IonSelectOption>
        <IonSelectOption value="Maltrato a la fauna">Maltrato a la fauna</IonSelectOption>
        <IonSelectOption value="Tala de árboles">Tala de árboles</IonSelectOption>  
        </IonSelect> 
      </IonItem> 
    </IonList>
      <IonCard>
        <IonTextarea placeholder="Describe tu denuncia..."/>
        <IonButton shape="round" color="header" onClick={() => setShowAlert(true)}>
        <IonIcon slot="start" md={icons.paperPlane} />
        Enviar denuncia
      </IonButton>
      </IonCard>      

      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}          
          header={'Denuncia ambiental'}
          message={'Tu denuncia se ha registrado con el número: 20204883ASRW'}
          buttons={['Aceptar']}
        />
      </IonContent>
    </IonPage>
  )
};

export default Denuncia;