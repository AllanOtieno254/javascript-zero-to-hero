//Switch statement
function switch1(val){
    var answer=" ";
    switch(val){
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta"
        break;
      case 3:
        answer = "gamma"
        break;
      case 4:
        answer = "delta"
        break;
      default:
      answer = "TypeError"
      break;
    }
    return answer
  }
  console.log(switch1(3))
  
  //multiple identical options in switch statement
  function sequentialsizes(val){
    var answer = "";
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low"
      break;
      case 4:
      case 5:
      case 6:
        answer = "Medium"
      break;
      case 7:
      case 8:
      case 9:
        answer = "High"
      break;
    }
    return answer
  }
  console.log(sequentialsizes(7))
  
  //Replacing ifelse statement of chain with switch statement
  function switchgrade(val) {
    var grade = "";
    switch (true) //Changed switch(val) to switch(true) to allow logical conditions in case blocks.
    {
      case val >= 80 && val <= 100:
        grade = "Grade A";
        break;
      case val >= 75 && val <= 79:
        grade = "Grade A-";
        break;
      case val >= 70 && val <= 74:
        grade = "Grade B+";
        break;
      case val >= 65 && val <= 69:
        grade = "Grade B";
        break;
      case val >= 60 && val <= 64:
        grade = "Grade B-";
        break;
      case val >= 55 && val <= 59:
        grade = "Grade C+";
        break;
      case val >= 50 && val <= 54:
        grade = "Grade C";
        break;
      case val >= 45 && val <= 49:
        grade = "Grade C-";
        break;
      case val >= 40 && val <= 44:
        grade = "Grade D+";
        break;
      case val >= 35 && val <= 39:
        grade = "Grade D";
        break;
      case val >= 30 && val <= 34:
        grade = "Grade D-";
        break;
      case val >= 0 && val <= 29:
        grade = "Grade E";
        break;
      default:
        grade = "Invalid Grade. Please recheck your input.";
        break;
    }
    return grade;
  }
  
  console.log(switchgrade(66)); // Output: Grade B
  
  //Returning boolean value from a function 
  function isless(a,b){
   return  a>=b
  }
  console.log(isless(110,20))
  
  //Returning early pattern from function 
  function abTest(a,b){
    if (a<0 || b<0){
      return undefined 
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2))
  }
  console.log(abTest(6,25))
  
  //Counting cardsvar count = 0;var count = 0; // Initialize count as a number
  var count = " "
  function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    var Holdbet = "Hold";
    if (count > 0) {
      Holdbet = "Bet";
    }
  
    return count + " " + Holdbet;
  }
  
  // Call the function with the cards
  console.log(cc(2)); // 1 Bet
  console.log(cc(3)); // 2 Bet
  console.log(cc(7)); // 2 Bet
  console.log(cc("K")); // 1 Bet
  console.log(cc("A")); // 0 Hold