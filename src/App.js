import React from "react";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Location from "./components/Location/Location";
import NavBar from "./components/NavBar/NavBar";
import restaurants from "./data/restaurants";
import "./App.css";
import ImageSizeContext from "./context/ImageSizeContext";

function App() {
  const xsWidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--img-width-xs');
  const smallWidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--img-width-sm');
  const mediumWidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--img-width-md');
  const largeWidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--img-width-l');
  const xsHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--img-height-xs');

  return (
    <div className="App">
      <header>
        <NavBar />
        <Location location={restaurants.neighborhood} />
      </header>
      <ImageSizeContext.Provider value={{ xsWidth, smallWidth, mediumWidth, largeWidth, xsHeight }}>
        <RestaurantList restaurants={restaurants.restaurants} />
      </ImageSizeContext.Provider>
    </div>
  );
}

export default App;
