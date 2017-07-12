// $(document).ready(function(){
	"use strict"
	var randomNum;
	var pattern = [];
	var userPattern = [];
	var buttons = $(".buttons")
	var gameOvervar;
	var turnCount = 0;
	var delay = 450;
	var tran = (.72 * delay);

	$(document).keyup(function(e) {
  if(e.which == 82) {
   var button = $("#red")[0]
	 addKeyToUserPattern(button);
  }
	if(e.which == 70) {
		var button = $("#green")[0]
		addKeyToUserPattern(button);
	}
	if(e.which == 85) {
		var button = $("#blue")[0]
		addKeyToUserPattern(button);
	}
	if(e.which == 74){
		var button = $("#yellow")[0]
		addKeyToUserPattern(button);
	}
	});

	// function addKeyToUserPattern(button) {
	// 	// console.log(button.data("value"));
	// 	console.log(button);
	//
	// }

	function startGame(){
		gameOvervar = false
		console.log("startGame has been called")
		buttons.on("click", addColorToUserPattern);
		buttons.css("opacity", ".5");
		pattern = [];
		userPattern = [];
		addColorToPattern()
	}


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


	function animatePattern() {
		console.log("animatePattern has been called")
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
				}, tran);
				count++;
				break;
				case 2:
				console.log("animating blue current count is " + count)
				$("#blue").css("opacity", "1");
				setTimeout(function(){
					$("#blue").css("opacity", ".5");
				}, tran);
				count++;
				break;
				case 3:
				console.log("animating green current count is " + count)
				$("#green").css("opacity", "1");
				setTimeout(function(){
					$("#green").css("opacity", ".5");
				}, tran);
				count++;
				break;
				case 4:
				console.log("animating yellow current count is " + count)
				$("#yellow").css("opacity", "1");
				setTimeout(function(){
					$("#yellow").css("opacity", ".5");
				}, tran);
				count++;
				break;
			}
		}, delay);
	}

	function addKeyToUserPattern(button) {
		console.log("addKeyToUserPattern has been called")
		userPattern.push(button.dataset.value);
			$(this).css("opacity", "1");
			console.log("=============this opacity is totally 1 now")
			console.log(this);
			comparePatterns()
			animateUser()
	}

	function addColorToUserPattern(){
		console.log("addColorToUserPattern has been called")
		userPattern.push(this.dataset.value);
			$(this).css("opacity", "1");
			console.log("=============this opacity is totally 1 now")
			console.log(this);
			comparePatterns()
			animateUser()
		}
	function animateUser() {
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

		// function addKeyPressToUserPattern(val){
		// 	console.log("addKeyPressToUserPattern has been called")
		// 	userPattern.push(val);
		// 		$(this).css("opacity", "1");
		// 		console.log("=============this opacity is totally 1 now")
		// 		comparePatterns()
		// 		if (gameOvervar == true) {
		// 			$(this).css("opacity", ".2");
		// 		} else {
		// 			console.log(gameOvervar + " is totally false")
		// 			setTimeout(function(){
		// 				$(this).css("opacity", ".5");
		// 				console.log("changing opactiy of this to .5")
		// 			}.bind(this), 300);
		// 		}
		// 	}

	function animateButton() {

	}



	function comparePatterns(){
		if ((pattern.length == userPattern.length) && (userPattern.toString() === pattern.toString())) {
			console.log("you win the round");
			userPattern = [];
			turnCount = 0;
			delay -= 10;
			addColorToPattern();
		} else if (userPattern[turnCount] == pattern[turnCount]) {
			turnCount += 1;
			} else {
				console.log("you lose")
				gameOver();
			}
		}


	function gameOver() {
		console.log(pattern);
		console.log(userPattern);
		gameOvervar = true
		console.log("GAME OVER FUNCTION HAS BEEN CALLED")
		buttons.off("click", addColorToUserPattern);
		pattern = [];
		userPattern = [];
		delay = 450;
		buttons.css("opacity", ".2");
	}


	$("#start").click(startGame);





















// });
