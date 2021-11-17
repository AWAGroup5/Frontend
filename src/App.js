import RestaurantMenuPage from './components/RestaurantMenuPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartDropDown from './components/CartDropDown';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/cartdropdown" element = { <CartDropDown/> } />
        </Routes>
          <RestaurantMenuPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
