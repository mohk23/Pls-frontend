import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';

const Question: React.FC = () => {
  const [selected, setSelected] = useState<string>('biff');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PSL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PSL</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonCardHeader>
              Question 1
            </IonCardHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas arcu eu velit ullamcorper egestas. Pellentesque vel felis imperdiet, consectetur quam a, pellentesque nisi. Cras sagittis turpis a consequat elementum. Aliquam egestas pharetra convallis. Suspendisse scelerisque id ipsum quis commodo. Morbi tristique leo vel elit mattis consequat. Donec vestibulum mi tristique, porttitor lacus eget, posuere lectus. Phasellus eu est et dui egestas fringilla eget id nunc. Proin fringilla turpis sit amet libero feugiat, id varius dolor ultrices. Fusce vel ante id nibh commodo porta at vestibulum diam. Aenean lacinia sodales efficitur.
            <IonList>

              <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                <br></br>
                <IonItem>
                  <IonLabel>Option A</IonLabel>
                  <IonRadio value="Option A" slot="start"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>Option B</IonLabel>
                  <IonRadio value="Option B" slot="start"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>Option C</IonLabel>
                  <IonRadio value="Option C" slot="start"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>Option D</IonLabel>
                  <IonRadio value="Option D" slot="start"></IonRadio>
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonButton href='/Question' className={styles.basicbutton}>Next</IonButton>
        

      </IonContent>
    </IonPage>
  );
};

export default Question;
