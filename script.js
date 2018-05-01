$(document).ready(function(){

var magic8ball={};

magic8ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];

$("#answer").hide(); //hide answer when page loads


//a function that takes a question and gives a random answer.

       magic8ball.giveanswer = function(q){

	$("#answer").fadeIn(4000);//makes answer fade in

	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"); //change image when giving answer

 var random= Math.random();
var randomarray=random*this.listOfAnswers.length;
var randomindex= Math.floor(randomarray);
var randomanswer = this.listOfAnswers[randomindex];
	
	$("#answer").text(randomanswer);
	
	console.log(q);
	console.log(randomanswer);
};

//a function that fires the prompt box on click

	var question = function(){
		$("#answer").hide(); 
                $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

       //delay the question prompt to let the image finish changing
 setTimeout(
       function() {
           //show prompt
           var q = prompt("Ask a yes or no question");
           magic8ball.giveanswer(q);
       }, 500);
		
		$("#8ball").effect("shake"); //make the ball shake
		magic8ball.giveanswer(q);
	
	};
$("#questionButton").click(question);




});