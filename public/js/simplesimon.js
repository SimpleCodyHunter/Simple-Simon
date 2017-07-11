// $(document).ready(function(){
	"use strict"
/* ___________PSEUDO CODE___________________

pick a random number between 1 and 4

1 = red
2 = blue
3 = green
4 = yellow

		// switch (randomNum)
		// case 1
		// // light up red
		// case 2
		// // light up blue
		// case 3
		// // light up green
		// case 4
		// // light up yellow
		// return pattern

add random number to string. this string = computer pattern

when number is added to screen display on screen color change for number by turning color on then off for 1 second then wait for user input.

user clicking on color will add a number to a second string. this string = user string

if user string does not = computer string then game over.

otherwise game continues. computer adds another number to string and displays original pattern + 1 more number.

*/
	var red = 1;
	var blue = 2;
	var green = 3;
	var yellow = 4;
	var randomNum;
	var pattern = [];
	var userPattern = [];
	var buttons = $(".buttons")




	$(".buttons").click(addColorToUserPattern);


	function addColorToPattern(){
		randomNum = Math.floor(Math.random() * 4) + 1;
		pattern.push(randomNum)
		console.log("adding " + randomNum + " to array");
		animatePattern()

	}

	function addColorToUserPattern(){
		userPattern.push(this.dataset.value);
			$(this).css("opacity", "1");
			console.log(this);
			setTimeout(function(){
				$(this).css("opacity", ".5");
				console.log(this);
				setTimeout(function(){
					if (pattern.length == userPattern.length) {
					comparePatterns();	
					}
				}, 2000);
			}.bind(this), 1000);		
	}


	function comparePatterns () {
		// var userString =
		if (userPattern.toString() == pattern.toString()) {
			addColorToPattern();
			userPattern = [];
			console.log("success");
		} else {
			console.log("wrong")
			gameOver();
		}
	};
	function gameOver() {
		pattern = [];
		userPattern = [];
	}

	$("#start").click(startGame);

	function startGame(){
		pattern = [];
		userPattern = [];
		addColorToPattern()

	}


	function animatePattern() {
			var count = 0;
			var delay = 850;
			var intervalId = setInterval(function () {
				if (count >= pattern.length)  {
					clearInterval(intervalId);
				}
					switch (pattern[count]) {
						case 1:
							console.log("animating red current count is " + count)
							$("#red").css("opacity", "1");
							setTimeout(function(){
								$("#red").css("opacity", ".5");
							}, 800);
							count++;
							console.log(count);
							break;
						case 2:
							console.log("animating blue current count is " + count)
							$("#blue").css("opacity", "1");
								setTimeout(function(){
								$("#blue").css("opacity", ".5");
							}, 800);
							count++;
							console.log(count);
							break;
						case 3:
							console.log("animating green current count is " + count)
							$("#green").css("opacity", "1");
								setTimeout(function(){
								$("#green").css("opacity", ".5");
							}, 800);
							count++;
							console.log(count);
							break;
						case 4:
							console.log("animating yellow")
							$("#yellow").css("opacity", "1");
								setTimeout(function(){
								$("#yellow").css("opacity", ".5");
							}, 800);
							count++;
							console.log(count);
							break;
						}
		}, delay);
	}






// });
