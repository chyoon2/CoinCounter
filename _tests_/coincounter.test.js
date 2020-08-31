import {incrementCounter, numberOfNickels} from './../src/coincounter.js';
import {numberOfQuarters, numberOfDimes, numberOfPennies} from './../src/coincounter.js';

test('should return string of coin amounts', () => {
  let amount = 4.99;
  expect(incrementCounter(amount)).toEqual("Pennies: 4 Dimes: 2 Quarters: 19");
});

test('should return coin amounts for dollar inputs', () => {
  let amount = 4.99;
  expect(numberOfQuarters(amount)).toEqual(19);
});

test('test for array values', () => {
  let amount = 2342.99
  let arr = [numberOfQuarters(amount), numberOfDimes(amount), numberOfPennies(amount), numberOfNickels(amount)]
  expect(arr[0]).toEqual(9371);
  expect(arr[1]).toEqual(23429);
  expect(arr[2]).toEqual(234298);
  expect(arr[3]).toEqual(46859);
});

test('new tests', () => {
  function neww() {
    return function(Quarters) {
      return `Quaters: ${Quarters / 2}`
      
    return function(Dimes) {
      return `Dimes: ${Quarters}`
    }
      // return function(Dimes) {
      //   return function(Nickels) {
      //     return function(Pennies) {
      //       return `Quaters: ${Quarters}, Dimes: ${Dimes}, Nickels: ${Nickels}, Pennies: ${Pennies}!`
      //     }
      //   }
      // }
    }
  }
  const result = neww();
  expect(result("5")).toEqual("");
});

// expect(result("4")).toEqual("");
// expect(result("3")).toEqual("");
    // expect(result("2")).toEqual("");