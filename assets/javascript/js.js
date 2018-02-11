var interval;

var game = {
	"currentQuestion":{
	},
	"right":0,
	"incorrect":0,
	"blank":0,
	"progress":0,
	"timer":30,

	//All the Questions
	"easyQuestions":[
		{
			"question": "What are non-magical people called?",
			"chosen": false,
			"correct": "Muggles",
			"wrong": ["Boggles", "Figgs", "Bludgers"],
			"image": "assets/images/Muggle.jpg"
		},
		{
			"question": "What is Harry's cousin's name?",
			"chosen": false,
			"correct": "Dudley",
			"wrong": ["Didley", "Ramsey", "Sam"],
			"image": "assets/images/dudley_400x400.jpg"

		},
		{
			"question": "What position in quidditch does Harry play?",
			"chosen": false,
			"correct": "Seeker",
			"wrong": ["Keeper", "Chaser", "Center"],
			"image": "assets/images/Quidditch.jpg"

		},
		{
			"question": "What club could Nearly Headless Nick never join?",
			"chosen": false,
			"correct": "The Headless Hunt",
			"wrong": ["The Poltergeists", "The Hallowed Hall", "The Gallant Ghosts"],
			"image": "assets/images/Nearly_Headless_Nick.jpg"

		},
		{
			"question": "What animal represents Hufflepuff?",
			"chosen": false,
			"correct": "Badger",
			"wrong": ["Lion", "Snake", "Armadillo"],
			"image": "assets/images/Hufflepuff.jpg"

		},
		{
			"question": "Who is Albus Dumbledore?",
			"chosen": false,
			"correct": "The Headmaster at Hogwarts",
			"wrong": ["The Minister of Magic", "The wizened janitor", "An inventor"],
			"image": "assets/images/Albus_Dumbledore.jpg"

		},
		{
			"question": "What is a Squib",
			"chosen": false,
			"correct": "Someone who should be able to do magic but can't.",
			"wrong": ["A small explosion.", "A broken wand.", "A play in Quidditch"],
			"image": "assets/images/walder-frey-34.jpg",

		},
		{
			"question": "What is Hedwig?",
			"chosen": false,
			"correct": "An owl",
			"wrong": ["A rat", "A cat", "A vampire"],
			"image": "assets/images/Hedwig.jpg",

		}],
	"mediumQuestions":[
		{
			"question": "What was Dobby given that granted him his freedom?",
			"chosen": false,
			"correct": "A sock",
			"wrong": ["A ring", "A pillow", "Pants"],
			"image": "assets/images/1294516396126_f.jpg",

		},
		{
			"question": "What was Voldemort's middle name?",
			"chosen": false,
			"correct": "Marvolo",
			"wrong": ["Tom", "Riddle", "Salazar"],
			"image": "assets/images/Tom_Riddle.jpg",

		},
		{
			"question": "What does Harry use to breathe underwater?",
			"chosen": false,
			"correct": "Gillyweed",
			"wrong": ["Bezoar", "Bubble Kelp", "Thestral"],
			"image": "assets/images/Gillyweed_raw.jpg",

		},
		{
			"question": "What is Peeves?",
			"chosen": false,
			"correct": "A poltergeist",
			"wrong": ["A giant dog",  "A talking hat", "A cat that runs a shop"],
			"image": "assets/images/Peeves01",

		},
		{
			"question": "What kind of creatures does Charlie Weasley work with in Romania",
			"chosen": false,
			"correct": "Dragons",
			"wrong": ["Banshees", "Mermaids", "Unicorns"],
			"image": "assets/images/dragon.jpg",

		},
		{
			"question": "What is the name of the Weasley brothers' business venture",
			"chosen": false,
			"correct": "Weasley Wizard Wheezes",
			"wrong": ["Weasley Wondrous Whizbangs", "Magical Marvels Market", "The Magic Jokeshop"],
			"image": "assets/images/WWW.jpg",

		},
		{
			"question": "Which of these is not an Unforgivable Curse",
			"chosen": false,
			"correct": "Sectumsempra",
			"wrong": ["Avada Kedavra", "Cruciatus", "Imperius"],
			"image": "assets/images/The_Unforgivable_Curses.jpg",

		},
		{
			"question": "What does Ron see in the Mirror of Erised",
			"chosen": false,
			"correct": "Himself holding up the Quidditch Cup",
			"wrong": ["Kissing Hermione", "How to finally defeat Voldemort", "Being wealthy"],
			"image": "assets/images/RonErised.jpg",

		}],
	"hardQuestions":[
		{
			"question": "What form does Snape's patronus take?",
			"chosen": false,
			"correct": "Doe",
			"wrong": ["Stag", "Bat", "Iguana"],
			"image": "assets/images/Snape_patronus.jpg",

		},
		{
			"question": "Which of these are not used by Ollivander in wand making?",
			"chosen": false,
			"correct": "Veela Hair",
			"wrong": ["Dragon Heartstring", "Unicorn Hair", "Phoenix Feather"],
			"image": "assets/images/wands.jpg",

		},
		{
			"question": "What year was Harry Potter born?",
			"chosen": false,
			"correct": "1980",
			"wrong": ["1997", "2001", "1986"],
			"image": "assets/images/Baby_Harry.jpg",

		},
		{
			"question": "What does NEWT stand for?",
			"chosen": false,
			"correct": "Nastily Exhausting Wizarding Test",
			"wrong": ["NeverEnding Wizard Trials", "Nauseating Exam for Wizard Talent", "No one remembers anymore, it was created so long ago."],
			"image": "assets/images/Lockhart's_Test.jpg",

		}
	],
	"started":false,
	"finished":false,
	"answered":false,
	"questions":[],

//game start function
	gameStart: function(){
		$("#trivia").prepend("<h2 id = 'presented-by-timex'>Time: <span id='timer'>30</span> Seconds Left</h2");
		$("#start").addClass("hidden");
		$("#question").removeClass("hidden");
		$("#progress").removeClass("hidden");
		game.setQuestions();
		game.loadQuestion(game.questions[0]);
	},

//makes sure not to repeat questions
	containsQuestion: function(qCheck, questions){
	    for (var i = 0; i < questions.length; i++) {
	        if (questions[i] === qCheck) {
	            return true;
	        }
	    }
	    return false;
	},


//Sets the question from the list 
	randomQuestion: function(questionList){
		if (questionList == game.hardQuestions){
			var tempQID = Math.floor(Math.random()*4);
		}
		else{
			var tempQID = Math.floor(Math.random()*8);
		}
		if (game.containsQuestion(questionList[tempQID], game.questions)){
			game.randomQuestion(questionList);
		}
		else{
			game.questions.push(questionList[tempQID]);
		}
		
	},

	setQuestions: function(){
		var questionDiff = [game.easyQuestions, game.mediumQuestions, game.hardQuestions];
		for (var i = 0; i<2;i++){
			for (var j = 0; j < 4; j++){
				game.randomQuestion(questionDiff[i]);
			}	
		}
		for (var i = 0; i<2;i++){
			game.randomQuestion(questionDiff[2]);
		}
		console.log(game.questions);
	},

	loadQuestion: function(question){
		interval = setInterval(game.timeCount, 1000);
		game.currentQuestion=question;
		var buttonArr = ["a", "a", "a", "a"];
		$("#question").html("<h2>" + game.currentQuestion.question + "<h2>");
		var tempPos = Math.floor(Math.random()*4);
		buttonArr[tempPos] = game.currentQuestion.correct;
		question.wrong.splice(tempPos, 0, game.currentQuestion.correct);
		buttonArr = game.populateWrongAnswers(buttonArr, question);
		for (var i = 0; i < buttonArr.length; i++){
			$("#question").append("<button class='answers' data-name='" 
				+ buttonArr[i] +"'>" + buttonArr[i] + "</button>");
		}
	},

	populateWrongAnswers:function(buttonArr, question){
		for(var i = 0; i< buttonArr.length; i++){
			if (buttonArr[i] == "a"){
				buttonArr[i] = question.wrong[i];
			}
		}
		return buttonArr;
	},

//timer initialize function
	timeCount: function(){
		game.timer--;
		$("#timer").html(game.timer);
		if (game.timer ===0){
			console.log("Time expired");
			game.results();
		}
	},

	correct:function(){

	},

	incorrect:function(){

	},

	results:function(event){
		$("#question").empty();
		$("#results").removeClass("hidden");
		$("#presented-by-timex").addClass("hidden");
		if (game.timer <=0){
			game.timeUp();
		}
		else{
			clearInterval(interval);
			$("#results").append("<img src='" + game.currentQuestion.image 
				+ "' style='height:300px;'>");
			if ($(event.target).attr("data-name") == game.currentQuestion.correct){
				game.correct();
			}
			else{
				game.incorrect();
			}
		}
	},

	timeUp: function(){
		$("#question").html("You are out of time!")
		$("#trivia").append("<button id=next-question>Next Question</button>")
	}
}

//Event Listeners
$(document).on("click", "#start-btn", function(){
	game.gameStart();
});

$(document).on("click", ".answers", function(){
	game.results(event);
});