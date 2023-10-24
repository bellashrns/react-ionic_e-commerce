import { IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { cartOutline, trashOutline } from 'ionicons/icons';
import { useContext, useRef } from 'react';
import ProductContext from '../data/product-context';

const Wishlist: React.FC = () => {

  const productsCtx = useContext(ProductContext);
  const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

  const removeHandler = (productId: number) => {
    productsCtx.removeFromWishlist(productId);
    slidingOptionRef.current?.closeOpened();
  }

  const addHandler = (productId: number) => {
    productsCtx.addToCart(productId, 1);
    slidingOptionRef.current?.closeOpened();
  }

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
          {productsCtx.wishlist.map(product => (
            <IonItemSliding key={product.id} ref={slidingOptionRef}>
              <IonItemOptions side='start'>
                <IonItemOption color='danger' onClick={removeHandler.bind(null, product.id)}>
                  <IonIcon slot='icon-only' icon={trashOutline} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem>
                <IonImg className='wishlistImage' src={product.img}></IonImg>
                <IonTitle>{product.title}</IonTitle>
              </IonItem>
              <IonItemOptions side='end'>
                <IonItemOption color='success' onClick={addHandler.bind(null, product.id)}>
                  <IonIcon slot='icon-only' icon={cartOutline} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Wishlist;
