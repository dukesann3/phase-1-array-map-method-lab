const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
const titleCased = () => {
  //need to know if: is, the, of, and, for, and it is included in the array
  const tutorialsCopy = [...tutorials]; //make non destructive deep copy

  tutorialsCopy.map( (tutorial) => {
    //inside of each sentences inside tutorialsCopy
    let tutorialArray = tutorial.split(" ");
    tutorialArray.map( (word, index) => {
      //inside of each word in a sentence

      //upper case first word of 'word' variable
      //and assigns this new 'correct' value to the index of tutorial.
      tutorialArray[index] = makeFirstWordsUpperCased(word);
    })

  })

}



//makes first character of given string into an upperCase letter
function makeFirstWordsUpperCased(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const str = 'hi ai i'
makeFirstWordsUpperCased(str);

console.log(str);

console.log(makeFirstWordsUpperCased(str))


*/

//or find every space in the substring and replace the index after that with an upper case letter.

const titleCased = () => {
  tutorials.map((tutorial,i) => {
    let count = 0;
    //creates character array from string
    let tutorialArray = tutorial.split("");
    for (let character of tutorialArray) {
      if (character === " ") {
        tutorialArray[count + 1] = tutorialArray[count + 1].toUpperCase();
      }
      else if (count === 0) {
        tutorialArray[count] = tutorialArray[count].toUpperCase();
      }
      count++;
    }
    //converts character array into a single string
    tutorial = tutorialArray.join("");
    tutorials[i] = tutorial;
  })
  console.log(tutorials);
  return tutorials;
}

titleCased();
/*
const test = 'hi i am yeehaw';
test[0] = 'R';
console.log(test);
//ok you cannot replace a character in a string.

//how about
const testArray = test.split("");
testArray[0] = 'R';
newTest = testArray.join("");
console.log(newTest);
//join("") works to get rid of commas after converting array to string.
*/

