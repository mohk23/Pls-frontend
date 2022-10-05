import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';
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

// export const SlideContainer: React.FC = () => {
//   const mySlides = useRef(null);
//   const obj = [{ slide: "one" }, { slide: "two" }, { slide: "three" }];

//   const handleSlideChange = async () => {
//     if(mySlides.current!=null){
//     const swiper = await mySlides.current.getSwiper();}
//     else{
//       console.log('not done')
//     }
//   };

//   /**
//    *
//    * @param direction
//    */
//   const onBtnClicked = async (direction: string) => {
//     if (mySlides.current!=null){
//     const swiper = await mySlides.current.getSwiper();
//     if (direction === "next") {
//       swiper.slideNext();
//     } else if (direction === "prev") {
//       swiper.slidePrev();
//     }
//   }
//   };

//   return (
//     <IonContent>
//       <IonSlides
//         options={slideOpts}
//         ref={mySlides}
//         onIonSlideDidChange={handleSlideChange}
//       >
//         {obj.map((item) => (
//           <IonSlide>{item.slide}</IonSlide>
//         ))}
//       </IonSlides>
//       <div style={{ textAlign: "center", paddingTop: 12 }}>
//         <IonButton
//           disabled={mySlides.current?.isBeginning()}
//           onClick={() => onBtnClicked("prev")}
//         >
//           PREV
//         </IonButton>
//         <IonButton
//           disabled={mySlides.current?.isEnd()}
//           onClick={() => onBtnClicked("next")}
//         >
//           NEXT
//         </IonButton>
//       </div>
//     </IonContent>
//   );
// };

// export default SlideContainer;


const Question: React.FC = () => {

  function DisplayQuestions() {
    const { loading, error, data } = useQuery(GET_QUESTIONS);
    const [selected, setSelected] = useState<string>('option1');
  

    if (loading) return <IonSlide><p>Loading... {console.log("load")}</p></IonSlide>;
    if (error) return <p>error...{console.log("error")}</p>;
     

    return data.getAllPosts.map(({ _id, questionName, option1, option2, option3 }: any) => (


        <div key={_id}>
        
        {console.log(questionName)}
        
        
        <IonItem> {questionName}</IonItem>
        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <br></br>
            <IonItem>
              <IonLabel>{option1}</IonLabel>
              <IonRadio value={option1} slot="start"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>{option2}</IonLabel>
              <IonRadio value={option2} slot="start"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>{option3}</IonLabel>
              <IonRadio value={option3} slot="start"></IonRadio>
            </IonItem>
          </IonRadioGroup>

<br />
        </div>
      
       
      
    ));
  }

 
  
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
            {/* <IonSlides class="ion-padding" options={slideOpts}> */}
          <DisplayQuestions/>         
            {/* </IonSlides> */}
          
          </IonCardContent>
        </IonCard>

        


      </IonContent>
    </IonPage>
  );
};

export default Question;
