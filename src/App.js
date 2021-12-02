import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import RestaurantMenu from './components/RestaurantMenu';
import { useState, useEffect } from 'react';
import {UserAuthContext} from './Contexts'


const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

  const [cart, setCart]= useState([]);

  const addItemToCart = (item) => {
    setCart(prevState => [...prevState, item]);
  }

  const deleteItemFromCart = (item) => {
    setCart(cart.filter(items => items !== item))
  }

  const initialAuthData = {
    jwt: null,
    login: (newValueForJwt) => {
      const newAuthData = { ...userAuthData,
          jwt: newValueForJwt
        };
      window.localStorage.setItem('appAuthData', newValueForJwt);
      setUserAuthData(newAuthData);
    },
    logout: () => {
      window.localStorage.removeItem('appAuthData');
      setCart([]);
      setUserAuthData({...initialAuthData});
    }
  };

  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});

  useEffect(() => {
    if (jwtFromStorage != null) {
      userAuthData.login(jwtFromStorage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <UserAuthContext.Provider value={ userAuthData }>
    <div>
      <UserAuthContext.Consumer>
         {value => value.jwt ? <NavBar cart={cart} setCart={setCart} deleteItemFromCart={ deleteItemFromCart } logout/> : <NavBar register login />}
      </UserAuthContext.Consumer>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="userReg" element={ <RegisterUser /> } />
        <Route path="restaurant/:restaurantId" element={ <RestaurantMenu addItemToCart={ addItemToCart } /> } />
      </Routes>
    <Footer />
    </div>
    </UserAuthContext.Provider>
  );
};


export default App;
