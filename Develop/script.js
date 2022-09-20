//---------- The red button that links to the -addEventListener + HTML file-------
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//--------------------------------------------------------------------------------
// 1. Prompt the user for the password criterias
function generatePassword() {
  console.log("Button has been clicked")
 //return ("GENERATED PASSWORD WILL GO HERE")

var userInput = window.prompt("How long do you want your password to be?");
console.log("The User wants their length of the password to be: " + userInput)

var pwLength = parseInt(userInput)

if (isNaN(pwLength)) {
  window.alert("That is an invalid number")
  return ("Try again")
}

if (pwLength < 8 || pwLength > 128) {
  window.alert("Password must be between 8 - 128 characters")
  console.log("The User put an invalid amount of characters: " + userInput)
  return ("Try again")
}

// Asking the User if they need any of these - answered in prompts
var confirmLower = window.confirm("Would you like to have lowercase letters in your password?") 
  console.log("The User wants Lowercase Characters: " + confirmLower)
var confirmUpper = window.confirm("Would you like to have uppercase letters in your password?")
  console.log("The User wants Uppercase Characters: " + confirmUpper)
var confirmNum = window.confirm("Would you like to have numbers in your password?")
  console.log("The User wants Number Characters: " + confirmNum)
var confirmSpec = window.confirm("Would you like to have special characters letters in your password?")
  console.log("The User wants Special Characters: " + confirmSpec)

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ["1", "2", "3" , "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "[", "]", "`", "{", "|", "}", "~", "/", '"'];


// 2.Validate the input 
var arraysSelected = []
var myArray = []

if (confirmLower) {
  arraysSelected = arraysSelected.concat(lowercase)
}

if (confirmUpper) {
  arraysSelected = arraysSelected.concat(uppercase)
}

if (confirmNum) {
  arraysSelected = arraysSelected.concat(numeric)
}

if (confirmSpec) {
  arraysSelected = arraysSelected.concat(specialChar)
}

console.log(arraysSelected)

if (arraysSelected.length === 0 ) {
  arraysSelected = arraysSelected.concat(lowercase)
  console.log("These are the defaulted lowercase characters when nothing is selected")
}

// 3 Generate password based on criteria
for ( i = 0; i < userInput; i++) {
  myArray.push(arraysSelected[Math.floor(Math.random() * arraysSelected.length)]); 
} console.log("This is the Users password: " + myArray.join("").toString())
  return myArray.join("").toString();

}

//----------This is the writePassword function which will run the generatePassword func.--------------------
// 4.Display password to page
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//--------------Whenever you click on button it will run writePassword func.---------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


