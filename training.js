// function Constructor() {
//   this.name = 'Tom';
//   this.city = 'NY';
// }

// const user = new Constructor();

// console.log(new Constructor()); // {name: Tom, city: NY}
// console.log(user.city); // NY

// console.log(Object.getPrototypeOf(user));
// console.log(user.__proto__); //same as previous line

// const f = Promise.reject(new Error('error', SyntaxError));

// f.catch((err) => console.log(err.stack));

// посчитать время с указанной разницей
// const getTimeWithOffset = (offset) => {
//   const meAndUtcDifference = new Date().getTimezoneOffset() / 60;
//   const res = new Date(
//     new Date().setHours(new Date().getHours() + meAndUtcDifference + offset)
//   );

//   return res;
// };
// console.log(func(0));

// function wordsToMarks(str)
// {
//   var sum = 0;
//   for (let i = 0; i < str.length; i++)
//     sum += str.charCodeAt(i) - 96;
//   return sum;
// }

// str = 'no dots';
// console.log(str.replace(/\./g, '-'));

// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;
//   let res;

//   if (score <= 60) {
//     res = 'F';
//   } else if (score <= 70) {
//     res = 'D';
//   } else if (score <= 80) {
//     res = 'C';
//   } else if (score <= 90) {
//     res = 'B';
//   } else if (score <= 100) {
//     res = 'A';
//   }

//   return res;
// }

// console.log(getGrade(58, 0, 93));

// function findDifference(a, b) {
//   const aCubesSum = a.reduce((a, b) => a * b);
//   const bCubesSum = b.reduce((a, b) => a * b);

//   return Math.abs(aCubesSum - bCubesSum);
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// const f = 'e';

// console.log('e', f.charCodeAt(0) - 64);

// function makeNegative(num) {
//   return num < 0 ? num : num * -1;
// }

// function positiveSum(arr) {
//   return arr.filter((el) => el >= 0).reduce((a, b) => a + b);
// }

// console.log(positiveSum([1, 2, 4, 55, -6, -4, 5]));

// const str3 = '445 bbbdvf';

// console.log(parseInt(str3));

// function position(letter) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }

// console.log([1, 3, 89, 35, 8, 3, 1].sort((a, b) => b - a));

// console.log([1, 2, 567, 32, 1, -5].sort());
// const one = 'dscf';
// const two = 'dvcz';
// console.log(one.concat(two));

// function pyramid(balls) {
//   let count = 0;
//   let ballsPerRow = 0;

//   for (let x = 0; x < balls; x++) {
//     count++;
//     ballsPerRow = ballsPerRow + count;
//     if (ballsPerRow == balls) {
//       return count;
//     }
//     if (balls < ballsPerRow) {
//       return count - 1;
//     }
//   }
// }

// console.log(pyramid(7));

// function nbYear(p0, percent, aug, p) {
//   var count = 0;
//   while (p0 < p) {
//     p0 += p0 * (percent / 100) + aug;
//     count++;
//   }
//   return count;
// }

// ------------------------- MEETING --------------------------
// inp: arr
// out: number

//algo
//1 create empty array
//2 iterate given array and find which numbers are missed
//3 push it to created arr
//4 take the first number from it

function nextId(ids) {
  return ids.map((el, ind) => {
    return el;
  });
}

console.log(nextId([0, 1, 2, 3, 5]));
