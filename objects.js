//Build Js objects
  var ourdog = {
    "Name": "Boscow", // Comma added here
    "Legs": 4,        // Comma added here
    "Tail": 1,        // Comma added here
    "friends": ["everyone"]
  };
  
  console.log(ourdog);
  
  //Accesing object property using Dot Notation
  var student = {
    "Name" : "Allan Otieno",
    "Course" : "BCS",
    "Gpa" : 3.8
  }
  var studentname = student.Name;
  var studentCourse = student.Course
  console.log(studentname)
  console.log(studentCourse)
  
  //Accesing object property using Bracket Notation
  //we use this if theres some spacing in the variable Name 
  var testobj={
    "an entree" : "hamberger",
    "my side" : "veggies",
    "the drink": "water"
  }
  var sideval = testobj["my side"]
  var drinkval = testobj["the drink"]
  var entree = testobj["an entree"]
  console.log(entree);
  console.log(sideval);
  console.log(drinkval)
  //updating object properties
  var student = {
    "Name" : "Allan Otieno",
    "Course" : "BCS",
    "Gpa" : 3.8
  }
  student.Course = "BBIT"
  console.log(student)
  
  //adding new properties to an object
  var student = {
    "Name" : "Allan Otieno",
    "Course" : "BCS",
    "Gpa" : 3.8
  }
  student["Grade"]= "A"
  console.log(student)
  
  //Deleting properties from an object 
  var student = {
    "Name" : "Allan Otieno",
    "Course" : "BCS",
    "Gpa" : 3.8
  }
  delete student.Grade 
  console.log(student)
  
  //using objects for lookups 
  function securityphone(val){
  var result = ""
  var lookup = {
    "alpha" : "A",
    "Bravo" : "B",
    "Charlie" : "C",
    "Delta" : "D",
    "Echo" : "E"
  }
  result = lookup[val]
  return result
  }
  console.log(securityphone("Charlie"))
  
  //Accessing nested objects
  var mystorage = {
    "car" :{
      "inside" : {
        "glove box" : "maps",
    "passenger seat" : "crumbs"
      },
      "outside" : {
        "trank" : "jack"
      }
    }
    
  }
  console.log(mystorage.car.inside["glove box"])
  
  //accesng nested arrays
  var myplants = [
    {
      type: "flower",
      list: [
        "rose",
        "dandelion",
        "tulip"
      ]
    },
    {
      type: "tree",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  var secondtree = myplants[1].list[1];
  console.log(secondtree);
  
  //Record collection
  var collection = {
    "1234": {
      "album": "slippery when wet",
      "artist": "Bon jovi",
      "tracks": [
        "let it rock",
        "rock with me"
      ]
    },
    "5678": {
      "album": "1999",
      "artist": "prince",
      "tracks": [
        "osiepe",
        "1999 song"
      ]
    },
    "9111": {
      "artist": "kimkim",
      "tracks": []
    }
  };
  
  var collectioncopy = JSON.parse(JSON.stringify(collection)); // Creates a deep copy of the collection object.
  
  function updaterecord(id, prop, value) {
    if (value === "") {
      // If the value is empty, delete the property.
      delete collection[id][prop];
    } else if (prop === "tracks") {
      // If the property is "tracks," ensure it exists as an array and add the value.
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    } else {
      // For all other cases, update or set the property.
      collection[id][prop] = value;
    }
    return collection;
  }
  
  // Example usage:
  var output = updaterecord("1234", "artist", "Bon jovi");
  console.log(output);