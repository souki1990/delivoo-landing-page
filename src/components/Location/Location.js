
import React from "react";
import "./Location.css";

const Location = (props) => {
    return (
        <div className="location-header">
            <div className="location-group">
                <div className="location-title">Location</div>
                <div className="location">{props.location}</div>
            </div>
            <button>Change Location</button>
        </div>)
}

export default Location;