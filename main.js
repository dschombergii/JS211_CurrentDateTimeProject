// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:


const displayDate = () => {
  console.log(new Date)
  const currentDate = new Date()

  document.getElementById('date-time-instruction').innerHTML = "Current date and time:"
  document.getElementById("display-date-time").innerHTML = currentDate
  document.getElementById("fetch-date-time").innerHTML = "Refresh"
}


// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = document.getElementById('number-input').value
  let numString = num.toString()
  let stringResult = document.getElementById('string-result')

  if (num.length == 0) {
    console.log('Enter a number, please!')
    stringResult.innerHTML = 'Enter a number, please!'
  }
  else {
    console.log(("input (" + num + ") type is: " + typeof (numString)))
    stringResult.innerHTML = 'The number you entered: ' + num + ', is now a string: "' + numString + '"'
  }

}

// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {

  let regex = /[+-]?\d+(?:\.\d+)?/g
  let str = document.getElementById('string-input').value
  let match;
  let numArray = []
  let numResult = document.getElementById('num-result')

  if (str.length === 0) {
    console.log('Enter a string, please!')
    numResult.innerHTML = 'Enter a string, please!'
  }
  else {
    while (match = regex.exec(str)) {
      console.log(match[0]);
      let stringNum = parseInt(match)
      numArray.push(' ' + match[0] + ' (type: ' + typeof (stringNum) + ')')
      numResult.innerHTML = "I've pulled and converted the following numbers from your string: " + numArray
      console.log(typeof (stringNum));
    }
  }
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const displayType = () => {
  let value = document.getElementById('input-to-type').value
  let typeResult = document.getElementById('type-result')

  if (value === "") {
    console.log("undefined")
    typeResult.innerHTML = 'Your input: null, is undefined.'
  }
  else if (value === "true" || value === "false" || value === "True" || value === "False") {
    console.log("boolean")
    typeResult.innerHTML = 'Your input: ' + value + ', is a boolean.'
  }
  else if (!Number.isNaN(Number(value))) {
    console.log("number")
    typeResult.innerHTML = 'Your input: ' + value + ', is a number.'
  }
  else {
    console.log(typeof (value))
    typeResult.innerHTML = 'Your input: ' + value + ', is a string.'
  }
}

// Write a JavaScript program that adds 2 numbers together.

const addNumbers = () => {
  let a = document.getElementById('num1').value
  let b = document.getElementById('num2').value
  let sum = Number(a) + Number(b)
  let sumResult = document.getElementById('sum-result')

  console.log(sum)
  sumResult.innerHTML = a + ' + ' + b + ' = ' + sum
}

// Write a JavaScript program that runs only when 2 things are true.

const areYouSmart = () => {
  let color = document.getElementById('colors').value
  let isPrimary = document.getElementById('primary-secondary').value
  let edible = document.getElementById('edible').value
  let isEdible = document.getElementById('edible-or-not').value
  let quizResult = document.getElementById('quiz-result')

  if (color === isPrimary && edible === isEdible) {
    console.log('both true')
    quizResult.innerHTML = "You got 2 out of 2 correct. Good luck in 1st Grade!"
  }
  // Write a JavaScript program that runs when 1 of 2 things are true.
  else if (color === isPrimary || edible === isEdible) {
    console.log('only one is true')
    quizResult.innerHTML = "You only got 1 out of 2 correct. Try again!"
  }
  // Write a JavaScript program that runs when both things are not true.  
  else {
    console.log('neither is true')
    quizResult.innerHTML = "You got 0 out of 2 correct. You may need to be held back until next year..."
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
