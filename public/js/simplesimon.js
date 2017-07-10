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
	var userchoice = [];
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




// });
