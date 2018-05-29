// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
  // let digitsArr = digits.split("").map(Number);
  let digitsArr = digits.split("");
  // let digitz = digits.split("");
  // console.log('digitz',digitz);
  // let digitsArr = digitz.forEach(digit => {
  //   console.log('digit',digit);
  //   +digit
  // })
  console.log('digitsArr',digitsArr);
  let arr = [];
  for (let i = 0; i < digitsArr.length -4; i++) {
    arr.push(+(digitsArr[i] + digitsArr[i+1] + digitsArr[i+2] + digitsArr[i+3] + digitsArr[i+4]));
    
  }
  // console.log('digitsArr', digitsArr);
  // arr.map(a => {
  //   return +a
  // })
  console.log('arr',arr);
  // console.log('digit',digit); 
}

// console.log(solution("1234567890"))
solution("1234567890");