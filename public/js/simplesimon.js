// $(document).ready(function(){
	"use strict"

	var red = 1;
	var blue = 2;
	var green = 3;
	var yellow = 4;
	var randomNum;
	var pattern = [];
	var userPattern = [];
	var buttons = $(".buttons")
	var gameOvervar;








	function addColorToPattern(){
		console.log("addColorToPattern has been called")
		randomNum = Math.floor(Math.random() * 4) + 1;
		pattern.push(randomNum)
		console.log("adding " + randomNum + " to array");
		console.log("current pattern array is " + pattern)
		console.log("current user pattern array is " + userPattern)
		setTimeout(function(){
			animatePattern()
		}, 1000)
	}



	function addColorToUserPattern(){
		console.log("addColorToUserPattern has been called")
		userPattern.push(this.dataset.value);
			$(this).css("opacity", "1");
			console.log("=============this opacity is totally 1 now")
			comparePatterns()
			if (gameOvervar == true) {
				$(this).css("opacity", ".2");
			} else {
				console.log(gameOvervar + " is totally false")
				setTimeout(function(){
					$(this).css("opacity", ".5");
					console.log("changing opactiy of this to .5")
				}.bind(this), 300);
			}
		}
	function comparePatterns(){
		if (pattern.length == userPattern.length) {
			console.log("current pattern array is " + pattern)
			console.log("current user pattern array is " + userPattern)
			if (userPattern.toString() === pattern.toString()) {
				console.log("comparePatterns has been called")
				console.log("success");
				userPattern = [];
				addColorToPattern();
			} else {
				console.log("userpattern does not equal pattern")
				gameOver();
			}
		}


	function gameOver() {
		gameOvervar = true
		console.log("GAME OVER FUNCTION HAS BEEN CALLED")
		buttons.off("click", addColorToUserPattern);
		pattern = [];
		userPattern = [];
		buttons.css("opacity", ".2");
	}

	$("#start").click(startGame);

	function startGame(){
		gameOvervar = false
		console.log("startGame has been called")
		buttons.on("click", addColorToUserPattern);
		buttons.css("opacity", ".5");
		pattern = [];
		userPattern = [];
		addColorToPattern()
	}














	function animatePattern() {
		console.log("animatePattern has been called")
			var delay = 450;
			var count = 0;
			var intervalId = setInterval(function () {
				if (count >= pattern.length)  {
					clearInterval(intervalId);
					console.log("clearInterval(intervalID) has been called")
				}
					switch (pattern[count]) {
						case 1:
							console.log("animating red current count is " + count)
							$("#red").css("opacity", "1");
							setTimeout(function(){
								$("#red").css("opacity", ".5");
							}, 400);
							count++;
							break;
						case 2:
							console.log("animating blue current count is " + count)
							$("#blue").css("opacity", "1");
								setTimeout(function(){
								$("#blue").css("opacity", ".5");
							}, 400);
							count++;
							break;
						case 3:
							console.log("animating green current count is " + count)
							$("#green").css("opacity", "1");
								setTimeout(function(){
								$("#green").css("opacity", ".5");
							}, 400);
							count++;
							break;
						case 4:
							console.log("animating yellow current count is " + count)
							$("#yellow").css("opacity", "1");
								setTimeout(function(){
								$("#yellow").css("opacity", ".5");
							}, 400);
							count++;
							break;
						}
		}, delay);
	}






// });
