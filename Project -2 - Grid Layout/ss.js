// const players = [
//       ["shohag", 26, "Pabna"],
//       ["sajib", 35, "Chuadanga"],
//       ["sadhon", 63, "Faridpur"],
//       ["munna", 19, "Meherpur"]
// ]

// const oldPlayers = [];
// const newPlayers = []
// for(let i = 0; i< players.length; i++){
//       for(let j = 0; j<players[i].length; j++){
//             if(players[i][1] > 27){
//                   oldPlayers.push(players[i][j])
//             }else{
//                   newPlayers.push(players[i][j])
//             }
//       }
// }
// console.log(oldPlayers);
// console.log(newPlayers);

// let fact = 3;
// let sum = 1
// for(let i= 1; i<= fact; i++){
//       sum = sum * i
// }
// console.log(sum);

// FizzBuzz with Bang
// for(let i =1; i<=50; i++){
//       if(i % 5 ==0 && i %3 == 0){
//             console.log(`FizzBuzz`);
//       }else if (i % 7 == 0){
//             console.log(`Bang`);
//       }else if(i % 3 == 0){
//             console.log(`Fizz`);
//       }else if (i % 5 == 0){
//             console.log(`Buzz`);
//       }else{
//             console.log(i);
//       }
// }

// Palindrome check without converting string
// let num = 123034952874;
// let sum = 0
// let a = num.toString().split("")

// console.log(`digit : ${a.length}`);
// for(let i = 0; i<a.length; i++){
//       let number = Number(a[i].toString())
//       sum += number
// }
// console.log(`sum : ${sum}`);

// let nums = 8213472985175538;
// let sum = 0;
// let singleDigit = 0;

// let string = nums.toString().split("");

// for (let i = 0; i < string.length; i++) {
//      let numbers = Number(string[i]);
//      sum += numbers;
// }

// let sumString = sum.toString().split("");

// for (let j = 0; j < sumString.length; j++) {
//      let sumNumbers = Number(sumString[j]);
//      singleDigit += sumNumbers;
// }

// let total = 0;
// let digit = singleDigit.toString().split("");
// digit.forEach((el) => {
//      digitNumber = Number(el);
//      total += digitNumber;
// });

// console.log(`Total length: ${string.length}`);
// console.log(`sum: ${sum}`);
// console.log(`2nd layer sum: ${singleDigit}`);
// console.log(`3th layer sum: ${total}`);



