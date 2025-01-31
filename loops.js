//iterate with while loop
var myarray = []
var i=0;
while (i<5){
  myarray.push(i)
  i++;
}
console.log(myarray)

//iterate with for loop 
var myarray = []
for(var i=0; i<10; i++){
  myarray.push(i)
}
console.log(myarray)

//iterate odd numbers with for loop 
var myarray = []
for(var i=1; i<10; i+=2){
  myarray.push(i)
}
console.log(myarray)

//count backwards using for loop 
var myarray = []
for(var i=10; i>1; i--){
  myarray.push(i)
}
console.log(myarray)

var myarray = []
for(var i=11; i>1; i-=2){
  myarray.push(i)
}
console.log(myarray)

//iterate through an array using for loop 
var myarray = [9,10,11,12];
var total=0;
for(var i=0; i<myarray.length; i++){
  total += myarray[i]
}
console.log(total)

//Nesting for loop 
function multiplyAll(arr) {
  var product = 1; // Initialize product to 1

  for (var i = 0; i < arr.length; i++) { // Loop through outer array
    for (var j = 0; j < arr[i].length; j++) { // Loop through inner array
      product *= arr[i][j]; // Multiply product by each element
    }
  }

  return product; // Return final product
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


function buildSentence(words) {
  var sentence = ""; // Initialize sentence as an empty string

  for (var i = 0; i < words.length; i++) { // Loop through the array of words
    sentence += words[i] + " "; // Add each word to the sentence with a space
  }

  return sentence.trim(); // Return the final sentence, trimming any extra space
}

// Example usage:
console.log(buildSentence(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]));

//iterate with DO While loops
var myarray = []
var i=10;
do{
  myarray.push(i)
  i++;
}while (i<5)
console.log(i,myarray)

