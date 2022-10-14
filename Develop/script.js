// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var userInput =  window.prompt ('How long do you want your password? ')

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert ('That  is not a number')
  return
}

if (passwordLength < 8 || passwordLength > 128) {
window.alert ('The length of the password must be between 8 and 128 characters')
return 
}

var userWantsNumbers = window.confirm ('Would you like to use numbers?')
var userWantsUppercase = window.confirm ('Would you like to use Uppercase letters?')
var userWantsLowercase = window.confirm ('Would you like to use lowercase letters?')
var userWantsSymbols = window.confirm ('Would you like to use symbols?')

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
