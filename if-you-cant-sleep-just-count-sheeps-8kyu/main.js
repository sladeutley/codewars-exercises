// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

// Note:
// You will always receive a positive integer.

var countSheep = function(num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    string += `${i + 1} sheep...`;
  }
  return string;
};

console.log(countSheep(3));
