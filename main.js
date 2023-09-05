// var , let and const
// let is more recommended due to smaller scope
if (true) {
  var a = 10;
  let b = 20;
  const c = 1.2; //Cant not reassign !
}
//console.log(a); // Can log a
//console.log(b); // Cannot log b because only available in the "if" block of code

// Template Literals
const name = "Maderin";
const num1 = 3;
const num2 = 7;
const message = `Hello ${name}
    And ${num1} plus ${num2} is equal to ${num1 + num2} 
`;
//console.log(message);

//Objects
const user = {
  id: 1,
  name: "Maderin Lovecraft",
  age: 20,
  score: 99,
  sports: ["boxing", "gym"],
};
// Object to JSON
const json = JSON.stringify(user);
// Object to JSON
const object = JSON.parse(json);

//Destructing Assignment and Renaming Variables
const { name: username, sports } = user;
// console.log(username, sports); // Maderin Lovecraft [ 'boxing', 'gym' ]

//Skipping Elements
const number = [1, 2, 3, 4, 5, 6];
const [, , n3, , n6, n7] = number;
//console.log(n3, n6, n7); // 3 5 6

//Rest Syntax
const [n1, n2, ...other] = number;
const { age: userage, ...otherProps } = user;
// console.log(n1, n2, other); //1 2 [ 3, 4, 5, 6 ]
// console.log(userage, otherProps);
// 20 {
//   id: 1,
//   username: 'Maderin Lovecraft',
//   score: 99,
//   sports: [ 'boxing', 'gym' ]
// }

//Higher Order function
function map(array, callback) {
  const result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
}

const array = [1, 2, 3, 4, 5];
const result = map(array, (num) => num * num);
//console.log(result); // [1, 4, 9, 16, 25]
