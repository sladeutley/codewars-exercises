// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
//  code:
// def longest_consec(strarr, k):

// let strarr = (["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);

let strarr = [
  "zone",
  "abigail",
  "theta",
  "form",
  "libe",
  "zas",
  "theta",
  "abigail"
];

let possibilities = [];
let k = 2;

function getLongestConsec(arr) {
  let len = [];
  let strings = [];
  
  for (let i = 0; i < arr.length - k + 1; i++) {
    let stringMaker = "";
    for (let j=0; j < k; j++) {
      stringMaker += arr[i + j];
    }
    console.log('stringMaker',stringMaker);
    len.push(stringMaker.length);
    strings.push(stringMaker);
  }

  let indx = len.indexOf(Math.max(...len));
  let longestConsec = strings[indx];

  return longestConsec;
}

console.log("longest string", getLongestConsec(strarr));


// console.log('longestConsec',longestConsec);

// console.log('indx',indx);
// console.log(Math.max(...len));

// console.log('len',len);
// console.log('strings',strings);

// for (let i = 0; i < strarr.length - 1; i++) {
//   let obj = {len: [], strings: []};
//   // for (let j = 0; i < k; k++) {

//   // }
//   // obj.len = ( (strarr[i] + strarr[i + (k-1)]).length )
//   // obj.strings = (strarr[i] + strarr[i + (k-1)])
//   obj.len = ( (strarr[i] + strarr[i + 1]).length )
//   obj.strings = (strarr[i] + strarr[i + 1])
//   possibilities.push(obj);
// }

//probably have to loop
// possibilities.sort(function(a, b) {
//   return b - a;
// });

// console.log('possibilities',possibilities);

// let starObj = [];
// strarr.forEach(star => {
//   starObj.key = star;
//   console.log('starObj',starObj);
// })
// console.log('strarr',strarr);

// let longestString = null;

// for (let i = 0; i < star.length; i++) {
//   for(let j=0; j < )
//         let posibility = star[i].length + star[i + 1].length;
// }

// for (let i = 0; i < star.length; i++) {
//    let posibility${} = star[i].length + star[i + 1].length;

// function longestConsec(star) {
//     for (let i = 0; i < star.length; i++) {
//       let posibilityA = star[i].length + star[i + 1].length;
//       let posibilityB = star[i + 1].length + star[i + 2].length
//       if (posibilityA > posibilityB) {
//         longestString = posibilityA;
//         console.log('longestString',longestString);
//       }
//       // console.log('star[i].length',star[i].length);
//       // console.log('star[i + 1].length',star[i + 1].length);
//       // if ((star[i].length + star[i + 1].length) > (star[i + 1].length + star[i + 2].length)) {
//       //   longestString = star[i] + star[i +1];
//       // }
//     }
// }

// longestConsec(strarr);
// console.log('longestString',longestString);

// console.log('strarr',strarr);
// // longestConsec(strarr);
