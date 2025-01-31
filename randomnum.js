//Generating random fractions 
function randomfraction(){
    return Math.random();
  }
  console.log(randomfraction())
  
  //Generating random whole numbers 
  function randomWholeNum(){
    return Math.floor(Math.random()*10)
  }
  console.log(randomWholeNum())

  //Generating random whole numbers within a range 
  function randomRange(myMin, myMax){
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  }

  console.log(randomRange(500, 1000))

  