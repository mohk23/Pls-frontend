import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router";
import './Home.css';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';

const Category: React.FC = () => {
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
      <IonItem>
        <IonSelect interface="popover" placeholder="Select a Category">
          <IonSelectOption value="apples">Growth</IonSelectOption>
          <IonSelectOption value="oranges">Stability</IonSelectOption>
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