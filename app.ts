// DAY 16

// 46. laptop

// let laptop ={
//     make:"Dell",
//     model:"I5  GEN 6",
//     year: 2021,
//     describe: function(){
//         console.log(`This laptop is a ${this.year} ${this.make} ${this.model}. `);
//     }
// }

// laptop.describe();

// 47. laptop list

// let laptops=[
//     {make : "Dell", model: " I5", year: 2021},
//     {make : "lenavo", model: " I5", year: 2019},
//     {make : "hp", model: " I5", year: 2022},
    
// ];

// let [laptop1 , laptop2 , laptop3] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3)

// 48. laptop objects

// let priceSet1 =[35000, 40000,45000];
// let priceSet2 =[38000, 47000,55000];
// let combinedPrices =[...priceSet1,...priceSet2].sort((a,b) => a -b);
// console.log(combinedPrices)

// DAY 17

// 49.Question .Function with Rest Parameters: Write a function that takes a rest parameter representing 
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an 
// array, providing a way to handle multiple inputs gracefully.

// Defines a function that accepts multiple hobbies as arguments
// function logHobbies(...hobbies: string[]) {
//     // Loops through each hobby in the array
//     hobbies.forEach(hobby => {
//         // Logs a statement for each hobby
//         console.log(`I enjoy ${hobby}.`);
//     });
// }

// // Calls the function with three hobbies
// logHobbies("reading", "coding", "cycling");

// function logHobbies(...hobbies: string[]){
//     hobbies.forEach(hobby =>{
//         console.log(`I enjoy ${hobby}.`);
//     });
// }
// logHobbies("singing","coding","cleaning");


// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes 
// your ideal day. Include at least three different activities.

// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks
//  that incorporate variables and expressions.

 // Using template literals to define a multiline string

// let myIdealDay =`My ideal day would involve:
// 1. Waking up early and do pray with some Quran reading.
// 2. Spending some time coding to improve my skills.
// 3. Ending my day by  watchig a action movies. `;
//  // Logging the multiline string to the console

// console.log(myIdealDay)

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.

// solution:

// // Original function for calculating the area of rectangle 
// function calculateArea( width: number, height : number) : number {
//     return width* height;
// }
// // Refactored into an arrow function
// let calculateAreaArrow =( width: number, height: number): number => width * height;
//     // Example usage of the arrow function
// console.log(calculateAreaArrow(4,9)); // logs the area of the rectangle


// 52.Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
// Include its brand, model, and other key features like how much storage it has, the size of its screen,
//  and how long its battery lasts.

// solution:
// let smartphone_object ={
//      make: "Realme ",
//      model: "C35",
//      specs:{
//         Storage: "Up to 4GB + 128GB. RAM+ROM",
//         screenSize:"6.6 inch",
//         batteryLife:"5000 maha battery"

//      }
// };
// // shows what we've set up about the smartphone
// console.log(smartphone_object);


// 53 Question: Pulling Apart a Nested Object: Imagine you have 
// a list inside another list that shows what a computer programmer knows, like coding languages,
//  tools, and software frameworks. Find a way to get three specific skills from this list and show them.

//solution:
// // A list showing a programmer's skills in detail
// let developerSkills ={
//     languages: ["JawaScript","TypeScript","Python"],
//     frameworks:[" React","Angular"," Vue"],
//     tools:["Git","Webpack","Docker"]
// }
// // getting specific skills from the list
// let {languages, frameworks, tools } = developerSkills;
// //  showing a skill from each categary
// console.log(`Language: ${languages[0]}, Framework :${frameworks[0]}, Tool: ${tools[0]}`);

// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change 
// the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// solution:

// function createObjectWithDynamicKey(key: string, value: string): {[key: string]: string} {
//     let dynamicObject: {[key: string]: string} = {};
//     dynamicObject[key] = value;
//     return dynamicObject;
//   }
  
//   let userPreference = createObjectWithDynamicKey("theme", "light");
//   console.log(userPreference);

// 55.Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a 
// new list where each number is twice its original value.

