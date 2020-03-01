import React from "react";
import "./RestaurantList.css";

const RestaurantList = (props) => {
    const restaurantList = props.restaurants;
    return (
        <div className="restaurant-container">
            <div className="restaurant-title">{restaurantList.length} restaurants</div>
            <div className="restaurant-list">
                {restaurantList.map(restaurant =>
                    <div key={restaurant.id} className="restaurant-item">
                        <img src={restaurant.image} alt="" />
                        <div className="restaurant-name">{restaurant.name}</div>
                        <div className="restaurant-tags">
                            {restaurant.tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}
                            <span>£</span>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default RestaurantList;