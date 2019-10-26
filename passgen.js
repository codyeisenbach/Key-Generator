

var specialChars = "!@#$%^&*()?<>";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "1234567890";
var passLength = prompt("Select a password length between 8 and 128 characters");
var shufflePass = [];
var specialBln = false;
var upperBln = false;
var lowerBln = false;
var numBln = false;
var megaString = "";
var password = [];


// Prompt logic
function specialPrompt() {
    var sPrompt = prompt("Would you like to include special characters?");
    return sPrompt;
};

var specialAnswer = specialPrompt();


if (specialAnswer == "yes" || specialAnswer == "y") {

    specialBln = true;

}

// Prompt logic
function lowerPrompt() {
    var lPrompt = prompt("Would you like to include lower case characters?");
    return lPrompt;
};

var lowerAnswer = lowerPrompt();


if (lowerAnswer == "yes" || lowerAnswer == "y") {

    lowerBln = true;

}

// Prompt logic
function upperPrompt() {
    var uPrompt = prompt("Would you like to include upper case characters?");
    return uPrompt;
};

var upperAnswer = upperPrompt();


if (upperAnswer == "yes" || upperAnswer == "y") {

    upperBln = true;

}

// Prompt logic
function numPrompt() {
    var nPrompt = prompt("Would you like to include numeric characters?");
    return nPrompt;
};

var numAnswer = numPrompt();


if (numAnswer == "yes" || numAnswer == "y") {

    numBln = true;

}


function randomChar(array) {
randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
};


if (specialBln == true) {
    megaString = megaString + specialChars;
    password = password + randomChar(specialChars);
    //megaString += specialChars;
}

if (lowerBln == true) {
    megaString = megaString + lowerChars;
    password = password + randomChar(lowerChars);
}

if (upperBln == true) {
    megaString = megaString + upperChars;
    password = password + randomChar(upperChars);
}

if (numBln == true) {
    megaString = megaString + numChars;
    password = password + randomChar(numChars);
}


// Determines remaining password volume
var charsRemaining = passLength - password.length;



for (i = 0; i < charsRemaining; i++) {
    password = password + randomChar(megaString);
}

console.log(password);





// Shuffle Function
/*
function shuffle(specialChars) {
    var currentIndex = specialChars.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = specialChars[currentIndex];
        specialChars[currentIndex] = specialChars[randomIndex];
        specialChars[randomIndex] = temporaryValue;
    }

    return specialChars;
};

specialChars = shuffle(specialChars);

shufflePass.push(specialChars);
*/

