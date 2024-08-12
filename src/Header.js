import React from "react";
import imageOmelette from "./images/image-omelette.jpeg";

export default function Headers(){
    return (
        <div className="header-section">
            <img src={imageOmelette} alt="omelette logo" className="header-logo"></img>
            <h1 className="header-title">Simple Omelette Recipe</h1>
            <p className="header-description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="header-preparation">
                <h3 className="preparation-main-title">Preparation time</h3>
                <ul className="preparation-summary">
                    <li className="preparation-item"><span className="cover"><span className="thick-title">Total: </span>Approximately 10 minutes</span></li>
                    <li className="preparation-item"><span className="cover"><span className="thick-title">Preparation: </span>5 minutes</span></li>
                    <li className="preparation-item"><span className="cover"><span className="thick-title">Cooking: </span>5 minutes</span></li>
                </ul>
            </div>
        </div>
    )
}