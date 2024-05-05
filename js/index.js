const name = "Rico";

console.log("My name is: ", name);

let firstName;

firstName = "Rico";

firstName = 12;

console.log(firstName);

const lastName = "Buez";

console.log(lastName);

//STRING

let nameOfCar = "Mercedez Benz";
let numOfCars = 20;
let isUsed = false;

console.log("String Data Type: ", nameOfCar);
console.log("Number Data Type: ", numOfCars);
console.log("Boolean Data Type: ", isUsed);

console.log(typeof nameOfCar);
console.log(typeof numOfCars);
console.log(typeof isAdmin);
console.log(typeof nothing);

let car = {
  nameOfCar: "Range Rover",
  numOfCars: 2,
  isUsed: true,
};

console.log(car);

let numbers = [1, 2, 3, 4, 5, 6];
const students = ["Tolu", "Amaka", "Seyi", "Chisom"];

const cars = [
  {
    nameOfCar: "Range Rover",
    numOfCars: 2,
    isUsed: true,
  },
  {
    nameOfCar: "Camr",
    numOfCars: 19,
    isUsed: true,
  },
  {
    nameOfCar: "Benz",
    numOfCars: 23,
    isUsed: false,
  },
];

console.log(numbers[1]);

console.log(students[1]);

console.log(cars);

function greet() {
  let timeOfDay;

  let userName = prompt("What is your Name?");

  let age = prompt(`Hello ${userName}, How old are you?`);

  if (age > 18) {
    if (timeOfDay == "morning") {
      alert(`Good Morning ${userName}`);
    } else if (timeOfDay == "afternoon") {
      alert(`Good Afternoon ${userName}`);
    } else if (timeOfDay == "evening") {
      alert(`Good Evening ${userName}`);
    }
  } else {
    alert("You're too young.");
  }

  console.log(userName);
}

greet();
