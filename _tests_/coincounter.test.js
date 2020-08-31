test('should test the sum of two numbers', () => {
  let amount = 4.99;
  // const incrementCounter = (amount) => {
    function incrementCounter(amount){
    if (isNaN(amount)) {
      return;
    }
    if (amount >= .25) {
      console.log(amount);
      let q = Math.floor((amount /.25).toFixed());
      console.log(q);
      return (incrementCounter(amount - (q * .25)), q);
    }
    else if (amount >= .1){
      console.log(amount);
      let d = Math.floor((amount /.1).toFixed(1));
      console.log(d);
      return incrementCounter(amount - (d * .1));
    }
    else if (amount >= .05){
      let n = Math.floor((amount /.05).toFixed(2));
      return incrementCounter(amount - (n * .05));
    }
    else {
      let p = Math.floor((amount /.01).toFixed(2));
      return p;
    }
    // else {
      // console.log(`you will need ${p} pennies, ${n} nickels, ${d} dimes and ${q} quarters`);
      // return
    // }
  }
  incrementCounter(amount);
  expect(q).toEqual(2);
  expect(d).toEqual(2);
  expect(n).toEqual(2);
  expect(p).toEqual(2);
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



