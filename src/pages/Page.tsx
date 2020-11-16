import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import TestContent from '../content/test-content';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{TestContent[name].Title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{TestContent[name].Title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<IonImg src={TestContent[name].imgUrl} slot="start"/>*/}
        <ExploreContainer name={TestContent[name].Content} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
