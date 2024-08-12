import React from "react";

export default function Instructions(){
    return (
        <div className="instruction-section">
            <h2 className="instructions-header section-header">Instructions</h2>
            <ol>
                <li className="instructions-item"><span className="cover"><span className="thick-title">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                <li className="instructions-item"><span className="cover"><span className="thick-title">Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                <li className="instructions-item"><span className="cover"><span className="thick-title">Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                <li className="instructions-item"><span className="cover"><span className="thick-title">Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                <li className="instructions-item"><span className="cover"><span className="thick-title">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                <li className="instructions-item"><span className="cover"><span className="thick-title"> Enjoy: </span>Serve hot, with additional salt and pepper if needed.</span></li>
            </ol>
            <div className="line"></div>
        </div>
    )
}