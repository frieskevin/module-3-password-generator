

var generateBtn = document.querySelector("#generate");
var passLength = '';
var passCharacters = '';
const passCriteria = {
  lowercaseVal: 'no',
  uppercaseVal: 'no',
  numericVal: 'no',
  specialVal: 'no',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
} 


// variable and prompt asking for password length
var passwordLengthFunc = function () {
  passLength = window.prompt('How many characters would you like your password? Please enter a number from 8-128.');
  if (passLength < 8 || passLength > 128) {
    window.alert('You did not choose a valid option, try again.');
    passwordLengthFunc();
    console.log(passLength)
  }

};


// prompts defining criteria of password
var passCriteriaFunc = function () {
  passCriteria.lowercaseVal = window.prompt('Would you like lowercase letters in your password? Type "YES" or "NO".');
  passCriteria.uppercaseVal = window.prompt('Would you like uppercase letters in your password? Type "YES" or "NO".');
  passCriteria.numericVal = window.prompt('Would you like numbers in your password? Type "YES" or "NO".');
  passCriteria.specialVal = window.prompt('Would you like special characters in your password? Type "YES" or "NO".');
  passCriteria.lowercaseVal.toLowerCase;
  passCriteria.uppercaseVal.toLowerCase;
  passCriteria.numericVal.toLowerCase;
  passCriteria.specialVal.toLowerCase;
  if (passCriteria.lowercaseVal === 'yes') {
    passCharacters = (passCharacters + passCriteria.lowercase);
  };
  if (passCriteria.uppercaseVal === 'yes') {
    passCharacters = (passCharacters + passCriteria.uppercase);
  };
  if (passCriteria.numericVal === 'yes') {
    passCharacters = (passCharacters + passCriteria.numeric);
  };
  if (passCriteria.specialVal === 'yes') {
    passCharacters = (passCharacters + passCriteria.special);
  };
  if (passCriteria.lowercaseVal === 'no' && passCriteria.uppercaseVal === 'no' && passCriteria.numericVal === 'no' && passCriteria.specialVal === 'no') {
    window.alert('You must select at least one. Please try again.')
    passCriteriaFunc();
  }
  console.log(passCriteria);
  console.log(passCharacters);
};
// for loop calculating random password from criteria
function passwordGenerator(length) {
  var result = ' ';
  var charactersLength = passCharacters.length;
  for (let i = 0; i < length; i++) {
    result += passCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function writePassword() {
  passwordLengthFunc();
  passCriteriaFunc();
  var password = passwordGenerator(passLength);
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
