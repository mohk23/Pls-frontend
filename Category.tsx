import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router";
import './Home.css';
import * as _ from 'lodash';
import data from './api.json';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';
import { SIGKILL } from 'constants';

const Category: React.FC = () => {
  const result = Object.keys(data).map((key) => {
    return { [key]: data[key as keyof typeof data] };
  })

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
      <IonContent fullscreen class='ion-padding'>

        <IonCard>
          <IonCardHeader>


            <IonGrid>

              <IonRow>
                <IonList>
                  {/* <IonItem>
            {_.get(data,'data.getAllCategories[0].questionslist[0].questionName')}
            </IonItem>
            <IonItem>
              {console.log()}
            <div>
                {
                
                  result.map((skill) => {
                    return (
                      <div>
                        {skill.categoryName}
                        {console.log(skill)}

                      </div>
                    );
                  })
                } 
                
                
                
            </div>
            </IonItem>
           {result.map((item ,index) => (
            <IonItem key={index}>
              <IonLabel>
                <h1>{JSON.stringify(item)}{console.log("hey "+item.getAllCategories)}</h1>
              </IonLabel>
            </IonItem>
          ))} */}
                  <IonItem>
                    {console.log(_.get(data, 'data.getAllCategories[0].questionslist'))}
                    <IonSelect interface="popover" placeholder="Select a Category">
                      <IonSelectOption value={_.get(data, 'data.getAllCategories[0].categoryName')}>{_.get(data, 'data.getAllCategories[0].categoryName')}</IonSelectOption>
                      <IonSelectOption value={_.get(data, 'data.getAllCategories[1].categoryName')}>{_.get(data, 'data.getAllCategories[1].categoryName')}</IonSelectOption>
                      <IonSelectOption value="bananas">Security</IonSelectOption>
                      <IonSelectOption value="bananas">Relationships</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonList>
              </IonRow>

            </IonGrid>
          </IonCardHeader>
        </IonCard>
        <div className='ion-text-center'>
          <IonButton href='/Question'>Next</IonButton>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default Category;