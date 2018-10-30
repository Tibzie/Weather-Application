import React from "react";

const Weather = props => (
	<div>
	 {
	 	props.city && <p className="weather-header"> Location:
	 		<span className="weather-info"> { props.city } </span>
	 	</p>
	 }
	 {
	 	props.temperature && <p className="weather-header"> Temperature:
	 		<span className="weather-info"> { props.temperature }&#186;	</span>
	 	</p>
	 }
	 {
	 	props.humidity && <p className="weather-header"> Humidity:
	 		<span className="weather-info"> { props.humidity } </span>
	 	</p>
	 }
	 {
	 	props.description && <p className="weather-header"> Conditions:
	 		<span className="weather-info"> { props.description } </span>
	 </p>
	 }
	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
	</div>
);

export default Weather;
