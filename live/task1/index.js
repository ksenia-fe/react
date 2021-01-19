const requestUserData = (userId) =>
  new Promise((resolve, reject) => {
    console.log('promise called');
    resolve(userId);
    // if (userId === 'broken') {
    //   setTimeout(() => {
    //     reject(new Error('User not found'));
    //   }, 500);
    // } else {
    //   setTimeout(() => {
    //     resolve({
    //       name: 'John',
    //       age: 17,
    //       userId,
    //       email: `${userId}@example.com`,
    //     });
    //   }, 1000);
    // }
  });
const res = requestUserData('222');

console.log('start');
console.log(requestUserData('fgh'));
console.log('finish');

Promise.resolve(17);
