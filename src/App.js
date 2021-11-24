import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Manager from './components/Manager';
import RegisterRestaurant from './components/RegisterRestaurant';
import RegisterUser from './components/RegisterUser';
import AddProduct from './components/AddProduct';
import RegisterManager from './components/RegisterManager';
import RestaurantMenu from './components/RestaurantMenu';

class App extends React.Component {
  render() {
    return(
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="manReg" element={ <RegisterManager /> } />
          <Route path="userReg" element={ <RegisterUser /> } />
          <Route path="restaurant" element={ <Manager /> } />
          <Route path="restaurant/newproduct" element={ <AddProduct /> } />
          <Route path="restaurantMenu" element={ <RestaurantMenu /> } />
        </Routes>
      </div>
    );
  };
}

export default App;
