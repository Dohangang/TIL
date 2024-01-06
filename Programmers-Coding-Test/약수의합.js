/*
문제 설명:
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한사항:
📌 n은 0 이상 3000이하인 정수입니다.
*/

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    n % i == 0 ? (answer = answer + i) : (answer = answer);
  }
  return answer;
}

// function solution(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//       if (num % i === 0) sum += i
//   }
//   return sum
// }
