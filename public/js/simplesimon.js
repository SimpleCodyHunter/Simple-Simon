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
	var pattern = [1,2,4,2];
	var userPattern = [];
	var buttons = $(".buttons")


	buttons.click(function(){
		// light up and add number to array

	});



	function addColorToPattern(){
		randomNum = Math.floor(Math.random() * 4) + 1;
		pattern.push(randomNum)

	}

	function addColorToUserPattern(){

	}

	function comparePatterns(){

	}

	function startGame(){

	}

	function animatePattern(){
		 	var count = 0;
			var max = 4;
			var interval = 800;
			var intervalId = setInterval(function () {
				if (count <= max) {
					switch (pattern[count]) {
						case 1:
							console.log("case 1")
							$("#red").css("background-color", "red");
							setTimeout(function(){
								$("#red").css("background-color", "f96868");
							}, 800);
							count++;
							break;
						case 2:
							console.log("case 2")
							$("#blue").css("background-color", "blue");
								setTimeout(function(){
								$("#blue").css("background-color", "7167fc");
							}, 800);
							count++;
							break;
						case 3:
							console.log("case 3")
							$("#green").css("background-color", "green");
								setTimeout(function(){
								$("#green").css("background-color", "8ff791");
							}, 800);
							count++;
							break;
						case 4:
							console.log("case 4")
							$("#yellow").css("background-color", "yellow");
								setTimeout(function(){
								$("#yellow").css("background-color", "f7f78f");
							}, 800);
							count++;
							break;
						}
					} else {
						// clearInterval(intervalId);
					}

		}, interval);
	}






// });
