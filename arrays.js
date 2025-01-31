//Store multiple values with arrays
var ourarray = ["Allan",23]
console.log(ourarray)

//Nested Array
var myarray = [["Allan",23],["John",20]];
console.log(myarray)


//accessing array data with index 
var ourarray = [50,60,70]
var ourarray0= ourarray[0]
console.log(ourarray0)
console.log(ourarray[1])

//array length and nth position
var arraylength= ourarray.length 
console.log(arraylength)
var lastarray = ourarray[ourarray.length-2]
console.log(lastarray)

//modify array data with indexes but for string you cannot
var ourarray = [18,29,88]
ourarray[1]= 20
console.log(ourarray)


//Access multi-dimensional arrays with indexes
var arrays = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var myarrays = arrays[2][2];
console.log(myarrays); // Output: 9

//manipulate arrays with push
var ourarray = ["Allan", "Shaki"]
ourarray.push(["Iano","kim"])//adds the array to the end of  the arrays above
console.log(ourarray)

//manipulate arrays with pop 
var ourarray = ["Allan", "Shaki","Iano","kim"]
ourarray.pop()//removes the last element in an array
console.log(ourarray)

//manipulate arrays with shift
var ourarray = ["Allan", "Shaki","Iano","kim"]
ourarray.shift()//removes the 1st element in an array
console.log(ourarray)

//manipulate arrays with unshift
var ourarray = ["Allan", "Shaki"]
ourarray.unshift(["Iano","kim"])//adds the array to the beginning of  the arrays above
console.log(ourarray)
