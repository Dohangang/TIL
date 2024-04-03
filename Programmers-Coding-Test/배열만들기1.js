/*
문제 설명:
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 
오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항:
📌 1 ≤ n ≤ 1,000,000
📌 1 ≤ k ≤ min(1,000, n)
*/

function solution(n, k) {
  let answer = [];

  for (let i = 1; i * k <= n; i++) {
    answer.push(i * k);
  }

  return answer.sort((a, b) => a - b);
}
