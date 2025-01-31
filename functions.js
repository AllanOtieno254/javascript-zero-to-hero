//Functions

function areaofrectangle(L,W)
{
  var area = L * W 
  return area;
}
console.log(areaofrectangle(2,4))

function percprofit(SP,BP)
{
    var profit = SP - BP;
    var percentageprofit = (profit/BP) * 100
    return percentageprofit;
}
console.log("%" + percprofit(500,200))


//writing reusable code using functions 
function reusablefunc(){
    console.log("Hello world")
}
 reusablefunc()
 reusablefunc()

 //passing values to functions with arguments
 function sub(a,b){
    console.log(a-b)
 }
 sub(10,5)

 //Global scope and functions 
var myglobal = 10; //its global since its outside the function

function fun1(){
    oopsglobal = 5// it becomes global since  it has not been defined inside by use of var 
}

function func2(){
      var Output = " "
      if(typeof myglobal != "undefined"){
        Output += "myglobal: " + myglobal;
      }

      if(typeof oopsglobal != "undefined"){
        Output += " oopsglobal: " + oopsglobal
      }

     return Output
}

console.log(fun1())
console.log(func2())

//reminding ourselve on checking data types
var type=typeof myglobal
console.log(type)


//local scope and functions 
function mylocalscope(){
    var myvar=5;
    return myvar
}
console.log(mylocalscope())


//GLOBAL VS LOCAL SCOPE IN FUNCTIONS 
var outerwear = "T-shirt"

function myoutfit(){
   var  outerwear = "Short"
    return outerwear
}
console.log(myoutfit())
console.log(outerwear)

//Return a value from a function with return 
function minusseven(num){
    return num-7
}
console.log(minusseven(10))

