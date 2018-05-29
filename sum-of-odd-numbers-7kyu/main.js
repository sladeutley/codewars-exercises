// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n * n * n;
}

// function rowSumOddNumbers(n) {
//   let rowArr = [];
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     // arrIndex += 1;
//     // console.log("arrIndex", arrIndex);
//     for (let j = 0; j < n; j++) {
//       // let sum = 0;
//       // rowArr.push((sum += rowArr[i] + 2));
//       rowArr[n].push((rowArr[i] + 2));
//       console.log("rowArr", rowArr);
//     }
//   }
//   return sum;
// }


console.log(rowSumOddNumbers(3));
