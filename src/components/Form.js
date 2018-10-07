import React from "react";

const Form = props => (
	<div>
		<div class="inner-container">
			<form onSubmit={props.getWeather}>
				<div class="row">City: <input type="text" name="city" class="city" placeholder="enter city..."/></div>
				<div class="row">Country: <input type="text" name="country" class="country" placeholder="enter country..."/></div>
				<div class="row"><button>Get Weather</button></div>
			</form>
		</div>
	</div>
);

export default Form;