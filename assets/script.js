// Global variables
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var numbers = "1234567890".split("");
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var password = [];
var passwordCount = password.length;

// Gets a reference to the #generate element

var generateBtn = document.querySelector("#generate");

// Writes the password to the #password input

function writePassword() {
  passwordCriteriaPrompt();
  var password = passwordCriteriaPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Prompts the user with questions about the desired password

function passwordCriteriaPrompt() {
  noChar = prompt("How Many Characters? Between 8 and 128");
  var specialReq = confirm("Does your password require any special characters");
  var lowerReq = confirm("Does your password require any lowercase letters");
  var capsReq = confirm("Does your password require any uppercase letters");
  var noChar = parseInt(noChar);
  var numbersReq = confirm("Does your password require any numbers?");

  if (specialReq === true) {
    password.push(specialCharacters);
  }

  if (lowerReq === true) {
    password.push(lower);
  }

  if (capsReq === true) {
    password.push(caps);
  }

  if (noChar === true) {
    password.push(numbers);
  }

  if (numbersReq === true) {
    password.push(numbers)
  }
  if (
    noChar === passwordCount < 8 ||
    passwordCount > 128 ||
    passwordCount === isNaN
  ) {
    alert("Please enter a number between 8 and 128");
  } else passwordCount = parseInt;
  var generatedPassword = [];
  var possibleCharacters = password.flat();
 
  // For loop to generate randomized selected charachters in chosen length
  
  for (var i = 0; i < noChar; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    generatedPassword.push(possibleCharacters[randomIndex]);
  }
  console.log(generatedPassword)
  var completedPassword = generatedPassword.join("")
  
  return completedPassword;
}



// An event listener to generate password button
generateBtn.addEventListener("click", writePassword);
