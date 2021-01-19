// lesson 34 create user form

// algo
// 1. add event handler
// 2. read form
// 3. make POST request
// 4. validate user form

// inp: url, obj(settings)
// out: promise
const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';
const user = {
  email: 'ksenia@gmail.com',
  firstName: 'Ksenia',
  lastNAME: 'Belikova',
  age: 20,
  city: 'Kiev',
};
fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;',
  },
  body: JSON.stringify(user),
})
  .then((data) => data.text())
  .then((data) => console.log(data)); // читаем тело ответа

// then input: callback(inp: romise result out: anything)
// then output: promise
