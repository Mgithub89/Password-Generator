
function getLength() {
    var howMuchChar = parseInt(prompt("How many character would you like?"));

    while (howMuchChar < 8 || howMuchChar > 128 || isNaN(howMuchChar)) {
        alert("Number of character must be 8-128 characters!");
        howMuchChar = parseInt(prompt("Pls enter How many character would you like?"));
    }
    return howMuchChar;
}
function generatePassword() {

    var genpassword = "";

    var howMuchChar = getLength();

    var specialChar = confirm("Please confirm including special character");
    var numericChar = confirm("Please confirm including numeric character");
    var lowerCaseChar = confirm("Please confirm including lowercase character");
    var upperCaseChar = confirm("Please confirm including uppercaase character");

    while (upperCaseChar != true && lowerCaseChar != true && numericChar != true && specialChar != true) {
        alert("You must include at least one character type!");
        specialChar = confirm("Please confirm including special character");
        vnumericChar = confirm("Please confirm including numeric character");
        lowerCaseChar = confirm("Please confirm including lowercase character");
        upperCaseChar = confirm("Please confirm including uppercaase character");
    }

    // for loop to choose password characters
    for (var i = 0; i <= howMuchChar; i++) {

        if (specialChar) {
            genpassword += (getRandomChar("!@#$%^&*{}[]':;?/|=()_+"));
        };
        if (numericChar) {
            genpassword += (getRandomChar("1234567890"));
        };
        if (lowerCaseChar) {
            genpassword += (getRandomChar("abcdefghijklmnopqrstuvwxyz"));
        };
        if (upperCaseChar) {
            genpassword += (getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWZYZ"));

        }
        genpassword = genpassword.substring(0, howMuchChar);

    }
    return genpassword;
}

function getRandomChar(values) {
    var randomIndex = Math.floor(Math.random() * values.length);
    var randomChar = values[randomIndex];

    return randomChar;
}

// This code handles:
// clicking the Generate Password

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
