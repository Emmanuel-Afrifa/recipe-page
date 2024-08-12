import React from "react";

export default function Ingredient(){
    return (
        <div className="ingredients">
            <h2 className="ingredients-header section-header">Ingredients</h2>
            <ul>
                <li><span className="cover">2-3 large eggs</span></li>
                <li><span className="cover">Salt, to taste</span></li>
                <li><span className="cover">Pepper, to taste</span></li>
                <li><span className="cover">1 tablespoon of butter or oil</span></li>
                <li><span className="cover">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
            </ul>
            <div className="line"></div>
        </div>
    )
}