// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

export default function palindrome(str) {
  
  let formattedString = str.split("\\").join("").match(/\w/g).join("").replace(/\_/g, '').toLowerCase();
  
  if (formattedString.length % 2 === 0) {
    let newStr = formattedString.substring(formattedString.length / 2 - 1).split('').reverse().join('');
    let regex = new RegExp(newStr);
    return regex.test(formattedString);
  };
  if (formattedString.length % 2 === 1) {
    let newStr = formattedString.substring(Math.ceil(formattedString.length / 2)).split('').reverse().join('');
    let regex = new RegExp(newStr);
    return regex.test(formattedString);
  };
}
