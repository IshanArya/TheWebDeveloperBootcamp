window.onload = function() {
	var p1 = document.getElementsByTagName("button")[0];
	var p2 = document.getElementsByTagName("button")[1];
	var reset = document.getElementsByTagName("button")[2];
	var decideLimit = document.querySelector("input");
	var score = document.getElementsByTagName("h1")[0];
	var limit = document.getElementById("scoreLimit");
	var lead = document.getElementById("lead");

	var p1score = 0;
	var p2score = 0;
	var scoreLimit = 5;
	var gameRunning = true;
	var leader = "0";

	function updateScore() {
		if(p1score >= scoreLimit){
			gameRunning = false;
			updateLead();
			score.textContent = "Player 1 wins!";

		}
		else if(p2score >= scoreLimit){
			gameRunning = false;
			updateLead();
			score.textContent = "Player 2 wins!";
		}
		else{
			score.textContent = p1score + " to " + p2score;
			updateLead();
		}
	}
	function updateLead(){
		if(gameRunning){
			if(p1score > p2score){
				lead.textContent = "Player 1 is in the lead."
			}
			else if(p2score > p1score){
				lead.textContent = "Player 2 is in the lead.";
			}
			else {
				lead.textContent = "Game is tied!";
			}
		}
		else {
			lead.textContent = "Final score: " + p1score + " to " + p2score;
		}
		
	}
	function updateLimit() {
		limit.textContent = scoreLimit;
	}
	function resetMatch() {
		p1score = 0;
		p2score = 0;
		gameRunning = true;
		updateScore();
		lead.textContent = "Game start.";
	}

	reset.addEventListener('click', resetMatch);
	p1.addEventListener('click', function() {
		if(gameRunning){
			p1score++;
			updateScore();
		}
	});
	p2.addEventListener('click', function() {
		if(gameRunning){
			p2score++;
			updateScore();
		}
	});
	decideLimit.addEventListener('change', function() {
		scoreLimit = this.value;
		if(scoreLimit < 1){
			scoreLimit = 1;
			this.value = 1;
		}
		updateLimit();
		resetMatch();
	})

}