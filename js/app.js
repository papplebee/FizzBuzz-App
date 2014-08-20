//	Title: Main JavaScript Code for FizzBuzz App;
//	Project: FizzBuzz App (Version: 1.0);
//	Author: Peter Applebee;
//	Date: 18/08/2014;

jQuery(document).ready(function() {

	$('#example').hide().slideDown(800);
	
	$('body').on('click', '#reset', function(event) {
		event.preventDefault();
		$('div#program-output').empty();
		$(this).closest('#example').find('#start-number').val(1);
		$(this).closest('#example').find('#finish-number').val(100);

	})

	$('body').on('click', '#start', function(event) {
		event.preventDefault();

		$('div#program-output').empty();

		var startNum = +$(this).closest('#example').find('#start-number').val();
		var endNum = +$(this).closest('#example').find('#finish-number').val();

		if ((isNaN(startNum)) || (isNaN(endNum)))  {
			alert("You have not entered a number. Please enter a number.");
		}
		else if ((startNum % 1 != 0) || (endNum % 1 != 0)) {
			alert("You have not entered a whole number. Please only use whole numbers.")
		}
		else if (endNum >= startNum) {

			for(var x = startNum; x <= endNum; x++) {
				if ((x % 5 === 0) && (x % 3 === 0)) {
					$('div#program-output').append('<p class="num fizz-buzz">FIZZBUZZ</p>');
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

			var paragraphs = $('p.num');
			var i = 0;
			var animateNum = function () {
			    $(paragraphs[i++]).fadeIn(100, animateNum)
			                 .css({opacity:0,"margin-left":"0","display":"inline-block"})
			                 .animate({opacity:1,});
			}
			animateNum();

			var fizzBuzzCount = function(type, where) {
				var fizzBuzzNum = ($(type).length) - 1;
				console.log(fizzBuzzNum);
				$(where).html(fizzBuzzNum);
			}

			fizzBuzzCount('.fizz', '#fizz-data');
			fizzBuzzCount('.buzz', '#buzz-data');
			fizzBuzzCount('.fizz-buzz', '#fizzbuzz-data');

		} 
		else {
			alert("Your finish number is less than your start number, please enter a greater number.");
		};


	});

});

