// //Call  stack

// import { log } from "three";

// // Whats the output

// // console.log("Start");

// // setTimeout(() => {
// //   console.log("Timeout");
// // },0);

// // console.log(("End"));

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// },0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// Multiple Promise

// Promise.resolve().then(() => {
//   console.log("1");
// }).then(() => {
//   console.log("2");
// })
// setTimeout(() => {
//   console.log("3");
// },0);

// console.log("A");

// Call stack => it meanss jo code likha hai turant run hoga'
// Microtask queue =>  Promis(.then, await)
// Macrotask Queue => setTimeout, setInterval