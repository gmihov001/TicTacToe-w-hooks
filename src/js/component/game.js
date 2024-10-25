import PropTypes from "prop-types";
import React, { useState } from "react";


//create your first component
const Game = () => {
    const [squareValues, setSquareValues] = useState(["", "", "", "", "", "", "", "", ""]);
    const currentPlayer = "X";

    const updateNextMove = (index) => {
        let updatedSquareValues = squareValues.map((square, ind) => ind == index ? currentPlayer : square);
        setSquareValues(updatedSquareValues);
    } 

	return (
		<div className="container">
            <div className="row">
                <div 
                    className="col-4 border"
                    onClick={() => updateNextMove(0)}    
                >
                    {squareValues[0]}
                </div>
                
                <div className="col-4 border"
                onClick={() => updateNextMove(1)}
                >{squareValues[1]}</div>

                <div className="col-4 border"
                onClick={() => updateNextMove(2)}
                >{squareValues[2]}</div>
            </div>
            <div className="row">
                <div
                onClick={() => updateNextMove(3)} 
                className="col-4 border">{squareValues[3]}</div>
                <div 
                onClick={() => updateNextMove(4)}
                className="col-4 border">{squareValues[4]}</div>
                <div 
                onClick={() => updateNextMove(5)}
                className="col-4 border">{squareValues[5]}</div>
            </div>
            <div className="row">
                <div 
                onClick={() => updateNextMove(6)}
                className="col-4 border">{squareValues[6]}</div>
                <div 
                onClick={() => updateNextMove(7)}
                className="col-4 border">{squareValues[7]}</div>
                <div 
                onClick={() => updateNextMove(8)}
                className="col-4 border">{squareValues[8]}</div>
            </div>
		</div>
	);
};

export default Game;
