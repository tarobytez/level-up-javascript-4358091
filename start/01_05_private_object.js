const username = Symbol("username");
const password = Symbol("password");

// The square brackets make it a sy
const user = {
  [username]: "johndoe",
  [password]: "12345",
  age: 27
};

console.log(user.username);
console.log(user.password);
