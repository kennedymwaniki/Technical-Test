/*
Question 1: FizzBuzz
Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
"FizzBuzz".*/

for (i = 1; i < 100; i++) {
  if (i % 3 === 0) {
    console.log(` ${i} :fizz`);
  }
  if (i % 3 === 0) {
    console.log(` ${i} : Buzz`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} : FizzBuzz`);
  }
}

// Q2
// Write a program to generate the Fibonacci sequence up to 100.

/*
Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
*/
const number = Number(prompt("enter number"));
if ((number & (number - 1)) === 0 && number !== 0) {
  alert(`true `);
} else {
  alert("false");
}

/*
Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.
Examples:
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"
*/

const capitalized = (words) => {
  const caps = words.split(" ");
  const capsWords = [];
  for (const word of caps) {
    capsWords.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(capsWords.join(" "));
};

capitalized("hi");
capitalized("i love programming");

/*
Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19.
*/

const reversedInteger = (integer) => {
  const reversedInt = parseInt(integer.toString().split("").reverse().join(""));
  return integer >= 0 ? reversedInt : -reversedInt;
};
console.log(reversedInteger(500));
console.log(reversedInteger(-56));
console.log(reversedInteger(-98));
