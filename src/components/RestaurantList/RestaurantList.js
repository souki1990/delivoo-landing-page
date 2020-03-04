import React from "react";
import "./RestaurantList.css";
import RestaurantItem from "../Restaurant/RestaurantItem";

const RestaurantList = (props) => {
    const restaurantList = props.restaurants;

    return (
        <div className="restaurant-container">
            <div className="restaurant-title">{restaurantList.length} restaurants</div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant, index) =>
                    <RestaurantItem key={index} restaurant={restaurant} />
                )}
            </div>
        </div>
    )
}

export default RestaurantList;