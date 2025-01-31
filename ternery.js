//use the conditional (ternary) operator 
//syntax: condition ? statement-if-true : statement-if-false; 
function checkEqual(a, b){
    return a === b ? true : false
}
console.log(checkEqual(1, 2)) 

//use multiple conditional (ternary) operator 
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10))