/*
문제 설명:
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
두 값이 같을 경우 그 값을 return합니다.


제한사항:
📌 5 ≤ num_list의 길이 ≤ 50
📌 -9 ≤ num_list의 원소 ≤ 9
*/

function solution(num_list) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i += 2) {
    odd += num_list[i];
  }

  for (let i = 1; i < num_list.length; i += 2) {
    even += num_list[i];
  }

  return odd <= even ? even : odd;
}

// function solution(num_list) {
//   return Math.max(
//     ...num_list.reduce(
//       ([o, e], c, i) => (i % 2 ? [o + c, e] : [o, e + c]),
//       [0, 0]
//     )
//   );
// }
