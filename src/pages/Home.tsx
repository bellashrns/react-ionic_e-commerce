import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { addOutline, cartOutline, starOutline } from 'ionicons/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useContext, useEffect } from 'react';
import ProductContext from '../data/product-context';
import React from 'react';

const Home: React.FC = () => {

  const slides = [
    {
      title: 'Slide 1',
      img: './img/slides/slide1.jpeg'
    },
    {
      title: 'Slide 2',
      img: './img/slides/slide2.jpeg'
    },
    {
      title: 'Slide 3',
      img: './img/slides/slide3.jpeg'
    },
    {
      title: 'Slide 4',
      img: './img/slides/slide4.jpeg'
    },
    {
      title: 'Slide 5',
      img: './img/slides/slide5.jpeg'
    }
  ]

  const productsCtx = useContext(ProductContext);

  const addToWishlist = (productId: number) => {
    productsCtx.addToWishlist(productId);
    console.log('Added to Wishlist');
  }

  const addToCart = (productId: number) => {
    productsCtx.addToCart(productId, 1);
    console.log('Added to Cart');
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
      <IonContent color={'tertiary'}>
        <Swiper
          pagination={{
          dynamicBullets: true,
         }}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
         modules={[Pagination, Autoplay]}
         >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <IonImg src={slide.img}></IonImg>
            </SwiperSlide>
          ))}
        </Swiper>
        <IonGrid>
          <IonRow>
              {productsCtx.products.map(product => (
                <IonCol size='4'>
                    <IonCard className='product' key={product.id}>
                        <IonImg className='productImage' src={product.img}></IonImg>
                        <IonCardTitle className='productTitle'>{product.title}</IonCardTitle>
                        <IonCardSubtitle className='productSubtitle'>{product.price}</IonCardSubtitle>
                        <IonRow>
                          <IonCol>
                            <IonButtons
                              onClick={addToWishlist.bind(null, product.id)}>
                              <IonIcon size='small' icon={starOutline} />
                            </IonButtons>
                          </IonCol>
                          <IonCol></IonCol>
                          <IonCol>
                            <IonButtons onClick={addToCart.bind(null, product.id)}>

                              <IonIcon size='small' icon={addOutline} />
                            </IonButtons>
                          </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
