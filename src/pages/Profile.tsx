import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonMenuToggle, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { cartOutline, chevronBackOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons id='main' slot="start">
              <IonMenuButton />
          </IonButtons>
          <IonTitle>B-Shop</IonTitle>
          <IonButtons id='main' slot='end'>
            <IonMenuToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'tertiary'}>
        <IonItem routerLink='/home'>
          <IonIcon icon={chevronBackOutline} />
          <IonLabel>Back</IonLabel>
        </IonItem>
        <IonCard className='profileCard'>
          <IonCardContent>
            <IonImg className='profilePic' src='./img/profile.jpg' />
            <IonCardTitle>Bella Saharani Sopyan</IonCardTitle>
            <IonCardSubtitle>00000064581</IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
