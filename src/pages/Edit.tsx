import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';

const Edit: React.FC = () => {
     const [text, setText] = useState<string>();
   const [number, setNumber] = useState<number>();
   const [gender, setGender] = useState<string>();
    return(

<IonPage>
    
<IonContent class='ion-text-center' className={styles.profileHeader}>
<IonList class='ion-text-center ion-margin'>
 
  <IonItemDivider>Name</IonItemDivider>
  <IonItem>
    <IonInput value={text} placeholder="Enter Name" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
  </IonItem>

  <IonItemDivider>Age</IonItemDivider>
  <IonItem>
    <IonInput type="number" value={number} placeholder="Enter Age" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
  </IonItem>

  <IonItemDivider>Gender</IonItemDivider>
  <IonItem >
    <IonLabel>Gender</IonLabel>
    <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
      <IonSelectOption value="female">Female</IonSelectOption>
      <IonSelectOption value="male">Male</IonSelectOption>
    </IonSelect>
  </IonItem>
</IonList>
<IonButton>Submit</IonButton>
</IonContent>
    
</IonPage>
    );
};

export default Edit;