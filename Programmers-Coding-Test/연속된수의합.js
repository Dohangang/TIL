/*
문제 설명:
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 
연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.


제한사항:
📌 1 ≤ num ≤ 100
📌 0 ≤ total ≤ 1000
📌 num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
*/

function solution(num, total) {
  const start = Math.floor(total / num) - Math.floor((num - 1) / 2);
  return Array.from({ length: num }, (_, i) => start + i);
}

// function solution(num, total) {
//   const a = ((2 * total) / num + 1 - num) / 2;
//   return Array(num)
//     .fill()
//     .map((_, i) => i + a);
// }
