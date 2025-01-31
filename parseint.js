//use the parseint function ----CONVERTS STRINS TO INT
function convertToInteger(str){
    return parseInt(str)
}
console.log(convertToInteger("56"))

//using parseint function with a Radix 
//Radix specify the base of thge number eg base 2 for binary, base
function convertToInteger(str){
    return parseInt(str, 2)
}
console.log(convertToInteger("10011")) 

