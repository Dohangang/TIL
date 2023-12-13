/*
문제 설명:
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 
return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ n ≤ 1,000,000
*/

function solution(n) {
  let answer = n ** 0.5;

  if (Number.isInteger(answer)) {
    return 1;
  }

  return 2;
}

// (n**0.5)와 (n**1/2)의 값이 다른 이유는 n**1이 먼저 계산되기 때문이다.

// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }

// function solution(n) {
//   return Math.sqrt(n) % 1 === 0 ? 1 : 2;
// }
