import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import RegisterRestaurant from './components/RegisterRestaurant';
import RegisterUser from './components/RegisterUser';

class App extends React.Component {
  render() {
    return(
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          
          <Route path="/resReg" element={ <RegisterRestaurant /> } />
          <Route path="/userReg" element={ <RegisterUser /> } />
        </Routes>
      </div>
    );
  };
}

export default App;
