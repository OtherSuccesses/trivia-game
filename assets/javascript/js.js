var game = {
	"currentQuestion":{
	},
	"right":0,
	"wrong":0,
	"blank":0,
	"progress":0,
	"timer":30,
	"easyQuestions":{
		"questionOne":{
			"question": "What are non-magical people called?",
			"chosen": false,
			"correct": "Muggles",
			"wrongOne": "Boggles",
			"wrongTwo": "Figgs",
			"wrongThree": "Bludgers",
			"image": "assets/images/",
		},
		"questionTwo":{
			"question": "What is Harry's cousin's name?",
			"chosen": false,
			"correct": "Dudley",
			"wrongOne": "Didley",
			"wrongTwo": "Ramsey",
			"wrongThree": "Sam",
			"image": "assets/images/dudley_400x400.jpg",

		},
		"questionThree":{
			"question": "What position in quidditch does Harry play?",
			"chosen": false,
			"correct": "Seeker",
			"wrongOne": "Keeper",
			"wrongTwo": "Chaser",
			"wrongThree": "Center",
			"image": "assets/images/Quidditch.jpg",

		},
		"questionFour":{
			"question": "What club could Nearly Headless Nick never join?",
			"chosen": false,
			"correct": "The Headless Hunt",
			"wrongOne": "The Poltergeists",
			"wrongTwo": "The Hallowed Hall",
			"wrongThree": "The Gallant Ghosts",
			"image": "assets/images/Nearly_Headless_Nick.jpg",

		},
		"questionFive":{
			"question": "What animal represents Hufflepuff?",
			"chosen": false,
			"correct": "Badger",
			"wrongOne": "Lion",
			"wrongTwo": "Snake",
			"wrongThree": "Armadillo",
			"image": "assets/images/Hufflepuff",

		},
		"questionSix":{
			"question": "Who is Albus Dumbledore?",
			"chosen": false,
			"correct": "The Headmaster at Hogwarts",
			"wrongOne": "The Minister of Magic",
			"wrongTwo": "The wizened janitor",
			"wrongThree": "An inventor",
			"image": "assets/images/Albus_Dumbledore",

		},
		"questionSeven":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		},
		"questionEight":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		}
	},
	"mediumQuestions":{
		"questionNine":{
			"question": "What was Dobby given that granted him his freedom?",
			"chosen": false,
			"correct": "A sock",
			"wrongOne": "A ring",
			"wrongTwo": "A pillow",
			"wrongThree": "Pants",
			"image": "assets/images/1294516396126_f.jpg",

		},
		"questionTen":{
			"question": "What was Voldemort's middle name?",
			"chosen": false,
			"correct": "Marvolo",
			"wrongOne": "Tom",
			"wrongTwo": "Riddle",
			"wrongThree": "Salazar",
			"image": "assets/images/Tom_Riddle.jpg",

		},
		"questionEleven":{
			"question": "What does Harry use to breathe underwater?",
			"chosen": false,
			"correct": "Gillyweed",
			"wrongOne": "Bezoar",
			"wrongTwo": "Bubble Kelp",
			"wrongThree": "Thestral",
			"image": "assets/images/Gillyweed_raw.jpg",

		},
		"questionTwelve":{
			"question": "What is Peeves?",
			"chosen": false,
			"correct": "A poltergeist",
			"wrongOne": "A giant dog",
			"wrongTwo": "A talking hat",
			"wrongThree": "A cat that runs a shop",
			"image": "assets/images/Peeves01",

		},
		"questionThirteen":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		},
		"questionFourteen":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		},
		"questionFifteen":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		},
		"questionSixteen":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		}
	},
	"hardQuestions":{
		"questionSeventeen":{
			"question": "What form does Snape's patronus take?",
			"chosen": false,
			"correct": "Doe",
			"wrongOne": "Stag",
			"wrongTwo": "Bat",
			"wrongThree": "Iguana",
			"image": "assets/images/Snape_patronus.jpg",

		},
		"questionEighteen":{
			"question": "Which of these are not used by Ollivander in wand making?",
			"chosen": false,
			"correct": "Veela Hair",
			"wrongOne": "Dragon Heartstring",
			"wrongTwo": "Unicorn Hair",
			"wrongThree": "Phoenix Feather",
			"image": "assets/images/wands.jpg",

		},
		"questionNineteen":{
			"question": "What year was Harry Potter born?",
			"chosen": false,
			"correct": "1980",
			"wrongOne": "1997",
			"wrongTwo": "2001",
			"wrongThree": "1986",
			"image": "assets/images/Baby_Harry.jpg",

		},
		"questionTwenty":{
			"question": "",
			"chosen": false,
			"correct": "",
			"wrongOne": "",
			"wrongTwo": "",
			"wrongThree": "",
			"image": "",

		}

	},
	"started":false,
	"finished":false,
	"answered":false,
}