// Iteration 1: Names and Input

	// 1.1 Create a variable `hacker1` with the driver's name.

	// 1.2 Print `"The driver's name is XXXX"`.

  	// 1.3 Create a variable `hacker2` with the navigator's name.

  	// 1.4 Print `"The navigator's name is YYYY"`.
    
let hacker1 = 'john';
console.log(`The driver's name is ${hacker1}`);

let navigator = 'Josh';
console.log(`The navigaor's name is ${navigator}`);


// Iteration 2: Conditionals
// 2.1. Depending on which name
// - `The driver has the longest name, it has XX characters.` or <br>
// - `It seems that the navigator has the longest name, it has XX characters.` or <br>
// - `Wow, you both have equally long names, XX characters!`.


let hackerSecond = 'David';
let hackerThird = 'Marko';

if(hackerSecond === 'David') {
    console.log(`The driver has the longest name, it has ${hackerSecond.length} characters.`);
} else if (hackerThird === 'Marko') {
    console.log(`It seems that the navigator has the longest name, it has ${hackerThird.length} four characters.`);
} else {

console.log(`Wow, you both have equally long names, four characters!.`);

// console.log(`${str} ${str.length}`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
// i.e. `"J O H N"`

// 3.2 Print all the characters of the navigator's name, in reverse order. 
// i.e. `"nhoJ"`

// 3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//   - `The driver's name goes first.` <br>
//   - `Yo, the navigator goes first definitely.` <br>
//   - `What?! You both have the same name?`


//SEPERATED CAPITAL LETTERS

let hackerName = '';

for(let index = 0; index < hacker1.length; index+= 1) {
    hackerName += hacker1[index].toUpperCase() + " ";
}
console.log(hackerName.trim());


//REVERSE ORDER
let hackerNameReverse = '';

for(let index = hacker1.length -1; index>=0; index--) {
    hackerNameReverse += hacker1[index];
}
console.log(hackerNameReverse.trim());


//LEXICOGRAPHIC ORDER
let firstName = ['Marko', 'David'];
firstName.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(firstName);



// Bonus 1:
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

let wordCount = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis."

function WordCount(str) { 
    return str.split(" ").length;
}

console.log(WordCount(wordCount));



//Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
//   __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

// let neem = "Ajay";
// function isPal2(str) {
//     let newStr=str.toLowerCase();
//     let right=newStr.length -1;
//     while (left < right) {
//     if(newStr[left] !== newStr[right]) return false;
//     left++;
//     right--;
//     }
//     return true;
// }
  
// console.log(isPal2(neem));

let phraseToCheck = ['A man, a plan, a canal, Panama!', 'Amor, Roma', 'race car', 'stack cats', 'step on no pets', 'taco cat', 'put it up'];
let stringg = phraseToCheck.length;
let msg = 'It is a Palindrome';
for(let i = 0; i < stringg/2; i++) {
    if(phraseToCheck[i] != phraseToCheck[stringg - 1 - i]) {
        msg = 'It is not a Palindrome';
    }
}

console.log(`${phraseToCheck} ${msg}`);