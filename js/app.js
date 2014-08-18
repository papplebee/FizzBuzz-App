//	Title: Main JavaScript Code for FizzBuzz App;
//	Project: FizzBuzz App (Version: 1.0);
//	Author: Peter Applebee;
//	Date: 18/08/2014;

jQuery(document).ready(function() {

	$('body').on('click', '#start', function(event) {
		event.preventDefault();
		for(var x = 1; x <= 100; x++) {

			if ((x % 5 === 0) && (x % 3 === 0)) {
				$('div#program-output').append('<p class="fizz-buzz">FIZZ-BUZZ</p>');
			}

			else if (x % 3 === 0) {
				$('div#program-output').append('<p class="fizz">FIZZ</p>');
			}

			else if (x % 5 === 0) {
				$('div#program-output').append('<p class="buzz">BUZZ</p>');
			}

			else {
				$('div#program-output').append('<p>'+x+'</p>').hide().fadeIn(200);
			};

		};

	});

});

