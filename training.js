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
const getTimeWithOffset = (offset) => {
  const meAndUtcDifference = new Date().getTimezoneOffset() / 60;
  const res = new Date(
    new Date().setHours(new Date().getHours() + meAndUtcDifference + offset)
  );

  return res;
};
console.log(func(0));

// function wordsToMarks(str)
// {
//   var sum = 0;
//   for (let i = 0; i < str.length; i++)
//     sum += str.charCodeAt(i) - 96;
//   return sum;
// }
