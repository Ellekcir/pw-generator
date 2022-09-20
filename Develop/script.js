
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked")
// 1. Prompt the user for the password criteria
var userInput = window.prompt("How long do you want your password to be?");
console.log("The User wants their length of the password to be: " + userInput)


}






/*if (userChoice >= 8 && userChoice <= 128)
 

return ("GENERATED PASSWORD WILL GO HERE")}



 //if ()
 //if(statement1 && statement2 === true) {

//var statement1 = 
//var statement2 = 
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1,2,3,4,5,6,7,8,9,0]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "[", "]", "`", "{", "|", "}", "~", "/", '"'];
//var myArrays = [lowercase, uppercase, numeric, specialChar] 
//Var len = prompt("")
//var all = lowercase.concat(mustHave)

// Asking the User if they need any of these - answered in prompts
var confirmLower = confirm(lowercase)
var confirmUpper = confirm(uppercase)
var confirmNum = confirm(numeric)
var confirmSpecial = confirm(specialChar)

var mustHave = [lowercase, uppercase, numeric, specialChar]


if (confirmLower===true) { 
  //randomly pick one item from lower 
  var mustHave = lowercase[Math.floor(Math.random()*lowercase.length)];
}


if (confirmUpper) {
  //randomly pick one item from lower []
  mustHave.push()
}

if (confirmNum) {
  //randomly pick one item from lower []
  mustHave.push()
}


if (confirmSpecial) {
  //randomly pick one item from lower []
  mustHave.push()
}

*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//window.prompt("Would you like to have lowercase letters in your password?") 
//window.prompt("Would you like to have uppercase letters in your password?")
//window.prompt("Would you like to have numbers in your password?")
//window.prompt("Would you like to have special characters letters in your password?");

// 2.Validate the input 

// 3 Generate password based on criteria

// 4.Display password to page

















/*

if (pwLength ==== true)var pwLength = (length >= 8 && <= 128)
prompt 
 //if (statement1 && statement2)

//var statement1 = (>= 8)
//var statement2 = (<= 128)


 alert
if (condition)
  statement1

// With an else clause
if (condition)
  statement1
else
  statement2 


console.log("hello")

math.random
math.floor
window.confirm
parselnt 

*/

 
