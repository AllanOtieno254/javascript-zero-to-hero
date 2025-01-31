//difference between Var and let 
//Var is function scoped and let is block scoped 
//Var can be redeclared and let cannot be redeclared 
//Var can be hoisted and let cannot be hoisted              
//Var is undefined and let is ReferenceError 
//Var is global and let is not global 
//Var is window object and let is not window object 
//Var is not secure and let is secure 
//Var is not recommended and let is recommended 

//NB/ Let doesnt allow you declare a variable twice in the same scope.
//NB/ var allow you declare a variable twice in the same scope.

var catname = "Quincy";
var quote;

var catname = "Beau";

function catTalk() {
    "use strict";

    catname = "Oliver"; // Reassigns the global variable
    quote = catname + " says Meow!"; // Constructs the sentence

    return quote; //  Returns the string instead of calling itself
}
console.log(catTalk()); // Output: "Oliver says Meow!"


/* ALL THIS WILL CAUSE AN ERROR BECAUSE Let doesnt allow you declare a variable twice in the same scope.
let catname = "Quincy";
let quote;

let catname = "Beau";

function catTalk() {
    "use strict";

    catname = "Oliver"; // Reassigns the global variable
    quote = catname + " says Meow!"; // Constructs the sentence

    return quote; //  Returns the string instead of calling itself
}   

console.log(catTalk());
*/

//compare scopes of the var and let keyword
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);

    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();


function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);

    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();


//Declaring a read only variable with the const keyword
function printManyTimes(str) {
    "use strict";
    var sentence = str + " is cool!";
    sentence = str + " is amazing!";
    for (var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }

}
console.log(printManyTimes("freeCodeCamp"));


function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

}
console.log(printManyTimes("freeCodeCamp"));


//Mutate an array declared with const 
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

/*
//Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    }

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
*/



