// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

function generatePassword() {
  var passwordLength = prompt("In the range of 8-128 characters, how long would you like your password to be?");
  var passwordNumber = parseInt(passwordLength);

  if (isNaN(passwordNumber) || passwordNumber < 8 || passwordNumber > 128) {
    alert("You need to input a number between 8 and 128.");
    return null;
  }

  var numberConfirm = confirm("Would you like numbers in your password?");
  var specialCharsConfirm = confirm("Would you like special characters in your password?");
  var lowerCaseLettersConfirm = confirm("Would you like lower case letters in your password?");
  var upperCaseLettersConfirm = confirm("Would you like upper case letters in your password?");

  if (!numberConfirm && !lowerCaseLettersConfirm && !upperCaseLettersConfirm && !specialCharsConfirm) {
    alert("Your password cannot be empty.");
    return null;
  }

  var charbank = []

  if (numberConfirm) {
    charbank = charbank.concat(numbers);
  }

  if (lowerCaseLettersConfirm) {
    charbank = charbank.concat(lowerCaseLetters);
  }

  if (upperCaseLettersConfirm) {
    charbank = charbank.concat(upperCaseLetters);
  }

  if (specialCharsConfirm) {
    charbank = charbank.concat(specialChars);
  }
var password = randomize(charbank, passwordNumber);

return password
}

function randomize(charbank, passwordNumber) {
  var emtString = ''
  for (var i = 0; i < passwordNumber; i++) {
    var rndIndex = Math.floor(Math.random() * charbank.length);
    var rndChar = charbank[rndIndex];
    emtString += rndChar;
  }
  return emtString
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
