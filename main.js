// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(first, second){
  if(first > second){
    return first;
  } return second;
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(first, second, third){
  if(first > second){
    if(first > third){
      return first;
    }return third;
  }if(second > third){
    return second;
  }return third;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(letter){

if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U" ) {
  return true;
  }return false;
}       



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(num1,num2){
	return num1 +num2;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num1,num2,num3){
  return (num1 + num2 + num3)/3;
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(string){
  return string.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(num1,num2){
  if(num1 < num2){
    return true;
  }return false;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(yourNameAsAStringPleaseAndThankYou){
  return "Hello, " + yourNameAsAStringPleaseAndThankYou;
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madLibsGoneCrazy(country,superlative,illegalSubstanceOfYourChoice,typeOfCriminalPluralized,anotherTypeOfCriminalPluralized){
  return "When " +country+ " is sending its people, theyre not sending their " +superlative+ ". Theyre bringing " +illegalSubstanceOfYourChoice+ ". Theyre bringing " +typeOfCriminalPluralized+ ". Theyre all " +anotherTypeOfCriminalPluralized+ ". Some, Ive been told are not so bad and can contribute bigly to our covfefe."
}
