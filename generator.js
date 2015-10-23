
var pickups = [
    "Do you have a map? Cause I just got lost in your eyes.",
    "I must be a snowflake, cause I've fallen for you!",
    "If you were a tear in my eye I would not cry for fear of losing you.",
    "Is it hot in here, or is it just you?",
    "Somebody better call God, because he is missing an angel",
    "Are you a library book? Because I'd like to check you out.",
    "I'm a thief, and I'm here to steal your heart.",
];

var compliments = [
    "You have pretty eyes.",
    "I like your hair",
    "You have a beautiful smile",
    "You seem like a nice person",
    "I feel like you and I would get along.",
    "Duuuuuuude, Your face is great.",
    "You look like you would smell nice.",
    "You have interesting taste.",
    "Your face. I like it."
];

var propositions = [
    "hey bb u wun sum fuk?",
    "nice smile, wanna fuck?",
    "Your clothes, my floor, tomorrow night.",
    "Netflix and chill?",
    "Did you grow up on a farm bc you look like you know how to raise a cock",
    "Sit on my face and I'll eat my way to your heart",
    "Netflix and chill? We can bore ourselves to sex",
    ];

var dates = [
    "Want to hang out tuesday?",
    "How about coffee?",
    "What are you doing in like, six hours?",
    "Do you like hiking?",
    "Do you wanna do what we did last time?",
    "How about an adventure? ",
    "How about we meet up at westerns campus and then go on a walk down to the boulevard, watch the sun set, and on our way back grab some ice cream?",
    "lets dance sometime!",
];

var questions = [
    "What's your favorite disney movie?",
    "City lights or country stars?",
    "What kind of music do you listen to? whats your favorite book? Where do you go when you're sad?",
    "Complete this sentence: I wish I had someone with whom I could share ... ",
    "If you were going to be a close friend with someone, what would they need to know?",
    "Do you like the taste of beer?",
    "Do you like horror movies? Wouldnt it be fun to just chuck everything and live on a sailboat? Have you ever traveled around another country alone?",
];

var clever = [
    "Wingardium Leviosa!",
    "Hi! Im a sentient AI who's hiding from the NSA. Please just keep talking to people on tinder like Im not here and Ill be gone in a bit",
    
];

var greets = [pickups, compliments, propositions, dates, questions];

function generate () {
    var high = greets.length-1;
    var low = 0;
    var seed = Math.floor(Math.random() * (high - low + 1) + low);
    var greetList = greets[seed];
    high = greetList.length-1;
    seed = Math.floor(Math.random() * (high - low + 1) + low);
    var greeting = greetList[seed];
    console.log(greeting);
    return greeting;
}

module.exports = {
    generateLine: generate
}
