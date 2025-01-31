// use class syntax to define a constructor function 
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeus = new SpaceShuttle('Jupiter'); // Use `const` instead of `var`
console.log(zeus.targetPlanet); // Output: Jupiter

// use getters and setters to control access to an object 
class Book {
    #author; // Private field (only accessible inside the class)

    constructor(author) {
        this.#author = author;
    }

    get writer() {
        return this.#author;
    }

    set writer(updatedAuthor) {
        if (typeof updatedAuthor === 'string' && updatedAuthor.trim().length > 0) {
            this.#author = updatedAuthor;
        } else {
            console.error("Invalid author name.");
        }
    }
}

const myBook = new Book("J.K. Rowling");
console.log(myBook.writer); // Output: "J.K. Rowling"

myBook.writer = "George Orwell"; // Setter updates the private field
console.log(myBook.writer); // Output: "George Orwell"

myBook.writer = ""; // Invalid input, setter prevents change
console.log(myBook.writer); // Output: "George Orwell" (unchanged)


function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);

        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }

    }
    return Thermostat;

}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

