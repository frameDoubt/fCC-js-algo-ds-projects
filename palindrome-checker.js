// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  
  let formattedString = str.split("\\").join("").match(/\w/g).join("").replace(/\_/g, '').toLowerCase();
  
  if (formattedString.length % 2 === 0) {
    console.log("this is an even length string");
    let newStr = formattedString.substring(formattedString.length / 2 - 1).split('').reverse().join('');
    let regex = new RegExp(newStr);
    return regex.test(formattedString);
  }
  return false;

}

console.log(`${palindrome("eye")} should return a boolean. 1`);
console.log(`${palindrome("eye")} should return true. 2`);
console.log(`${palindrome("_eye")} should return true. 3`);
console.log(`${palindrome("race car")} should return true. 4`);
console.log(`${palindrome("not a palindrome")} should return false. 5`);
console.log(`${palindrome("A man, a plan, a canal. Panama")} should return true. 6`);
console.log(`${palindrome("never odd or even")} should return true. 7`);
console.log(`${palindrome("nope")} should return false. 8`);
console.log(`${palindrome("almostomla")} should return false. 9`);
console.log(`${palindrome("My age is 0, 0 si ega ym.")} should return true. 10`);
console.log(`${palindrome("1 eye for of 1 eye.")} should return false. 11`);
console.log(`${palindrome("0_0 (: /-\ :) 0-0")} should return true. 12`);
console.log(`${palindrome("five|\_/|four")} should return false. 13`);

