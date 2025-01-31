//Declare string variables
var fname = "Allan"
var lname = "Otieno"

console.log(fname);
console.log(lname)

//Escaping literal quotes in strings
var mystar = "I am a \"double quoted \"string inside \"double quoted quotes";
console.log(mystar)

//quoting strings with single quotes
var mystar = 'I am a \"double quoted \"string inside \"double quoted quotes';
console.log(mystar)

//Escape sequence in strings
/*****
 CODE OUTPUT

\'    single quotes
\"    double quotes
\\    backslash
\n    new line
\r    carriage return
\t    tab
\b    brackspace
\f    form feed
*****************/

var mystar = "Firstline\n\t\\secondline\n Thirdline"
console.log(mystar)

//concatenating strings with plus operator
var ourstr = "i come first" + " " + "ï come second";
console.log(ourstr)

var solar = "The smallest plannet is " + "pluto in the universe"
console.log(solar)


//concatenating strings with plus Equals operator
var solar = "The smallest plannet is " 
solar += "pluto in the universe consider that"
console.log(solar)

//constructing strings with variables
var ourname = "freecodecamp";
var ourstr = "hello our name is " + ourname + " how are you?"
var solar = "The smallest plannet is " + "pluto in the universe"
console.log(ourstr)


//Appending variables to string

var one = "Data science is anmazing."
var two = " am interested in data visualization and pipelining"
var str= one += two
console.log(str)

//find length of a string
var firstnamelength = 0;
var firstname = "Allan"
var firstnamelength = firstname.length
console.log(firstnamelength)

//Bracket notation to find first character in string
var firstname = "Allan"
var firstnamechar = firstname[0]
console.log(firstnamechar)

//bracket notation to find nth character in string
var firstname = "Allan"
var firstnamechar = firstname[3]
console.log(firstnamechar)

//bracket notation to find last character in string
var firstname = "Allan"
var lastletteroffirstname =firstname [firstname.length-1]
console.log(lastletteroffirstname)

//Bracket notation to find  nth-to-last character in a string
var firstname = "Allan"
var thirdtolastletteroffirstname = firstname[firstname.length-3]
console.log(thirdtolastletteroffirstname)

var firstname = "Allan Otieno"
var fifthtolastletteroffirstname = firstname[firstname.length-5]
console.log(fifthtolastletteroffirstname)

//Word blank
//madlib game : game that you try fitting words to see if its gonna make sense
function wordblank(mynoun, myadjective, myverb, myadverb) 
   {
    var results = "";
    results += "The " + myadjective + " " + mynoun + " " + myverb + " to the store" + " " + myadverb
    return results;
   }
   console.log(wordblank("dog","big","ran","quickly"));
   console.log(wordblank("bike","slow","flew","slowly"));

