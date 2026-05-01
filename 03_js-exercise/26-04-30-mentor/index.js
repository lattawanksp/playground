//========= 1.1 =========
let numbers = [40, 6, 18, 940, 305, 78];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});
console.log(`1.1 : ${sum}`);

//========= 1.2 =========
let avr = sum / numbers.length;
console.log(`1.2 : ${avr}`);

//========= 1.3 =========
numbers.sort((a, b) => {
  return a - b;
});
// numbers.forEach((sortedNum) => {
//   console.log(sortedNum);
// });

let midNum = 0;
midNum = Math.floor(numbers.length / 2); //3

let median = 0;
if (numbers.length % 2 == 0) {
  median = (numbers[midNum - 1] + numbers[midNum]) / 2;
} else {
  median = numbers[midNum];
}
console.log(`1.3 : ${median}`);

//========= 2 =========
let factorialNum = 9;
let result = 1;
for (let i = 1; i <= factorialNum; i++) {
  result *= i;
}
console.log(`2. : ${result}`);
