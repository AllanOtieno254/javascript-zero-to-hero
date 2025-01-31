//ssignment with a return value 
var changed = 0;
function change(num){
    return (num + 5) / 3
}
 changed = change(15)
 console.log(changed)

 //Conditional statements with if statement
  function ourtruefalse(istrue){
    if(istrue){
        return "yes its true"
    }
    return "No its not true"
  }
  console.log(ourtruefalse(true))

  function comparisonoperaters(num1,num2){
    if(num1>num2){
        return num1 +=" is greater than num2"
    }
    return num1 +=" is less than num2"
  }
  console.log(comparisonoperaters(10,5))

//comparison with equality operator
function test(val){
    if(val==12){
        return "Equal"
    }
    return "Not Equal"
}
console.log(test(12))

//comparison with strict equality operator
function test(val){
    if(val==='12'){ //doesnt attemp to change the values into common dtypes hence its strict has to be the exact value i.e the value has to be equal to 12 but the 12 has to be a string
        return "Equal"
    }
    return "Not Equal"
}
console.log(test(12))

//practice comparing different values
function compareEquality(a,b){
    if(a==b){
        return a+ " Equals " +b
    }
    return a+ " Not Equals " +b
}
console.log(compareEquality(10,10))

function compareEquality1(a,b){
    if(a==='b'){
        return a+ " Equals " +b
    }
    return a+ " Not Equals " +b
}
console.log(compareEquality1(10,10))


//comparison with inequality operator
function compareEquality(a,b){
    if(a != 10){
        return a+ " Not Equals to " +10
    }
    return a+ "  Equals to " +10
}
console.log(compareEquality(12))

//comparison with strict inequality operator
function compareEquality(a,b){
    if(a !== 10){
        return a+ " Not Equals to " +10
    }
    return a+ "  Equals to " +10
}
console.log(compareEquality(110))

//comparisons with logical and operator
function logicaloperator(val){
    if(val>100){
        return "Over 100";
    }
    return "Below 100"
}
console.log(logicaloperator(10))

//comparisons with Greater than or equals to operator
function logicaloperator1(val){
    if(val>=20){
        return "20 or over";
    }
    if(val>=500){
        return "500 or over";
    }
    if(val<=50){
        return "less than 50";
}
}
console.log(logicaloperator1(40))

//The same apploies for less than(>) and less than or equals to (<=)


//comparison with the logical AND operator
function testlogicalAnd(val){
    if(val<=50 && val >=25){
        return "Yes"
    }
    return "No"
}
console.log(testlogicalAnd(30))


//comparison with the logical OR operator
function testlogicalor(val){
    if(val<=50 || val >=25){
        return "Qualified"
    }
    return "Not Qualified"
}
console.log(testlogicalor(10))


//Else Statement

function elsestatement(val){
    var results = ""
    if (val >= 50){
        results = "Excellent"
    }
    else
    {
        results = "Work Hard"
    }
    return results
}
console.log(elsestatement(70))

function elsestatement(val){
    var results = 60
    if (val >= results){
        results = "Excellent"
    }
    else
    {
        results = "Work Hard"
    }
    return results
}
console.log(elsestatement(10))

//Else if statement
function studentsgrade(score){
    var grade = " " 
    if(score >=80 && score<=100){
        grade = "Grade A :Excellence"
    }
    else if(score>=75 && score<=79){
        grade = "Grade A-: Great"
    }
    else if(score>=70 && score<=74){
        grade = "Grade B+: Better"
    }
    else if(score>=65 && score<=69){
        grade = "Grade B: Good"
    }
    else if(score>=60 && score<=64){
        grade = "Grade B-: Trial"
    }
    else if(score>=55 && score<=59){
        grade = "Grade C+:Average "
    }
    else if(score>=50 && score<=54){
        grade = "Grade D+: Below Average"
    }
    else if(score>=45 && score<=49){
        grade = "Grade D: Work Hard"
    }
    else if(score>=40 && score<=44){
        grade = "Grade D-: Pull up your socks"
    }
    else if(score>=0 && score<=39){
        grade = "Grade E: Poor"
    }

    return grade
}
console.log(studentsgrade(58))


