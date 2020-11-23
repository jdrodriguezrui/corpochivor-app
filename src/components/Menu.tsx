import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import * as icons from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const homePage : AppPage = {
  title: 'Inicio',
  url: '/home',
  iosIcon: icons.homeOutline,
  mdIcon: icons.homeSharp
}

const tramitesPage : AppPage = {
  title: 'Tramites',
  url: '/tramites',
  iosIcon: icons.fileTrayStackedOutline,
  mdIcon: icons.fileTrayStackedSharp
}

const proyectosPage : AppPage = {
  title: 'Proyectos',
  url: '/proyectos',
  iosIcon: icons.accessibilityOutline,
  mdIcon: icons.accessibilitySharp
}

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">

        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Corpochivor App</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent>
        <IonList id="menu-list">                
          <IonMenuToggle autoHide={false}>
          <IonListHeader color="secondary">Navegación</IonListHeader>
            <IonItem className={location.pathname === homePage.url ? 'selected' : ''} routerLink={homePage.url} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={homePage.iosIcon} md={homePage.mdIcon} />
              <IonLabel>{homePage.title}</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === tramitesPage.url ? 'selected' : ''} routerLink={tramitesPage.url} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={tramitesPage.iosIcon} md={tramitesPage.mdIcon} />
              <IonLabel>{tramitesPage.title}</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === proyectosPage.url ? 'selected' : ''} routerLink={proyectosPage.url} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={proyectosPage.iosIcon} md={proyectosPage.mdIcon} />
              <IonLabel>{proyectosPage.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>    
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
