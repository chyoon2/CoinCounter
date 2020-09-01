// const incrementCounter = (amount) => {
export function incrementCounter(amount){
  if (isNaN(amount)) {
    return;
  }
  if (amount >= .25) {
    let q =Math.floor(amount /.25);
    return (incrementCounter(amount - (q * .25)) +  " Quarters: " + q);
  }
  else if (amount >= .1){
    let d =Math.floor(amount /.1);
    return (incrementCounter(amount - (d * .1)) + " Dimes: " + d);
  }
  else if (amount >= .05){
    let n =Math.floor(amount /.05);
    return (incrementCounter(amount - (n * .05)) + " Nickels: " + n);
  }
  else {
    let p = Math.floor(amount /.01);
    return ("Pennies: " + p);
  }
}

///////////////////////////////////////

const money = (change) => {
  return (amount) => {
    return Math.floor(amount/change);
  }
}
export const numberOfQuarters = money(.25);
export const numberOfDimes = money(.1);
export const numberOfNickels = money(.05);
export const numberOfPennies = money(.01);

//////////////////////////////


// function money() {
//   return function(numberOfQuarters) {
//     return function(numberOfDimes) {
//       return function(numberOfNickels) {
//         return function(numberOfPennies) {
//           return `Quaters: ${numberOfQuarters}, Dimes: ${numberOfDimes}, Nickels: ${numberOfNickels}, Pennies: ${numberOfPennies}!`
//         }
//       }
//     }
//   }
// }

// export const result = money();
// result("5");
// result("4");
// result("3");
// result("2");

// function welcome(salutation) {
//   return function(yourName) {
//     return `${salutation}! Nice to meet you, ${yourName}!`
//   }
// }

// const greeting = welcome("howdy");
// greeting("John");


// function money(change){
// return function(amount){
//  return Math.floor(amount/change);
//  }
//  }

// const multiplier = (numberToMultiplyBy) => {
//   return (numberToMultiply) => {
//     return numberToMultiplyBy * numberToMultiply;
//   }
// }
// const doubler = multiplier(2);
// const tripler = multiplier(3);
// const quadrupler = multiplier(4);