//create the document.ready function
$(document).ready(function() {
//get the images
	crystals = ['images/blue.png', 'images/red.png', 'images/green.png', 'images/yellow.png'];
//create variables and elements with win and losses id
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#losses').text(losses);

	crystalImage();
	newGame();
//call the funtion, ask for a random number, 
	function crystalImage () {
		var numbers = []
			while(numbers.length < 4){
				var randomNumber = Math.ceil(Math.random()*12)
				var found = false;
				for (var i=0; i< numbers.length; i++){
					if (numbers[i] == randomNumber){
						found = true; break
					}
				}
				if(!found)numbers[numbers.length]=randomNumber;
			}
			console.log(numbers);

			for (i = 0; i < numbers.length; i++) {
				var imageCrystal = $('<img>');
				imageCrystal.attr('data-num', numbers[i]);
				imageCrystal.attr('src', crystals[i]);
				imageCrystal.attr('alt', 'crystals');
				imageCrystal.addClass('crystalImage')
				$('#crystals').append(imageCrystal);

			}
	}

	function newGame() {
		counter = 0;
		$('#yourScore').text(counter);
// call the random number for player to guess and reset the numbers for the crystals
		function randomIntFromInterval(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
			}
			var numberToGuess = randomIntFromInterval(19,120);  

			$('.value').text(numberToGuess);

			$('.crystalImage').on('click', function(){
				counter = counter + parseInt($(this).data('num'));

				$('#yourScore').text(counter);
// if the total score is the same is the # to match, read you won and increase wins by 1, restart game
				if (counter == numberToGuess){
					$('#status').text('You Won!!'); wins ++;
					$('#win').text(wins);
					console.log(wins)

					$('#crystals').empty();
					crystalImage();
					newGame();
// if the total score is over the # to match, read you lost and increase losses by 1, restart game
				} else if ( counter > numberToGuess){
					$('#status').text('You Lost!');	losses ++;
					$('#losses').text(losses);
					console.log(losses)

					$('#crystals').empty();
					crystalImage();
					newGame();
				}
			});
		}
	});
