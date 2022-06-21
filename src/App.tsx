import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonBackButton, IonProgressBar, IonContent, IonList, IonHeader, IonSelect,IonSelectOption, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonItemDivider, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {arrowBackOutline} from "ionicons/icons";
import Home from './pages/Home';
import styles from "./Home.module.scss";
import Question from './pages/Question';
import Edit from './pages/Edit';

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

setupIonicReact();

const App: React.FC = () => /* const [text, setText] = useState<string>();*/ /* const [number, setNumber] = useState<number>();*/ /* const [gender, setGender] = useState<string>();*/ {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PSL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonApp>
        {/* <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br /> */}
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/Question">
              <Question />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/Edit">
              <Edit />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>


    </IonPage>
  );
};
 

export default App;

// <IonContent class='ion-text-center'>
// <IonList class='ion-text-center ion-margin'>
 
//   <IonItemDivider>Name</IonItemDivider>
//   <IonItem>
//     <IonInput value={text} placeholder="Enter Name" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
//   </IonItem>

//   <IonItemDivider>Age</IonItemDivider>
//   <IonItem>
//     <IonInput type="number" value={number} placeholder="Enter Age" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
//   </IonItem>

//   <IonItemDivider>Gender</IonItemDivider>
//   <IonItem >
//     <IonLabel>Gender</IonLabel>
//     <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
//       <IonSelectOption value="female">Female</IonSelectOption>
//       <IonSelectOption value="male">Male</IonSelectOption>
//     </IonSelect>
//   </IonItem>
// </IonList>
// <IonButton>Submit</IonButton>
// </IonContent>