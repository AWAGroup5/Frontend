import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import RestaurantMenu from './components/RestaurantMenu';
import { useState, useEffect } from 'react';
import {UserAuthContext} from './Contexts'
import History from './components/History';


const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

  const [cart, setCart]= useState([]);

  const addItemToCart = (item) => {
    let result = cart.findIndex((element) => {
      if (element.idproduct === item.idproduct) {
        return true
      } else return false
    })
    if (result !== -1) {
      let newCart = [...cart];
      newCart[result].quantity += 1
      setCart(newCart);
    }
    else {
      setCart(prevState => [...prevState, item]);
    }
  }

  const deleteItemFromCart = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      let newCart = [...cart];
      setCart(newCart)
    } else
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
         {value => value.jwt ? <NavBar History cart={cart} setCart={setCart} deleteItemFromCart={ deleteItemFromCart } logout/> : <NavBar register login />}
      </UserAuthContext.Consumer>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="userReg" element={ <RegisterUser /> } />
        <Route path="restaurant/:restaurantId" element={ <RestaurantMenu addItemToCart={ addItemToCart } /> } />
        <Route path="history" element={ <History /> } />
      </Routes>
    <Footer />
    </div>
    </UserAuthContext.Provider>
  );
};


export default App;
