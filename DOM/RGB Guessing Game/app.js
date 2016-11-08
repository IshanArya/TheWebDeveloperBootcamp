window.onload = function() {
	var colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255, 0, 255)"
	];

	var squares = document.querySelectorAll('.square');
	var target = document.getElementById("target");
	var message = document.getElementById("message");

	var pickedColor = colors[3];

	function correctPicked() {
		//if correct color is picked, all squares become that color
		for(var i = 0; i < squares.length; i++){
			squares[i].style.background = pickedColor;
		}
	}

	for(var i = 0; i < squares.length; i++){
		//add initial color to squares
		squares[i].style.background = colors[i];

		//add event listeners to squares
		squares[i].addEventListener('click', function() {
			if(this.style.background !== pickedColor){
				this.style.background = "#232323";
				message.textContent = "Try again!";
			}
			else {
				correctPicked();
				message.textContent = "Correct!";
			}
		})
	}
	target.textContent = pickedColor.toUpperCase();

}