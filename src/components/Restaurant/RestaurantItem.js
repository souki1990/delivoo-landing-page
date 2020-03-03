import React from "react";
import "./Restaurant.css";

const RestaurantItem = (props) => {
    const restaurant = props.restaurant;
    const { xsWidth, smallWidth, mediumWidth, largeWidth, xsHeight } = props.imageSizes;

    const getImageURL = (imageUrl, width, height) => {
        let url = new URL(imageUrl);
        url.searchParams.set("width", Number(width.split("px")[0]));
        if (height) {
            url.searchParams.set("height", Number(height.split("px")[0]));
        }
        return url.toString();
    }

    return (
        <div key={restaurant.id} className="restaurant-item">
            <picture>
                <source media="(min-width: 320px) and (max-width: 640px)" srcSet={getImageURL(restaurant.image, xsWidth, xsHeight)} />
                <source media="(min-width: 640px) and (max-width: 1024px)" srcSet={getImageURL(restaurant.image, smallWidth)} />
                <source media="(min-width: 1024px) and (max-width: 1280px)" srcSet={getImageURL(restaurant.image, mediumWidth)} />
                <source media="(min-width: 1280px)" srcSet={getImageURL(restaurant.image, largeWidth)} />
                <img src={restaurant.image} alt={restaurant.name}></img>
            </picture>

            <div className="restaurant-name">{restaurant.name}</div>
            {
                restaurant.tags.length > 0 && <div className="restaurant-tags">
                    {restaurant.tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}
                    <span>£</span>
                </div>
            }
        </div>
    )

}
export default RestaurantItem;