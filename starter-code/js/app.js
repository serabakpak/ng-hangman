console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);

app.controller('hangmanCtrl', hangmanCtrl);


function hangmanCtrl () {
	var vm = this;
	vm.myGuess = ''; //just a way for me to keep track of keys that aren't explicitly listed in app.js
	vm.game = new HangmanGame('elephant');
	// vm.triesRemaining = vm.game.triesRemaining;<-- THIS WAY IS WRONG!!!!!!
	vm.guessLetter = function () {
		vm.game.guess(vm.myGuess); 
		vm.myGuess = '';
	}

	//another way
	// vm.guessLetter = function (input) {
	// 	vm.game.guess(input); 
	// 	vm.myGuess = ''; //input doesn't work here bc input now = string i.e. "e"
	//essentially, angular forgets 
	// }
}



