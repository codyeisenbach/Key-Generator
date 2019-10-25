

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passLength = prompt("Select a password length between 8 and 128 characters");
var shufflePass = [];


function charPrompt() {
    var charType = prompt("Choose a character type: Special, Lower Case, Upper Case, Numeric");
    return charType;
}

var selectedType = charPrompt();

while (selectedType != "Special" && selectedType != "Lower Case" && selectedType != "Upper Case" && selectedType != "Numeric"
    && selectedType != "special" && selectedType != "lower case" && selectedType != "upper case" && selectedType != "numeric") {
    alert("you typed " + selectedType)
    alert("Please choose a valid character type")
    selectedType = charPrompt();
};




if (selectedType == "Special" || selectedType == "special") {

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
    }
};

// Used like so

specialChars = shuffle(specialChars);

shufflePass.push(specialChars[0]);







