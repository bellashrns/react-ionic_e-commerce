import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { addOutline, cartOutline, removeOutline, trashOutline } from 'ionicons/icons';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../data/product-context';

const Cart: React.FC = () => {

  const productsCtx = useContext(ProductContext);

  const increment = (productId: number) => {
    productsCtx.increment(productId);
  }

  const decrement = (productId: number) => {
    productsCtx.decrement(productId);
  }

  const checkoutHandler = () => {
    var code = '';

    for (var j = 0; j < 3; j++) {
      code += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    for (var i = 0; i < 3; i++) {
      code += Math.floor(Math.random() * 10);
    }

    productsCtx.addTransaction(code);

    productsCtx.cart.map(product => (
      productsCtx.removeFromCart(product.id)
    ));

    console.log(productsCtx.transactions);
  }

  var total = 0;
  var subtotal = 0;
  
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
      <IonContent>
      <IonList>
          {productsCtx.cart.map(product => (
            <IonCard key={product.id}>
              <IonGrid>
                <IonRow>
                  <IonCol size='3'>
                    <IonImg className='cartImage' src={product.img}></IonImg>
                  </IonCol>
                  <IonCol className='cartProduct' size='5'>
                    <IonCardTitle>{product.title}</IonCardTitle>
                    <IonCardSubtitle>Rp {product.price}</IonCardSubtitle>
                  </IonCol>
                  <IonCol className='cartProduct' size='4'>
                    <IonRow>
                      <IonButton size='small' color={'light'} onClick={decrement.bind(null, product.id)}>
                          <IonIcon icon={removeOutline} />
                      </IonButton>
                      <IonText className='cartQty'>{product.qty}</IonText>
                      <IonButton size='small' color={'light'} onClick={increment.bind(null, product.id)}>
                          <IonIcon icon={addOutline} />
                      </IonButton>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          ))}
        </IonList>

        <IonCard>
          <IonCardContent>
            <IonGrid>
              {productsCtx.cart.map(product => (
                total = product.price * product.qty,
                subtotal += total,
                <IonRow>
                  <IonCol>
                    <IonRow>
                      <IonText>{product.title} ({product.qty}x)</IonText>
                    </IonRow>
                  </IonCol>
                  <IonCol size='3'>
                    <IonRow>
                      <IonText>: Rp {total}</IonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
            <IonItem className='border' color={'primary'} />
            <IonGrid>
              <IonRow>
                <IonCol size='4'></IonCol>
                <IonCol size='6'>
                  <IonRow>
                    <IonText>Total: Rp {subtotal}</IonText>
                  </IonRow>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
              <IonRow>
                <IonCol></IonCol>
                <IonCol size='5'>
                  <IonButton onClick={checkoutHandler}>
                    <IonText>Checkout</IonText>
                  </IonButton>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
