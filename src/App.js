import React from 'react';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Location from "./components/Location/Location";
import NavBar from "./components/NavBar/NavBar";
import restaurants from './data/restaurants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Location location={restaurants.neighborhood} />
      </header>
      <RestaurantList restaurants={restaurants.restaurants} />
    </div>
  );
}

export default App;
