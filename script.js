// Assignment Code
var generateBtn = document.querySelector("#generate");

// Random Functions
// This returns a random number from a minimum range to a maximum range

function getRandomNumber (minimum, maximum) {

  if(!maximum) {
// this keeps the code from breaking if maximum isn't defined
    maximum = minimum;
    minimum = 0;
  }
  // stored Math.random() as a variable for cleaner looking code and less confusing closing parenthesis 
  var rand = Math.random();

// Shuffles between a random value.  
  return Math.floor(minimum * (1 - rand) + rand*maximum);

}

// code needed to pull from combined arrays
function getRandomList (index) {

  return index[getRandomNumber(0, index.length)]

}


function generatePassword() {
  //1. Prompt user for password criteria
  //  a. Password length between 8 and 128
  //  b. Ask for uppercase, lowercase, symbols, and numbers. 
  //2. Validate the input. 
  //3. Generate password based on criteria. 
  //4. Display the generated password on the page.

 


// Parameters set in readme for password length + a prompt to get the options going

  passMin = 8;
  passMax = 128;
  var options = []
  
  // List of arrays to be added to the options array via the push method, to later be picked from at random with getRandomList

  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "{", "}", "|", "~"]
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerLetter = []
  
  // loops through the upperLetter array and transforms all instances into lowercase letters
  for (var i = 0; i < upperLetter.length; i++) {

    lowerLetter[i] = upperLetter[i].toLowerCase()

  }




  // while loop to get good input from user
while (true) {

  passwordLength = window.prompt("How many characters should the password be? \nMinimum: 8 \nMaximum: 128");
  parseInt(passwordLength);

  //case of pressing cancel button

  if(passwordLength == null) {

    return
    
  }

  if (isNaN(passwordLength)) {

    window.alert("Please enter only numbers.")
    

  }

  else if (passwordLength > passMax || passwordLength < passMin) {

    window.alert("Please choose a number within range.")
    

  }
  else {

    break

  }

}
  // if statements that set parameters for what the scrambled password should contain. Confirmed options are then pushed into the options array.

  shouldUpper = window.confirm("Would you like uppercase letters in your password?");

  if (shouldUpper) {

    options.push(upperLetter);

  }

  shouldLower = window.confirm("Would you like lowercase letters in your password?");

  if (shouldLower) {

    options.push(lowerLetter);

  }

  shouldNumber = window.confirm("Would you like numbers in your password?");

  if (shouldNumber) {

    options.push(numbers);

  }

  shouldSymbol = window.confirm("Would you like special characters in your password?");

  if (shouldSymbol) {

    options.push(symbols);

  }

  //if statement for empty options card 

  if (options == 0) {

    window.alert("The default is lowercase letters if nothing is chosen.");
    options.push(lowerLetter);

  }
  // initializing an empty string which will then be filled by the following for loop
  var generatedPassword = ""

  // This generates a random list of characters, and then pulls a specific character from the list
  for (var x = 0; x < passwordLength; x++) {

    var randomList = getRandomList(options)
    var randomCharacter = getRandomList(randomList)
    generatedPassword += randomCharacter

  }

  
  return generatedPassword

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password){

  passwordText.value = password;

}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





