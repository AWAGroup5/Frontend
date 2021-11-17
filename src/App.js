import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Manager from './components/Manager';
import RegisterRestaurant from './components/RegisterRestaurant';
import RegisterUser from './components/RegisterUser';
import AddProduct from './components/AddProduct';

class App extends React.Component {
  render() {
    return(
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="resReg" element={ <RegisterRestaurant /> } />
          <Route path="userReg" element={ <RegisterUser /> } />
          <Route path="restaurant" element={ <Manager /> } />
          <Route path="restaurant/newproduct" element={ <AddProduct /> } />
        </Routes>
      </div>
    );
  };
}

export default App;
