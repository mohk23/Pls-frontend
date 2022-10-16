import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router";
import AddC from './AdminPages/AddC';
import './Home.css';
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';


const CREATE_QUES = gql`
mutation Mutation($post: QuestionInput) {
  createPost(post: $post) {
    questionName
    option1
    option2
    option3
    category
    _id
  }
  
} 
`;






const Admin: React.FC = () => {
const [text, setText] = useState<string>('Enter Question');
const [Category, setCategory] = useState<string>('Enter Category');
const [opt1, setopt1] = useState<string>('Enter Option 1');
const [opt2, setopt2] = useState<string>('Enter Option 2');
const [opt3, setopt3] = useState<string>('Enter Option 3');
const [number, setNumber] = useState<number>();
const [showToast1, setShowToast1] = useState(false);
const [addQues, { data, loading, error }] = useMutation(CREATE_QUES);
  function AddQuestion( text:string,Category:string,opt1:string,opt2:string,opt3:string)  {
    
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const{data : UserData} = await addQues({ variables: { type: text,Category,opt1,opt2,opt3 } });
            {console.log(UserData);} 
          }}
        >
         
          
        </form>
      </div>
    );
  }
  function checkval(value:any) {
    if(value == "AddC")
      return 
      else if (value == "AddQ")
      return AddQuestion(text,Category,opt1,opt2,opt3);
      else if (value == "DelQ")
      return
      else if (value == "UpdateQ")
      return
    return 0
  }
  console.log(text,Category,opt1,opt2,opt3)
    return(
        <IonPage>
          <IonContent>

              <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>PSL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonItemDivider>Add Question</IonItemDivider>
          <IonItem>
          <IonSelect interface="popover" placeholder="Select Action">
          <IonSelectOption value="AddC">Add Category</IonSelectOption>
          <IonSelectOption value="AddQ">Add Question</IonSelectOption>
          <IonSelectOption value="DelQ">Delete Question</IonSelectOption>
          <IonSelectOption value="UpdateQ">Update Question</IonSelectOption>
        </IonSelect>
        </IonItem>
        <IonItem>
          <IonButton >Proceed</IonButton>
        </IonItem>
        <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonItem>
            <IonInput value={opt1} placeholder="Enter Input" onIonChange={e => setopt1(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonItem>
            <IonInput value={Category} placeholder="Enter Category" onIonChange={e => setCategory(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonItem>
            <IonInput value={opt2} placeholder="Enter Input" onIonChange={e => setopt2(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonItem>
            <IonInput value={opt3} placeholder="Enter Input" onIonChange={e => setopt3(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>

        <IonButton onClick={() => {return AddQuestion(text,Category,opt1,opt2,opt3);} }>Submit</IonButton>
        
<IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Changes made."
        duration={200}
        />
        </IonCol>
        </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>Delete Question</IonItemDivider>
              <IonItem>
              <IonInput type="number" value={number} placeholder="Enter Question Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton onClick={() => setShowToast1(true)}>Submit</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>Update Question</IonItemDivider>
              <IonInput type="number" value={number} placeholder="Enter Question Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton onClick={() => setShowToast1(true)}>Submit</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <input></input>
            </IonCol>
          </IonRow>
      </IonGrid>
        </IonContent>
        </IonPage>

    );
};
export default Admin;