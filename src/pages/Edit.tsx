import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router";
import './Home.css';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';

const Edit: React.FC = () => {
   const [text, setText] = useState<string>('User');
   const [number, setNumber] = useState<number>(20);
   const [gender, setGender] = useState<string>();
   const [showToast1, setShowToast1] = useState(false);
   
    return(

<IonPage>
    
<IonContent class='ion-text-center'>
<IonList class='ion-text-center ion-margin' className={styles.editlist}>
 
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
<IonButton onClick={() => setShowToast1(true)} >Submit</IonButton>
<IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your details have been saved."
        duration={200}
      />
</IonContent>
</IonPage>
    );
};

export default Edit;
// routerLink={{
//   pathname: "/home",
//   state: {
//     text: "List 1",
//     number: 5
//   }
// }}