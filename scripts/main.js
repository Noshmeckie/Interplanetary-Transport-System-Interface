function weight_convert() {
	let earth_weight = parseFloat(document.getElementById("earth_weight").value);
	let mars_weight_field = document.getElementById("mars_weight");
	mars_weight.innerText = earth_weight * 0.377 + " kg."
}

let timerId;

function timer() {
	let speed_field = document.getElementById("random_speed");
	speed_field.innerText = (Math.random() * 100 + 900).toFixed(2) + "km/h";

	let fuel_progress_bar = document.getElementById("fuel_progress_bar");
	let fuel_left = fuel_progress_bar.value;
	fuel_left = fuel_left - 5;
	fuel_progress_bar.value = fuel_left;
	if (fuel_left === 0) {
		document.getElementById("fuel_field").style.backgroundColor = "#E43F5A";
		document.getElementById("speed_field").style.backgroundColor = "#E43F5A";
		if (timerId !== null) {
			clearInterval(timerId);
		}
		speed_field.innerText = 0; 
		return;
	}

	let food_progress_bar = document.getElementById("food_progress_bar");
	let food_left = food_progress_bar.value;
	food_left = food_left - 5;
	food_progress_bar.value = food_left;
	if (food_left === 0) {
		// alert("We are running out of food!");
		if (timerId !== null) {
			clearInterval(timerId);
		}
		speed_field.innerText = 0;
		return;
	}

	let water_progress_bar = document.getElementById("water_progress_bar");
	let water_left = water_progress_bar.value;
	water_left = water_left - 5;
	water_progress_bar.value = water_left;
	if (water_left === 0) {
		// alert("We are running out of water!");
		if (timerId !== null) {
			clearInterval(timerId);
		}
		speed_field.innerText = 0;
		return;
	}
}

timerId = setInterval(timer, 2000);