
function palindrome(str) {
  
  const formattedString = str.split("\\").join("").match(/\w/g).join("").replace(/\_/g, '').toLowerCase();
  const helperFunction = strType => {
    let newStr = formattedString.substring(strType).split('').reverse().join('');
    let regex = new RegExp(newStr);
    return regex.test(formattedString);
  };

  if (formattedString.length % 2 === 0) {
    return helperFunction(formattedString.length / 2 - 1);
  };
  if (formattedString.length % 2 === 1) {
    return helperFunction(Math.ceil(formattedString.length / 2));
  };
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

