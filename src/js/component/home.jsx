import React from "react";
import Luces from "./luces.jsx";
import "./luces.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Luces />
		</div>
	);
};

export default Home;
