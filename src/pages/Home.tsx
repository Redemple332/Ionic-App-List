import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useData } from '../hooks/useData';
import './Home.css';

const Home: React.FC = () => {
  const {data} = useData();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data.map((item: any, i) => (
            <IonItem key={i} routerLink={`home/details/${item.email}`}>
              <IonAvatar slot="start" >
                <IonImg src={item.picture.thumbnail}/>
              </IonAvatar>
              <IonLabel>
                {item.name.first} {item.name.last}
                <p>{item.email}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