// solution1:

// //start with a list of numbers
// let numbers=[ 1,2,3,4,5,6,7,8,9];
// // doubles  each number
// let doubledNumbers = numbers.map(number => number * 2);
// // shows the new list of doubled numbers
// console.log(doubledNumbers); //output [2,4,6,8,10,12,14,16,18]

// solution 2:

// let numbers=[ 5,6,9];
// let doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);

// 56 Question: Keep Only Strings: Given a mix of different types of items, make a new list 
// that has only the words.

//solution:.

// // A mixed bag of items
// let mixedArray =[4, "orange", 9,"kite", false, "ball"];
// // picks out only the words
// let stringArray = mixedArray.filter(item => typeof item === "string");
// console.log(stringArray);

// 57.Question : Find the Average Grade: Given a list of grades, calculate the average grade.

// solution:

// let grades =[ 88,99,92, 36, 59];
// // calculate the average grades
// let averageGrade = grades.reduce((total, grade) => total+ grade, 0) / grades.length;
// console.log(averageGrade);

// DAY 20

// 58.Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average 
// score. Handy for seeing how well you did overall!

// solution:

// // this program calculate the average of all scores given
// function averageScore( ...scores:number[] ): number {
//     // adds all scores together and divided by the number  of scores
//     let total = scores.reduce((sum,score) => sum + score,0) ;
//     return total / scores.length;
// } 
// console.log(averageScore(100,78,93,55));

// // 59.Add a Special Number: Make a program that creates custom adders. These adders can add a specific number
// //  to any other number you give them later.


// solution:

// function makeAdder(valueToAdd: number):  (number : number) => number {
// // this is the magic box .it takes a number and adds your special number to it
// return function(number: number): number{
//     return number+ valueToAdd;
// };
// };
// let addFour = makeAdder(4);
// console.log(addFour(8));

// 60. Self-Running User Profile: Create a quick, self-setup profile for a user that can 
// tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user 
// profile by itself and can tell you about the user.

// solution:

// let userProfile =(function(){
//     let name ="Fatima";
//     let age = 24;
//     //  this part shares the user details
//     return{
//         displayInfo: function(){
//             console.log(`Name:${name}, Age: ${age}`);
//         }
//     };
// })();
// //  asking about the profile to tell us about the user
// userProfile.displayInfo();

//DAY 21

// 61.Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, 
// and motorcycles using enums, and show one example.

// solution:

// enum VehicleType{
//     Car,
//     Truck,
//     Motorcycle,
//      Bike
// }
// // showing 1 type of vehicle from the list
// console.log(VehicleType.Truck);

// 62. Making a Student Template: Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of 
// information, making your code more organized.

// solution:

// creating a blueprint ( interface) for student information

// interface students  {
//      name: string;
//      age: number;
//      courses: string[];
// };

// //  Filling in the blueprint with an example student
// let student ={
//     name: "Aisha",
//     age : 19,
//     courses:[ "Arts",'Computer',"Science"]
// };

// console.log(student);

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
// special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more 
// complex information, such as the details of different shapes.

//  solution:
// // Creating a custom type (type alias) for shapes that could be circles or rectangles
// type shapes= {
//     kind: "circle "| " rectangle";
//     radius?: number; //only for circle
//     width?: number; //only for rectangle
//     height?: number; //only for rectangle
// };
// // Describing a circle using our Shape type
// let circle: shapes ={
//     kind: "circle ",
//     radius: 6
// };
// // Describing a rectangle using our Shape type
// let rectangle: shapes={
//     kind: " rectangle",
//     width: 12,
//     height: 6
// };
// // showing what we described
// console.log(circle);// here's the circle
// console.log(rectangle);// here's the rectangle
// // We made a flexible program that can describe different shapes in detail.

// //DAY 22
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
// For example, if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string 
// with a number changes the number into a string for the joining.

// solution:
// This function mixes a text and a number into one text
// function combineStringAndNumber(text: string, number: number) : string{
//      // Joins the text and number into a single text
//     return text + number;
// }
// console.log(combineStringAndNumber("Age:" , 30)); //shows :"Age: 30"

// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover 
// from dividing them using the % sign.
//  For example, remainder(5, 2) should give 1.
// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. 
// It's handy for figuring out if numbers are even, odd, and more.

// solution:
// This function finds the leftover of dividing two numbers
// function remainder(num1: number, num2: number) : number {
//        return num1 % num2;
// }
// console.log(remainder(5,2)); //shows 1

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should 
// only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming 
// several things are true all at once.

// solution:

// This function sees if both inputs are true
// function checkBothTrue(val1: boolean, val2: boolean): boolean{
//     return val1 && val2;
// }
// console.log(checkBothTrue(true,false));

// 🚀 Day 23 Challenge: Start Coding! 🚀

// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a 
// string that represents a number (e.g., "5"). Return their sum as a number. 
// Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a 
// string that looks like a number, JavaScript converts the string to a number for the operation.

// solution:
// This function adds a number and a string that represents a number
// function addNumberAndString(num1:number, numberString: string): number {
//       return num1+ Number( numberString);
// }
// console.log(addNumberAndString(10,"5")); // shows 15

// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can 
// help keep numbers manageable.

// solution:
// This function multiplies two decimal numbers
// function multiplyDecimals(num1: number, num2:number) : number{
//        return Math.round((num1*num2) * 100) /100;
// }
// console.log(multiplyDecimals(0.3,0.8))

// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the 
// quotient and the remainder.Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both 
// in an object is a neat way to keep them together.

// solution:
// This function divides two numbers and finds the quotient and remainder
// function divideAndRemainder(dividend:number , divisor: number) :{ quotient: number; remainder: number} {
//      let quotient = Math.floor(dividend / divisor);
//      let remainder = dividend % divisor;
//      return{ quotient , remainder};
// }
// console.log(divideAndRemainder(10,3));

// 🚀 Day 24 Challenge: Start Coding! 🚀

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print
// numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let
//  inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts
//  of your code.

// solution:
//  This function prints numbers from 1 to 5 using a loop
// function printNumbersWithLet(){
//     for(let i = 1; i <= 5; i++ ){
//         console.log(i);
//     }
// }
// printNumbersWithLet();

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that 
// should not change once set. Using const helps make your code safer and more predictable.

// solution:

// Using `let` for a variable that can be reassigned
// let age = 25;
// age = 26;  // works fine because `let` allows reassignment
// console.log(age); //shows 26
// // Trying to reassign a `const`-declared variable
// const names:string ="Fatima";
// try{
//     name : "Ahsan"; // this line will cause an error
// } catch (error){
//     console.log("Error: Can't reassign a `const`-declared variable.");  // this message is shown
// }

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
// that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, 
// enhancing code organization and preventing accidental access from outside the block.

// solution:
// Demonstrating block scope
// {
//     let blockLet ="Visible insight the block";
//     const blockConst = "also only in insight the block";
//     console.log(blockLet); //works fine here
//     console.log(blockConst); //also work
// }
// try {
// console.log(blockLet); // This will fail
// }catch (error) {
//      console.log("`blockLet` is not accessible outside the block.");
//  }
// try {
//     console.log(blockConst);// this will also fail
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
// This shows that const and let both are variable safe insight the block why they're defined

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that
//  uses both let and const.Show how variables declared inside the block are not accessible outside of it.

// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, 
// enhancing code organization and preventing accidental access from outside the block.

// // Demonstrating block scope
// {
//     let blockLet = "visible inside the block";
//     const blockConst = "also only inside the block";
//     console.log(blockLet); // Works fine here
//     console.log(blockConst); // Also works fine here
// }

// try {
//     console.log(blockLet); // This will fail
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }

// try {
//     console.log(blockConst); // This will also fail
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
// // This shows that `let` and `const` keep variables safe inside the block where they're defined.


// 🚀 Day 25 Challenge: Start Coding! 🚀

// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let
//  and assign an initial value.Then, update its value within the same function and log both the initial and 
//  updated values.
// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed.
//  This is fundamental for keeping track of changing data within your programs.

