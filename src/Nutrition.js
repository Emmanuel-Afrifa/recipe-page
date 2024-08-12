import React from "react";

export default function Nutrition(){
    return (
        <div className="nutrition-section">
            <h2 className="nutrition-header section-header">Nutrition</h2>
            <p className="nutrition-description">
            The table below shows nutritional values per serving without the additional fillings.
            </p>
            {/* <div className="nutrition-item">Calories <span>277kcal</span></div>
            <div className="nutrition-item">Carbs <span>0g</span></div>
            <div className="nutrition-item">Protein <span>20g</span></div>
            <div className="nutrition-item">Fat <span>22g</span></div> */}
            {/* <span className="table-line"></span> */}
            <table>
                <tbody>
                    <tr>
                        <td>Calories</td>
                        <td><span>277kcal</span></td>
                    </tr>
                    
                    <tr>
                        <td>Carbs</td>
                        <td><span>0g</span></td>
                    </tr>
                    
                    <tr>
                        <td>Protein</td>
                        <td><span>20g</span></td>
                    </tr>
                    
                    <tr>
                        <td>Fat</td>
                        <td><span>22g</span></td>
                    </tr>
                </tbody>
            </table>  
        </div>
    )
}