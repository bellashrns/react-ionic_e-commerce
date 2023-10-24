import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonList, IonMenuButton, IonMenuToggle, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { cartOutline } from 'ionicons/icons';
import ProductContext, { Transaction } from '../data/product-context';
import React, { useContext, useState } from 'react';


const History: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const productsCtx = useContext(ProductContext);

  var total = 0;

  const totalPrice = () => {
    productsCtx.transactions.map(transaction => (
      transaction.products.map(product => (
        total += product.price * product.qty
      ))
    ));

    return total;
  }

  const sortCode = () => {
    var temp = productsCtx.transactions;
    var temp2 = productsCtx.transactions;

    for (var i = 0; i < temp.length; i++) {
      for (var j = 0; j < temp.length; j++) {
        if (temp[i].code < temp[j].code) {
          temp2[i] = temp[j];
          temp2[j] = temp[i];
        }
      }
    }

  }

  return (
    <React.Fragment>
      <IonModal isOpen={showModal}>
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonButtons id='main' slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>{selectedTransaction?.code}</IonTitle>
            <IonButtons id='main' slot='end'>
              <IonMenuToggle />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton className='BtnTop' onClick={() => setShowModal(false)}>
            Back
            </IonButton>
          {selectedTransaction?.products.map(product => (
            <IonCard key={product.id}>
              <IonGrid>
                <IonRow>
                  <IonCol size='4'>
                    <IonImg src={product.img}></IonImg>
                  </IonCol>
                  <IonCol className='detailProduct'>
                    <IonCardTitle>{product.title} ({product.qty}x)</IonCardTitle>
                    <IonCardSubtitle>Rp {product.price * product.qty}</IonCardSubtitle> 
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          ))}
          <IonCard>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonCardTitle className='ion-text-center'>Total: Rp {totalPrice()}</IonCardTitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
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
        <IonContent>
          <IonButton color={'primary'} className='BtnTop'>
            <IonText>Filter</IonText>
          </IonButton>
          <IonList>
            {productsCtx.transactions.map(transaction => (
              <IonCard key={transaction.code}>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonText>Code: {transaction.code}</IonText>
                    </IonRow>
                    <IonRow>
                      <IonText>Total: {total}</IonText>
                    </IonRow>
                    <IonRow>
                      <IonCol></IonCol>
                      <IonCol>
                        <IonButton color={'primary'} onClick={() => {setSelectedTransaction(transaction); setShowModal(true)}}>
                          <IonText>Detail</IonText>
                        </IonButton>
                      </IonCol>
                      <IonCol></IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default History;