// solution:

// // This function shows how to assign and update variable values
// function updateVariable() {
//      let number = 10; // initially assigns the value 10
//      console.log("Initial value:", number); // logs the initial values
//      number =20; //update the value to 20
//      console.log("Updated value:", number); // logs the updated value
// }
// updateVariable();

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. 
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value
//  while you swap them around. It's like juggling where you temporarily place one ball
//  in a basket to free up your hand.

// SOLUTION:
// // This function swaps the values of two variables
// function swapValues() {
//     let a =5, b= 10;
//     console.log("before swap : a=", a, "b =", b);
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("after swap: a=", a, "b =", b);
// }
// swapValues();

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations
//  (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your 
// code cleaner and more concise. Instead of writing x = x + 2,you can simply write x += 2.

// SOLUTION:
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 6; // starts with x = 6
    console.log("inital x :", x);
    x+= 2; // adds 2 in x
    console.log("after addition :", x );
    x-=1;
    console.log("after subtraction:", x);
    x*= 3;
    console.log("after multiplication:", x);
    x/= 2;
    console.log("after division:", x);
}
useCompoundOperators();


// 🚀 Day 26 Challenge: Start Coding! 🚀

// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as 
// parameters, adds them together, and returns the result. Show how you can call this function and log the result.
// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value).
//  They're like personal assistants that do a specific task for you and report back with the results.

// SOLUTION:

//  // This function adds two numbers and returns the result
// function addNumbers(num1: number, num2 : number): number {
//     return num1 + num2;
// }
// console.log(addNumbers(6,8));

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a
//  parameter and say hello. If no name is given,it should greet an anonymous user.

// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. 
// These values are used if no other value is provided, making functions more flexible.

// SOLUTION:

// This function greets a user by name, or greets an anonymous user if no name is provided
// function greetUser(name:string = "anonymous") {
//     // Says hello to the given name or to an anonymous user
//     console.log(`Hello, ${name}!`);
// }
// // Trying the function with a name and without
// greetUser("Alia");
// greetUser();

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations 
// by creating one ofeach that performs the same task, such as squaring a number.
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function 
// and can be called before they're defined, and expressions that are stored in variables and are called using
//  the variable name.

// SOLUTION:

 // Function declaration for squaring a number

// function squareDeclaration(number:number): number {
//     return number * number;
// };
// // // Function expression for squaring a number

// const squareExpression = function(number:number): number {
//    return number * number; 
// };
// console.log(squareDeclaration(6));
// console.log(squareExpression(6));


// 🚀 Day 27 Challenge: Start Coding! 🚀

// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with 
// properties for make, model, and year. Then, show how you can access the model property of the car.
// Explain & TIP: Objects are collections of properties, kind of like a box for storing related information.
//  You can create an object to group related data and access its properties using either dot notation or 
//  bracket notation.

// SOLUTION:

// let car ={
//     make: "Toyota",
//     model:"Carola",
//     year: "2018"
// }; 
// console.log(car.model);

// Question 80: Updating Object Properties: Add a property named color to the existing car object, 
// and then update the year property to 2021. Show how to perform these operations.
// Explain & TIP: You can add new properties to an object or change existing ones after the object
//  is created. This flexibility allows objects to be dynamically updated as needed.

// SOLUTION:

// let car ={
//          make: "Toyota",
//          model:"Carola",
//         year: "2018"
//      }; 
// car.color ="white";
// car.year ="2021";
// console.log(car);

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs 
// all of its properties and values.
// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful
//  for when you need to examine or display all the information an object holds.

// SOLUTION:    

//  // This function shows every detail about an object
// function logObjectProperties(obj: object) {
//     for (let property in obj) {
//          // Loops through each property in the object
//         console.log(`${property} "${obj[property]}`);
//     }
// } // Using the function with a car object
// logObjectProperties({make: "Toyota", model: "Carolla", year:2021, color: "white"});

// 🚀 Day 28 Challenge: Start Coding! 🚀

