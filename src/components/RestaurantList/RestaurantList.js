import React from "react";
import "./RestaurantList.css";
import RestaurantItem from "../Restaurant/RestaurantItem";

const RestaurantList = (props) => {
    const restaurantList = props.restaurants;
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
        <div className="restaurant-container">
            <div className="restaurant-title">{restaurantList.length} restaurants</div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant, index) =>
                    <RestaurantItem key={index} restaurant={restaurant} imageSizes={{ xsWidth, smallWidth, mediumWidth, largeWidth, xsHeight }} />
                )}
            </div>
        </div>
    )
}

export default RestaurantList;