//use arrow functions to write concise anonymous functions with parameters
var myconcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1, 2], [3, 4, 5]));


//write higher order arrow functions 
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);














































