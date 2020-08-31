import {incrementCounter} from './../src/coincounter.js';

test('should return string of coin amounts', () => {
  let amount = 4.99;
   expect(incrementCounter(amount)).toEqual("4 Dimes:2 Quarters: 19");
});



  // //quarters dimes nickles pennies
  // let divider = (number) =>{
  //   if ((number % .25) === 0){
  //     number / .25
  //   }
  // };
//   function amountTocoins(amount, coins) 
// {
//   if (amount === 0) 
//   {
//     return [];
//   } 
//   else
//     {
//       if (amount >= coins[0]) 
//         {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//           coins.shift();
//           return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(1239, [25, 10, 5, 1]));
//   expect(answer).toEqual(2);
// });



