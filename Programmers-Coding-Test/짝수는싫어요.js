/*
문제 설명:
정수 n이 매개변수로 주어질 때, 
n 이하의 홀수가 오름차순으로 담긴 배열을 
return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ n ≤ 100
*/

function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  return result;
}

// const solution = n => Array.from({ length: Math.floor(n / 2) + 1 }, (_, index) => 2 * index + 1);
