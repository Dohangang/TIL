/*
문제 설명:
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 
a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.


제한사항:
📌 0 ≤ a, b ≤ 40,000
📌 0을 제외하고 a, b는 0으로 시작하지 않습니다.
*/

function solution(binomial) {
  let arrayForm = binomial.split(" ");

  let a = parseInt(arrayForm[0]);
  let op = arrayForm[1];
  let b = parseInt(arrayForm[2]);

  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else {
    throw new Error("Invalid operator");
  }
}

// const ops = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
// };

// function solution(binomial) {
//   const [a, op, b] = binomial.split(" ");
//   return ops[op](+a, +b);
// }

// 개인적으로 문자열을 number로 바꾸기 위해 +를 붙이는 것을 좋아하지 않음
