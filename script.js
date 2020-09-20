///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword() {
    document.querySelector("#password").textContent = "";
    var genpassword = "";
    var howMuchChar = parseInt(prompt("How many character would you like?"));
    if (howMuchChar < 8 || howMuchChar > 128) {
        alert("Length must be 8-128 characters");
        howMuchChar = parseInt(prompt("Pls enter How many character would you like?"));
        while (howMuchChar < 8 || howMuchChar > 128) {
            howMuchChar = parseInt(prompt("Pls enter How many character would you like?"));
        }
    } else {
        var specialChar = confirm("Please confirm including special character");
        var numericChar = confirm("Please confirm including numeric character");
        var lowerCaseChar = confirm("Please confirm including lowercase character");
        var upperCaseChar = confirm("Please confirm including uppercaase character");
    }
    while (upperCaseChar != true && lowerCaseChar != true && numericChar != true && specialChar != true) {
        alert("You must select at least one character type!");
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
        // genpassword = genpassword + newPassword.join('');
        console.log(genpassword);
        genpassword = genpassword.substring(0, howMuchChar);
        console.log("trimmed value", genpassword);
    }
    return genpassword;
}

// setTimeout(() => genpassword.remove(), 2000);
function getRandomChar(values) {
    var randomIndex = Math.floor(Math.random() * values.length);
    var randomLetter = values[randomIndex];
    console.log("randomLetter, randomIndex, values");
    return randomLetter;
}


///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

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
