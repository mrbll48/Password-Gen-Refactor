// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var upperCaseCharacters = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharacters = []
function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  var passwordLowerCaseCharacters = prompt("Do you want lowercase letters in your password?");
  var passwordUpperCaseCharacters = prompt("Do you want uppercase characters in your password?");
  var passwordSpecialCharacters = prompt("Do you want special characters in your password?");

  }


console.log(response);

// var numbers = [0,1,2,3,4,5,6,7,8,9]
// var lowerCasedCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];

// function generatePassword(){
// var passwordLength = prompt("How long do you want your password?")

// var passwordNumber = parseInt(passwordLength)
// if(!passwordNumber){
//   return generatePassword()
// }

// var lowercase = confirm("DO you want lowercase characters?")
// console.log("lowercase!~~~ ", lowercase)


// var uppercase = confirm("DO you want uppercase characters?")

// if()



//   return "YOur password"
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
