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

	(function startScreen(){
		$("#container").css("display", "none");
		$(document).on("keydown", pressSpaceToStart)

		function pressSpaceToStart(e) {
			$(document).off("keydown")
				e.preventDefault();
	  		if(e.which == 32) {
	   		runGame();
			}
		};
	}());


	function runGame() {
		$("#startScreen").css("display", "none");
		$("#container").css("display", "block");

	$(document).on("keydown", userKeyEvent)
	$(document).on("keyup", userKeyInput)

	function userKeyEvent(e) {
		$(document).off("keydown")
		if(e.which == 82) {
   		var button = $("#red")[0]
	 		animateUser(button);
  		}
		if(e.which == 70) {
			var button = $("#green")[0]
			animateUser(button);
		}
		if(e.which == 85) {
			var button = $("#blue")[0]
			animateUser(button);
		}
		if(e.which == 74){
			var button = $("#yellow")[0]
			animateUser(button);
		}
	};
	function userKeyInput(e) {
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
		$(document).on("keydown", userKeyEvent);
	};



	function startGame(){
		gameOvervar = false
		$("#start").off("click", startGame);
		buttons.on("mousedown", addColorToUserPattern);
		buttons.css("opacity", ".5");
		pattern = [];
		userPattern = [];
		addColorToPattern()
	}


	function addColorToPattern(){
		randomNum = Math.floor(Math.random() * 4) + 1;
		pattern.push(randomNum)
		roundNumber()
		setTimeout(function(){
			animatePattern()
		}, 1000)
	}

	function roundNumber() {
		$("#score").html("ROUND: " + pattern.length);
		console.log(pattern.length);
	}

	function animatePattern() {
		var count = 0;
		var intervalId = setInterval(function () {
			if (count >= pattern.length)  {
				clearInterval(intervalId);
			}
			switch (pattern[count]) {
				case 1:
				$("#red").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#red").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 2:

				$("#blue").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#blue").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 3:

				$("#green").css({"opacity": "1", "background-position-y": "-209px"});
				setTimeout(function(){
					$("#green").css({"opacity": ".5", "background-position-y": "-5px"});
				}, tran);
				count++;
				break;
				case 4:

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
		userPattern.push(button.dataset.value);
			$(button).css({"opacity": "1", "background-position-y": "-209px"});
			comparePatterns()
			// animateUser(button)
			animateRyu(button)
	}


	function addColorToUserPattern() {
		addKeyToUserPattern(this)
		}


	function animateUser(button) {
			if (gameOvervar == true) {
				$(button).css({"opacity": ".2", "background-position-y": "-5px"});
			} else {
				setTimeout(function(){
				$(button).css({"opacity": ".5", "background-position-y": "-5px"});
				}, 300);
			}
		}
	function animateRyu(button){
		if ($(button).is("#red")){
			$("#ryu").html('<x-gif src="img/highPunch.gif"></x-gif>');
		} else if ($(button).is("#blue")){
				$("#ryu").html('<x-gif src="img/Shoryuken_200.gif"></x-gif>');
		} else if ($(button).is("#green")){
				$("#ryu").html('<x-gif src="img/hiKick.gif"></x-gif>');
		} else if ($(button).is("#yellow")){
				$("#ryu").html('<x-gif src="img/jumpKick.gif"></x-gif>');
		} setTimeout(function(){
		 $("#ryu").html('<x-gif src="img/idle_2.gif"></x-gif>');
	 }, 2000);
}


		function comparePatterns(){
		if ((pattern.length == userPattern.length) && (userPattern.toString() === pattern.toString())) {
			userPattern = [];
			turnCount = 0;
			delay -= 10;
			addColorToPattern();
		} else if (userPattern[turnCount] == pattern[turnCount]) {
			turnCount += 1;
			} else {
				gameOver();
			}
		}


	function gameOver() {
		gameOvervar = true
		buttons.off("click", addColorToUserPattern);
		pattern = [];
		userPattern = [];
		delay = 450;
		buttons.css("opacity", ".2");
		$("#start").on("click", startGame);
	}

	$("#start").on("click", startGame);

};
