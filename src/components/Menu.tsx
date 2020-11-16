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
  IonNote,
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

const proyectPages: AppPage[] = [  
  {
    title: 'Autoridad Ambiental',
    url: '/page/AutoridadAmbiental',
    iosIcon: icons.eyeOutline,
    mdIcon: icons.eyeSharp
  },
  {
    title: 'Educación Ambiental',
    url: '/page/EducacionAmbiental',
    iosIcon: icons.schoolOutline,
    mdIcon: icons.schoolSharp
  },
  {
    title: 'Planificación y Ordenamiento Ambiental',
    url: '/page/PlanificacionOrdenamiento',
    iosIcon: icons.mapOutline,
    mdIcon: icons.mapSharp
  },
  {
    title: 'Fortalecimiento para la Gestión Ambiental',
    url: '/page/GestionAmbiental',
    iosIcon: icons.analyticsOutline,
    mdIcon: icons.analyticsSharp
  },
  {
    title: 'Administración del Recurso Hídrico',
    url: '/page/AdministracionHidrica',
    iosIcon: icons.waterOutline,
    mdIcon: icons.waterSharp
  },
  {
    title: 'Gestión del Recurso Forestal',
    url: '/page/GestionForestal',
    iosIcon: icons.leafOutline,
    mdIcon: icons.leafSharp
  },
  {
    title: 'Ecosistemas Estratégicos',
    url: '/page/EcosistemasEstrategicos',
    iosIcon: icons.bugOutline,
    mdIcon: icons.bugSharp
  },
  {
    title: 'Cambio Climático y Gestión del Riesgo',
    url: '/page/GestionRiesgo',
    iosIcon: icons.warningOutline,
    mdIcon: icons.warningSharp
  },
  {
    title: 'Negocios Verdes',
    url: '/page/NegociosVerdes',
    iosIcon: icons.storefrontOutline,
    mdIcon: icons.storefrontSharp
  },
  {
    title: 'Economía Circular',
    url: '/page/EconomiaCircular',
    iosIcon: icons.syncCircleOutline,
    mdIcon: icons.syncCircleSharp
  },
];

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

          </IonMenuToggle>
          <IonListHeader color="secondary">Proyectos</IonListHeader>
          {proyectPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
