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

	$(document).on("keydown", userKeyEvent)

	function userKeyEvent(e) {
		$(document).off("keydown")
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
	};
	$(document).on("keyup", function(e){
		$(document).on("keydown", userKeyEvent);
	})

	



	function startGame(){
		gameOvervar = false
		console.log("startGame has been called")
		$("#start").off("click", startGame);
		buttons.on("mousedown", addColorToUserPattern);
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
				$("#red").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#red").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 2:
				console.log("animating blue current count is " + count)
				$("#blue").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#blue").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 3:
				console.log("animating green current count is " + count)
				$("#green").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#green").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 4:
				console.log("animating yellow current count is " + count)
				$("#yellow").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#yellow").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
			}
		}, delay);
	}


	function addKeyToUserPattern(button) {
		console.log("addKeyToUserPattern has been called")
		userPattern.push(button.dataset.value);
			$(button).css({"opacity": "1", "background-position-y": "-209px"});
			console.log("=============this opacity is totally 1 now")
			console.log(button);
			console.log($(button))
			comparePatterns()
			animateUser(button)
	}

	function addColorToUserPattern() {
		addKeyToUserPattern(this)
		}

	function animateUser(button) {
			if (gameOvervar == true) {
				$(button).css({"opacity": ".2", "background-position-y": "-5px"});
			} else {
				console.log(gameOvervar + " is totally false")
				setTimeout(function(){
				$(button).css({"opacity": ".5", "background-position-y": "-5px"});
				console.log("changing opactiy of this to .5")
				}, 300);
			}
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
		gameOvervar = true
		console.log("GAME OVER FUNCTION HAS BEEN CALLED")
		buttons.off("click", addColorToUserPattern);
		pattern = [];
		userPattern = [];
		delay = 450;
		buttons.css("opacity", ".2");
		$("#start").on("click", startGame);

	}


	$("#start").on("click", startGame);




// });
