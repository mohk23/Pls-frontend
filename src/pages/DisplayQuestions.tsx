import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonSlide, IonSlides, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import * as _ from 'lodash';
import { useRef } from "react";
import styles from "./Home.module.scss";
/* Theme variables */
import '../theme/variables.css';
import { airplaneSharp } from 'ionicons/icons';

const GET_QUESTIONS = gql` 
query GetAllPosts {
  getAllPosts {
    _id
    questionName
    option1
    option2
    option3
  }
}
`;

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 400
};

function DisplayQuestions() {

    const { loading, error, data } = useQuery(GET_QUESTIONS);
    const [selected, setSelected] = useState<string>('option1');
    const questions: any[] = [];
    const options: any[] = [];


    if (loading)
        return <IonSlide><p>Loading... {console.log("load")}</p></IonSlide>;
    if (error)
        return <p>error...{console.log("error")}</p>;


    return data.getAllPosts.map(({ _id, questionName, option1, option2, option3 }: any) => {
        return (

            <div>
                <div key={_id}>{questions.push({ questionName })}{options.push({ option1, option2, option3 })}</div>

                {console.log(questions)}
                {questions.map((value, index) => {
                    return (<div key={index}><IonItem>{value}</IonItem>
                        <IonRadioGroup>
                            {options.map((val, ind) => {
                                return (
                                    <IonItem key={ind}>
                                        <IonLabel>{val}</IonLabel>
                                        <IonRadio value={val} slot="start"></IonRadio>
                                    </IonItem>
                                )

                            })}
                        </IonRadioGroup>
                    </div>)
                })}


                
                <br />
            </div>

        );
    });

}



export default DisplayQuestions;