// Question 82: Find the Length of a String: Write a function that takes a string as an argument
//  and returns the number of characters in the string.
// Explain & TIP: The .length property of a string gives you the total number of characters it contains,
//  helping you understand more about the data you're working with.

// SOLUTION:

// This function counts how many characters are in a string
// function stringLength(str:string): number {
//     return str.length;
// }
// // Example: Measuring the length of a name
// console.log(stringLength("Fatima"));

// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, 
// converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of 
// all letters in a string, useful for formatting or comparing strings.

// SOLUTION:

// // This function changes a string to uppercase and then to lowercase
// function convertCase(str:string) {
//     let upperStr = str.toLocaleUpperCase();
//     let lowerStr = str.toLowerCase();
//     console.log("Uppercase:" ,upperStr , "Lowercase:", lowerStr);
// } // Example: Changing the case of "Hello World"
// convertCase("Hello World");

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all
//  instances of the word "JavaScript" with "TypeScript".
// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with
//  something else. By default, it only replaces the first occurrence,but you can use a global regex for 
//  multiple replacements.

// SOLUTION:

// // This function swaps "JavaScript" with "TypeScript" in a sentence
// function replaceJavaScriptWithTypeScript(sentence:string): string {
//     return sentence.replace(/Jawascript/g, "Typescript");
//       // Uses a regular expression with the 'g' flag for a global replacement
// }
// // Example: Changing a programming language name in a sentence
// console.log(replaceJavaScriptWithTypeScript("I love Jawascript and Jawascript is awesome!"));

// 🚀 Day 29 Challenge: Start Coding! 🚀

// Question 85: Finding the Position of a Substring:
//  Write a function that locates the first occurrence of the word "code" within any given string 
//  and returns its position.
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. 
// If the text isn't found, this method returns -1.

// SOLUTION:

// // This function finds where "code" first shows up in a text
// function findCodePosition(str:string): number {
//     return str.indexOf("code");
// }
// // Example: Searching within a sentence
// console.log(findCodePosition("Learn to code with Jawascript"));
// // It tells us the position number where "code" starts.

// Question 86: Checking for Text Presence: Create a function that checks 
// if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text,
//  returning a boolean (true or false).

// SOLUTION:

// This function checks if a sentence has "JavaScript" in it
// function hasJavaScript(str:string): boolean {
//     return str.includes("Jawascript");
// }
// console.log(hasJavaScript("I love coding in Jawascript!"));

// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start
//  and end positions.

//  // This function takes out the first 10 characters from any text
// function extractFirstTenChars(str: string): string {
//     return str.substring(0, 10); // Gets characters from start to position 10
// }

// // Example: Taking the first 10 characters of a sentence
// console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// // It gives us a smaller piece of the original text, just the beginning part.


// SOLUTION:

// function extractFirstTenChars(str:string): string {
//     return str.substring(0,10);
// }
// console.log(extractFirstTenChars("Hello,JavaScript world!"));
// shows only 10 characters

// 🚀 Day 30 Challenge: Start Coding! 🚀

// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and 
// returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. 
// It looks at the decimal part and decides whether to round up or down.

// SOLUTION:

// function roundedToNearestIntegar(num:number): number {
//     return Math.round(num);
// }
// console.log(roundedToNearestIntegar(6.5));
// console.log(roundedToNearestIntegar(2.4));

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number 
// (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like 
// strings into real numbers, allowing you to perform mathematical operations on them.

// SOLUTION:
// This function changes a string into a number
// function convertintonumber(str:string): number {
//     return parseFloat(str); // converts the string to a number
// }
// // Example: Turning a numeric string into a real number
// console.log(convertintonumber("123"));
// console.log(convertintonumber("58"));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
// (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn 
// out to be a number. It's useful for validating inputs or results of calculations.

// SOLUTION:
// function isValueNaN(value : any): boolean{
//   return isNaN(value);
// }
//  // Examples: Checking different values
// console.log(isValueNaN("hello world"));
// console.log(isValueNaN(17677));









