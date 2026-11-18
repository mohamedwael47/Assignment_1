// //Q1;
// var x = "123";
// console.log(Number(x) + 7);

// //Q2
// function check(z) {
//   if (!z) {
//     return "Invalid";
//   } else return "truthy value";
// }
// console.log(check(0));
// console.log(check(null));
// console.log(check(false));
// console.log(check(undefined));
// console.log(check(""));
// console.log(check(NaN));
// console.log(check(10)); // true value

// //Q3
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   const element = i;
//   console.log(element);
// }

// //Q4
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var filter = arr.filter(function (num) {
//   return num % 2 == 0;
// });
// console.log(filter);

// //Q5
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];
// var arr3 = [...arr1, ...arr2];
// console.log(arr3);

// //Q6
// var day = "2";
// switch (day) {
//   case "1":
//     console.log("saturday");
//     break;
//   case "2":
//     console.log("sunday");
//     break;
//   case "3":
//     console.log("monday");
//     break;
//   case "4":
//     console.log("tuesday");
//     break;
//   case "5":
//     console.log("wednesday");
//     break;
//   case "6":
//     console.log("thursday");
//     break;
//   case "7":
//     console.log("friday");
//     break;
//   default:
//     console.log("Erorr");
//     break;
// }

// //Q7
// var arr = ["mo", "mo wael", "momo"];
// var result = arr.map((calc) => calc.length);
// console.log(result);

// //Q8
// function check(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Divisible by both");
//   } else console.log("Not Divisible by both");
// }
// check(30);

// //Q9
// var square = (Number) => Number ** 2;
// console.log(square(4));

// //Q10
// const person = {
//   username: "mohamed",
//   age: "22",
// };
// function format(person) {
//   var { username, age } = person;
//   return `${username} is ${age} years old`;
// }
// console.log(format(person));

// // Q11
// function calc(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(calc(1, 2, 3, 4));

// // //Q12
// function time() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   });
// }
// time().then(() => {
//   console.log("Success");
// });

// //Q13
// var arr = [1, 3, 7, 2, 4];
// var large = arr.reduce((a, b) => {
//   return a > b ? a : b;
// });
// console.log(large);

// // Q14
// var id = {
//   username: "mohamed",
//   Age: 22,
// };

// function arr(Obj) {
//   return Object.keys(Obj);
// }
// console.log(Object.keys(id));

// // //Q15
// var fox = "The quick brown fox";
// var space = fox.split(" ");
// console.log(space);

//// Part2

////Q1
/*
The forEach and for...of
 are both used to loop through array elements, but the difference is that forEach uses a callback function
  and we cannot use break or continue with it

The for...of is a normal loop, and we can use break and continue to control the loop
*/

// Q2
/*
Hoisting means that JavaScript moves variable and function declarations to the top of their scope before executing the code
console.log(x);
var x = 10; 

The Temporal Dead Zone is the period between entering the scope and declaring a let or const variable, where we cannot access the variable
console.log(x); 
let x = 10;
*/

//Q3
/*
== compares values only but === compares values and data types
*/

//Q4
/*
try-catch is used to handle errors and stop the code from continuing when an error happens
It is important in async operations to catch errors and handle them properly
*/

//Q5
/*
Conversion: Changing a data type manually
Coercion: JavaScript changes the data type automatically
*/
