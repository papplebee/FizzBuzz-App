//	Title: Main JavaScript Code for FizzBuzz App;
//	Project: FizzBuzz App (Version: 1.0);
//	Author: Peter Applebee;
//	Date: 18/08/2014;

jQuery(document).ready(function() {


		

	$('body').on('click', '#start', function(event) {
		event.preventDefault();



		for(var x = 1; x <= 100; x++) {

			if ((x % 5 === 0) && (x % 3 === 0)) {
				$('div#program-output').append('<p class="num fizz-buzz">FIZZ-BUZZ</p>');

			}

			else if (x % 3 === 0) {
				$('div#program-output').append('<p class="num fizz">FIZZ</p>');
				
			}

			else if (x % 5 === 0) {
				$('div#program-output').append('<p class="num buzz">BUZZ</p>');
				
			}

			else {
				$('div#program-output').append('<p class="num">'+x+'</p>');
				
			};

		};

		var paras = $('p.num'),
		i = 0;
		function animateNum () {
		    $(paras[i++]).fadeIn(100, animateNum)
		                 .css({opacity:0,"margin-left":"0","display":"inline-block"})
		                 .animate({opacity:1,"margin-left":"0"});
		}

		animateNum();


	});

});

