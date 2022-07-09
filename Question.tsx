import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import * as _ from 'lodash';
import data from './api.json';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';
import { airplaneSharp } from 'ionicons/icons';

const Question: React.FC = () => {
  const [selected, setSelected] = useState<string>('biff');
  const [items, setItems] = useState([{ id: 0, value: 'Question 1' }, { id: 1, value: 'Question 2' }]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
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
            <IonCardHeader  >
              {items.map(item => {
                return (
                  <IonCardHeader key={item.id}>
                    <IonLabel>{item.value}</IonLabel>
                  </IonCardHeader>
                )
              })}
            </IonCardHeader>




            

            <IonList>

              <IonItem> {_.get(data, 'data.getAllCategories[0].questionslist[2].questionName')}</IonItem>
              <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                <br></br>
                <IonItem>
                  <IonLabel> {_.get(data,'data.getAllCategories[0].questionslist[2].option1')}</IonLabel>
                  <IonRadio value="Option A" slot="start"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>{_.get(data,'data.getAllCategories[0].questionslist[2].option2')}</IonLabel>
                  <IonRadio value="Option B" slot="start"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>{_.get(data,'data.getAllCategories[0].questionslist[2].option3')}</IonLabel>
                  <IonRadio value="Option C" slot="start"></IonRadio>
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
