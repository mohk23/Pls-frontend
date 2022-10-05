import { IonContent, IonHeader,IonCard, IonPage,IonCardHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonCardContent, IonText, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import styles from "./Home.module.scss";
import Question from './Question';
import Edit from './Edit'
import Admin from './admin';
/* Theme variables */
import '../theme/variables.css';

const Home: React.FC = () => {
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
        <IonContent>
  <IonCard>
    <IonCardHeader className={styles.profileHeader}> Home Page </IonCardHeader>
    
  </IonCard>
  <IonGrid>
    <IonRow className="ion-justify-content-center">
    <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
      <IonCard className={styles.profileHeader}>
        <IonCardContent>
          <IonRow>
            <IonCol size='4'>
            <img src="/assets/avatar.png" alt="avatar" />

            </IonCol>
            <IonCol size='8'>
              <IonRow className={styles.profileInfo}>
                <IonCol size='12'>
                <IonText color="dark">
                  <p>Welcome Username!</p>

                </IonText>
                <IonText color="medium">
                  <b>Age:</b> 22
                  <br/>
                  <b>Gender:</b> M
                </IonText>

                </IonCol>
                <IonCol>
                <IonButton href='/Edit'>Edit Details</IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
</IonContent>

      
      </IonContent>
      <IonButton href='/Category'>Take Test</IonButton>
      <IonButton href='/Admin'>Admin</IonButton>
    </IonPage>
  );
};

export default Home;
