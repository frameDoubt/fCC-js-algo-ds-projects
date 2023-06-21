function palindrome(str) {
  
  let formattedString = str.split("\\").join("").match(/\w/g).join("").replace(/\_/g, '');

  return true;

}

console.log(`${palindrome("eye")} should return a boolean.`);
console.log(`${palindrome("eye")} should return true.`);
console.log(`${palindrome("_eye")} should return true.`);
console.log(`${palindrome("race car")} should return true.`);
console.log(`${palindrome("not a palindrome")} should return false.`);
console.log(`${palindrome("A man, a plan, a canal. Panama")} should return true.`);
console.log(`${palindrome("never odd or even")} should return true.`);
console.log(`${palindrome("nope")} should return false.`);
console.log(`${palindrome("almostomla")} should return false.`);
console.log(`${palindrome("My age is 0, 0 si ega ym.")} should return true.`);
console.log(`${palindrome("1 eye for of 1 eye.")} should return false.`);
console.log(`${palindrome("0_0 (: /-\ :) 0-0")} should return true.`);
console.log(`${palindrome("five|\_/|four")} should return false.`);

