import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,IonIcon,IonItem,IonLabel,IonList, IonPage, IonRow, IonToolbar } from "@ionic/react";
import * as icons from "ionicons/icons";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="corpoback">
          <img src="assets/images/Corpo.png" alt="Corpochivor logo"/>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
      <IonList color="vigilance">
      <IonItem routerLink="/proyectos">
        <IonIcon md={icons.briefcase} ios={icons.briefcase} slot="start"/>
          <IonLabel>Nuestros proyectos</IonLabel>
        <IonIcon md={icons.arrowForward} ios={icons.arrowForward} slot="end"/>
      </IonItem>
    <IonItem routerLink="/tramites">
    <IonIcon md={icons.logoBuffer} ios={icons.logoBuffer} slot="start"/>
      <IonLabel>Trámites y servicios </IonLabel>
      <IonIcon md={icons.arrowForward} ios={icons.arrowForward} slot="end"/>
    </IonItem>
    <IonItem routerLink="/pqrs">
    <IonIcon md={icons.helpCircle} ios={icons.helpCircle} slot="start"/>
      <IonLabel>Portal de PQRS</IonLabel>
      <IonIcon md={icons.arrowForward} ios={icons.arrowForward} slot="end"/>
    </IonItem>
    <IonItem routerLink="/denuncias">
    <IonIcon md={icons.leaf} ios={icons.leaf} slot="start"/>
      <IonLabel>Tu denuncia ambiental</IonLabel>
      <IonIcon md={icons.arrowForward} ios={icons.arrowForward} slot="end"/>
    </IonItem>
  </IonList>
  <IonCard>
    <IonCardHeader class="sizecard_leader" color="secondary" >
      <IonCardTitle>
        Nuestras redes sociales y web    
      </IonCardTitle>
    </IonCardHeader>
    <IonGrid>
      <IonRow> 
        <IonCol>
          <div>
            <a href="https://es-la.facebook.com/Corpochivor/" title="Corpochivor">
            <IonIcon md={icons.logoFacebook} ios={icons.logoFacebook} size="large" color="primary"/>
            </a>
          </div>
        </IonCol>
        <IonCol>
          <div>
            <a href="https://www.youtube.com/user/carcorpochivor" title="Corpochivor">
            <IonIcon md={icons.logoYoutube} ios={icons.logoYoutube} size="large" color="youtube"/>
            </a>
          </div>
        </IonCol>
        <IonCol>
          <div>
            <a href="https://twitter.com/CORPOCHIVOR?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3ACORPOCHIVOR&ref_url=https%3A%2F%2Fwww.corpochivor.gov.co%2F" title="Corpochivor">
            <IonIcon md={icons.logoTwitter} ios={icons.logoTwitter} size="large" color="twitter"/>
            </a>
          </div>
        </IonCol>
        <IonCol>
          <div>
            <a href="https://www.instagram.com/corpochivor/" title="Corpochivor">
            <IonIcon md={icons.logoInstagram} ios={icons.logoInstagram} size="large" color="danger"/>
            </a>
          </div>
        </IonCol>
        <IonCol>
          <div>
            <a href="https://www.corpochivor.gov.co/" title="Corpochivor">
            <IonIcon md={icons.globe} ios={icons.globe} size="large" color="success"/>
            </a>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>
      </IonContent>
    </IonPage>
  )
};

export default Home;