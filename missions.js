var tasks = [
    "Get a player to compliment your hair",
    "Get a movie quote wrong and get another player to correct you.",
    "Get a player to high-five you twice in a row.",
    "Get a player to yawn",
    "Get a player to correct your spelling.",
    "Get a player to say 'you’re not ugly.'",
    "Get a player to ask if you are crying.",
    "Get a player to hit you",
    "Tell a player something is voice activated. Get them to try it.",
    "Get a player to do an impression of you.",
    "Get a player to wolf whistle.",
    "Get a player to howl like a werewolf.",
    "Get a player to say something in a different language.",
    "Get a player to flip you off.",
    "Get a player to try to cure your 'hiccups'.",
    "Make up a word and get another player to ask you what it means",
    "Get a player to dab.",
    "Make someone smell your shoe.",
    "Get someone to touch their toes",
    "Get a player to complain about the temperature",
    "Get a player to admit to having heard of a fake band",
    "Get a player to take a selfie with you",
    "Get a player to take off or put on their shoes",
    "Have your phone's alarm go off in another player's pocket",
    "Get someone to sing the alphabet",
    "Get someone to correct your song lyrics",
    "Get someone to empty their pockets",
    "Get someone to try to lick their nose",
    "Get someone to show their ID"
]
var rand1 = Math.floor((Math.random() * tasks.length));
document.getElementById("task1").innerHTML = tasks[rand1];
tasks.splice(rand1,1);
var rand2 = Math.floor((Math.random() * tasks.length));
document.getElementById("task2").innerHTML = tasks[rand2];
tasks.splice(rand2,1);
var rand3 = Math.floor((Math.random() * tasks.length));
document.getElementById("task3").innerHTML = tasks[rand3];
tasks.splice(rand3,1);
var rand4 = Math.floor((Math.random() * tasks.length));
document.getElementById("task4").innerHTML = tasks[rand4];
tasks.splice(rand4,1);