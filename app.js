function area (height, width) {
    return height * width;
}

// alert(area(8,5));

let greeting = "hello world!";
let num = 15;
let numbers = [1,2,3,4,5,6,7,8,9,10];
let funObj = {name: "John Smith", numfav: 22, namesOfPeople: ["Nathan", "Jacob", "Megan", "Kate"]};

let products = Array();
products[0] = "eggs";
products[1] = "milk";
products[2] = "butter";
products[3] = "cheese";

function fullName (firstName, lastName) {
    console.log(firstName, lastName);
}

// fullName("Nathan", "Pedigo");

/* Challenge 1  -- learning how to make variables with let*/

let favFood = "tacos";

// console.log ('My favorite food is', favFood);

favFood = "ice cream";

// console.log ('No, but really, my favorite food is', favFood);

// Challenge 2 -- can't change constant variables

const myCodingConfidence = "unwavering";

console.log("My confidence in my coding ability is", myCodingConfidence);

myCodingConfidence = "poor";

// Challenge 3 -- Learning different data types

const fName = "Nathan";
let myAge = 23;
let loveJavaScript = true;
let listOfHobbies = null;

console.log("My name is", fName);
console.log("I am", myAge, "years old");
console.log("It's", loveJavaScript + ", I love JavaScript");
console.log("The list of things I hate about JavaScript is", listOfHobbies);

// Challenge 4 -- Strings with different quotes

let mySingleString = 'Single Time\n';
let myDoubleString = "Double Time\n";
let myBackString = `Backwards Time`;

console.log(mySingleString, myDoubleString, myBackString);

function fizzBuzz(userNumber) {
    if (userNumber % 3 == 0 && userNumber % 5 == 0) {
        console.log("FizzBuzz");
    }

    else if (userNumber % 5 == 0)
    {
        console.log("Fizz");
    }

    else if (userNumber % 3 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(userNumber);
    }
} 

fizzBuzz();

// Greetings

// Today's Time Clock 

function onPageLoad() {
    const currentHoursAndMinutes = getTime() 
    const message = showTime(currentHoursAndMinutes)
    return message;
}

function getTime () {
    const myDate = newDate
    let time = myDate.getHours() + ':' + myDate.getMinutes();
    return time;
}

function showTime (hoursAndMinutes) {

}

window.onload = onPageLoad


    // const myDate = new Date()
    // let hours = myDate.getHours()
    // let minutes = myDate.getMinutes()
    // let seconds = myDate.getSeconds()
    // let milliseconds = myDate.getMilliseconds()
    // let time = hours + ':' + minutes + ':' + seconds + '.' + milliseconds
    // console.log(time) 

function timeGreetings () {
    let funNum = Number(document.getElementById('numInput').value);
    if (funNum < 12 && funNum >= 0 || funNum === 24) {
        alert("Good Morning");
    }

    else if (funNum < 17 && funNum > 11) {
        alert("Good Afternoon");
    }

    else if (funNum < 20 && funNum > 16) {
        alert("Good Evening");
    }

    else if (funNum < 24 && funNum > 19) {
        alert("Good Night");
    }

    else {
        alert("Please enter a number between 0 and 24");
    }
}

timeGreetings();