import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Manager from './components/Manager';


class App extends React.Component {
  render() {
    return(
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="restaurant" element={ <Manager /> } />
        </Routes>
      </div>
    );
  };
}

export default App;
