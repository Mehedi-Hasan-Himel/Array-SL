/* 
@Title: Traverse Array Elements
*/

const arr = [47, 50, 78, 63, 99, 14, 55, 39];
const n = arr[3];
const m = arr[2];
const x = 1,
  y = 0;
// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

/* 

* 1 2 3 4 5 

* 0 1 2 3 4 

*
* 'A' 'B' 'C' 'D'
* 0 1 2 3 
*
* 1 B 3 5 F 0 true 
* 1 2 3 4 5 6 
*/

//  Simple Traverse

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//  Array Sum & Avg
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Sum = `, sum);

const avg = sum / arr.length;
console.log(`Avg = `, avg);

// Find Large Number

let largestNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}

console.log(`largestNumber`, largestNumber);

// Find Smallest Number

let smallestNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i < smallestNumber]) {
    smallestNumber = arr[i];
  }
}

console.log(`smallestNumber`, smallestNumber);
