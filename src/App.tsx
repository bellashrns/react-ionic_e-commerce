import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar, ToggleCustomEvent, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Wishlist from './pages/Wishlist';
import History from './pages/History';
import Profile from './pages/Profile';

import ProductsContextProvider from './data/ProductsContextProvider';
import { cartOutline, toggle } from 'ionicons/icons';
import Cart from './pages/Cart';
import { useContext, useEffect, useState } from 'react';
import ProductContext from './data/product-context';

setupIonicReact();

const App: React.FC = () => {

  const [themeToggle, setThemeToggle] = useState(false);
  const [totalQty, setTotalQty] = useState<number>(0);

  const toggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkTheme(ev.detail.checked);
  };

  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    initializeDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
  }, []);

  return ( 
    <IonApp>
      <IonReactRouter>
        <IonMenu color='primary' contentId='main'>
            <IonHeader>
              <IonToolbar>
                  <IonTitle>B-Shop</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonList>
                <IonMenuToggle>
                  <IonItem button routerLink='/wishlist'>
                    <IonIcon />
                    <IonLabel>
                      Wishlist
                    </IonLabel>
                  </IonItem>

                  <IonItem button routerLink='/history'>
                    <IonIcon />
                    <IonLabel>
                      History
                    </IonLabel>
                  </IonItem>

                  <IonItem button routerLink='/profile'>
                    <IonIcon />
                    <IonLabel>
                      Profile
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonIcon />
                    <IonLabel>
                      Dark Mode
                    </IonLabel>
                    <IonToggle slot='end' name='darkMode' checked={themeToggle} onIonChange={toggleChange} />
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
        </IonMenu>
        <IonMenuToggle menu='main' autoHide={false}>
          <IonHeader>
            <IonToolbar color={'primary'}>
              <IonButtons id='main' slot="start">
                  <IonMenuButton />
              </IonButtons>
              <IonTitle>B-Shop</IonTitle>
              <IonButtons slot='end'>
                <IonItem color={'primary'} routerLink='/cart'>
                  <IonBadge slot="start">{totalQty}</IonBadge>
                  <IonIcon icon={cartOutline} />
                </IonItem>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
        </IonMenuToggle>
        <ProductsContextProvider>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/wishlist">
              <Wishlist />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </IonRouterOutlet>
        </ProductsContextProvider>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
