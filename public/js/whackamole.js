"use strict"

var countdownTimer=30;
var recentMole= null;
var timeInterval;
var gameInterval;
var score=0;
var holeInterval=1500;
var timeInterval=1000;
var hit=0;

$("#startbutton").click(function(){
	startGame();
});

function startGame(){
	gameInterval = setInterval(chooseHole, holeInterval);
			
	timeInterval = setInterval(startTimer, timeInterval);
}


function startTimer() {
	if (countdownTimer==0) {
		console.log("It's over!")
		// alert("It's over!");
		clearInterval(timeInterval);
		clearInterval(gameInterval);
	} else if (countdownTimer>0) {
		console.log("Countdown is greater than 0!")
		$('#timer').html(countdownTimer);
	} 
		countdownTimer--;
}

$(".holes").on('click', function(){
		var container = $(this);
		hit++
		console.log(hit);
		if(hit==1) {
			// container.find('div').flip() <--- doesn't work
			// container.find('div').effect("shake", 400);
		}
		// if(hit==3) { hit=0; 
		// 	container.find('div').hide( "explode", {pieces: 36}, 1200)
		// }

		if(hit==1) { hit=0; 
			container.find('div').hide( "explode", {pieces: 36}, 1200)
		}
		console.log("You clicked it!")
		$('#visiblescore').html(score);
		console.log(score)


		
		





});

function countHits () {
	

}


function appearMole(id) {
	recentMole = $("#" + id + " img");
	recentMole.fadeIn(1200);
	recentMole.click(function(){
		score++
	})

	recentMole.fadeOut(1200);

	hit=0
	// $(img).toggle(recentMole);

	//look at turning on yellow color in codeup curriculm.
	

	// recentMole.addClass('graboid');
	// setTimeout(function () {
	// 	recentMole.removeClass('graboid');
	// }, 1000);

	// recentMole.slideDown(1000)
	// recentMole.slideUp();




	 // $('#' + getRandom()).animate({
		//         opacity: 1
		// 	},1000).animate({opacity:0.1},500)
	 // console.log(getRandom())

	 // $("[data-hole|='value']").animate({
		// opacity: 1
		// },1000).animate({opacity:0},500)
	 // 	console.log(getRandom())

	// var holes=$(".holes")
	//  $('#' + holes).animate({
	// 	        opacity: 1
	// 		},1000).animate({opacity:0},500)

}



function chooseHole () {
	var holes = $(".holes");
	var random = Math.floor(Math.random() * 9);
	var holeToAnimate = holes[random];
	var id = holeToAnimate.getAttribute("id");
	appearMole(id);
}


function hitMole() {

}


function endGame(){

}




// [data-whack="1"] or $("[data-whack|='value']") grab by attribute in css or jquery