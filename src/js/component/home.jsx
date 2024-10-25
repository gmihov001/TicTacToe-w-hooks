import React from "react";
import Game from "./game.js";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Tic Tac Toe in ReactJS!</h1>
			<Game />
		
		</div>
	);
};

export default Home;
