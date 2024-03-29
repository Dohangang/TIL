/*
문제 설명:
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한사항:
📌 x는 -10000000 이상, 10000000 이하인 정수입니다.
📌 n은 1000 이하인 자연수입니다.
*/

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// function solution(x, n) {
//   let answer = [];

//   if (x > 0) {
//     for (let i = x; i <= x * n; i = i + x) {
//       answer.push(i);
//     }
//   } else if (x < 0) {
//     for (let i = x; x * n <= i; i = i + x) {
//       answer.push(i);
//     }
//   }

//   if (x === 0) {
//     for (let i = 0; i < n; i++) {
//       answer.push(0);
//     }
//   }

//   return answer;
// }
