import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { useData } from '../hooks/useData';
import './Home.css';

interface UserDetailPageProps extends RouteComponentProps<{
  email: string;
}> {}
 

const Details: React.FC<UserDetailPageProps> = ({match}) => {

  const {getUserByEmail} = useData()
  const [user, setUser] = useState(null as any)
  useIonViewWillEnter( async () => {
    const user = await getUserByEmail(match.params.email)
    setUser(user)
  })

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/home'></IonBackButton>
            </IonButtons>
          <IonTitle>{user?.email}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              {user?.name.first} {user?.name.last}
            </IonCardTitle>
            <IonCardContent>
                <img src={user?.picture.large} />
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Details;
