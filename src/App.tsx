import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import { TramiteWrapper } from './components/TramiteWrapper';
import MenuTramites from './pages/MenuTramites'
import React, { useEffect } from "react";
import { Plugins, Capacitor } from "@capacitor/core";
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Proyecto } from './components/Proyecto';

const App: React.FC = () => {

  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", (e) => {
        if (window.location.pathname === "/") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Salir?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/home") {
           // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Salir?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } 
      });
    }
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact/>
            <Route path="/tramites" component={MenuTramites} exact/>
            <Route path="/proyectos" component={Proyectos} exact/>
            <Route path="/page/:name" component={Page} exact />
            <Route path="/tramite/:id" component={TramiteWrapper} exact />
            <Route path="/proyecto/:id" component={Proyecto} exact /> 
            <Redirect from="/" to="/home" exact />
          </IonRouterOutlet>          
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
