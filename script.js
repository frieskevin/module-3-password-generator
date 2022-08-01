// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passLength = '';
var passCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// Write password to the #password input
var passwordLengthFunc = function () {
  passLength = window.prompt('How many characters would you like your password? Please enter a number from 8-128.');
  if (passLength < 8 || passLength > 128) {
    window.alert('You did not choose a valid option, try again.');
    passwordLengthFunc();
    break;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordLengthFunc();

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
