import React, { useState,useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router";

import './Home.css';
import * as _ from 'lodash';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';
import { SIGKILL } from 'constants';

const GET_CATEGORIES = gql`
query Query {
  getAllCategories {
    _id
    categoryName
  }
}
`;

console.log(GET_CATEGORIES);
const Category: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  function isselected(params:any) {
   
  }
  function DisplayCategories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    
    var count: number = 0;

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.getAllCategories.map(({ _id, categoryName }:any) => {
     
      return (
        <div key={_id}>
        
            <IonItem>
              <IonCheckbox slot='start' value={categoryName} onIonChange={e => setChecked(e.detail.checked)}></IonCheckbox>
              <IonLabel>{categoryName}{ isChecked ? count=count+1:'not'}{count==5 ? 'proceed':'select min 5'}</IonLabel>
              
              {console.log(count)}
            </IonItem>
           
            {/* <IonItem>
              <IonLabel>Checked: {JSON.stringify(isChecked)}</IonLabel>
              <IonCheckbox checked={isChecked} onIonChange={e => setChecked(e.detail.checked)} />
              { isChecked ? count=count+1:'not'}
              {console.log(count)}
            </IonItem> */}
          

          <br />
        </div>
      );
    });
  }
  // const result = Object.keys(data).map((key) => {
  //   return { [key]: data[key as keyof typeof data] };
  // })

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
          <IonCardHeader class='ion-padding'>Select 5 categories:</IonCardHeader>
          <IonCardContent class='ion-padding'>
          
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
      <DisplayCategories/>
      
                  
                </IonList>
              </IonRow>

            </IonGrid>
         
              </IonCardContent>
        </IonCard>
        <div className='ion-text-center'>
          <IonButton href='/Question'>Next</IonButton>
         
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Category;