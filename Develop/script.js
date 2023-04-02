// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var numberConfirm;
var lowerConfirm;
var upperConfirm;
var charConfirm;
var choice
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCharacters = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var characters = ['`,~,!,@,#,$,%,^,&,*,(,)'];

function generatePassword() {
  var passwordLength = prompt("In the range of 8-128 characters, how long do you want your password to be?");
  
  if(!passwordLength) {
    alert("You need to enter a number between 8 and 128");
  } else if (passwordLength <8 && passwordLength >128) {
    alert("You need to enter a number");
  } else {
    numberConfirm = confirm("Do you want numbers in your password?");
    lowerConfirm = confirm("Do you want lower case letters in your password?");
    upperConfirm = confirm("Do you want upper case letters in your password?");
    charConfirm = confirm("Do you want special characters in your password?");
  }  
  
  if(!numberConfirm && !lowerCharacters && !lowerConfirm && !charConfirm) {
    choice = alert("Your password cannot be empty");
  } else if (numberConfirm && lowerCharacters && lowerCharacters && charConfirm)
    choice = numbers.concat(upperCharacters, lowerCharacters, characters);
  }


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
