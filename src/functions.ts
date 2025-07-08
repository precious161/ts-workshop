// Functions in TS

// a function to add two numbers
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addNum(5, 7));

// a function to get the maximum number
let n: number[] = [3, 4, 6, 2, 1, 7];
let max: number = n[0];
function theMax(): number {
  for (let i: number = 0; i < n.length; i++) {
    if (n[i] > max) {
      max = n[i];
    }
  }
  return max;
}
console.log(max);
