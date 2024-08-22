/*
문제 설명:
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 1 ≤ arr의 길이 ≤ 1,000
      0 ≤ arr의 원소 ≤ 1,000,000
📌 1 ≤ queries의 길이 ≤ 1,000
      0 ≤ i < j < arr의 길이
*/

function solution(arr, queries) {
  let answer = arr;

  for (let i = 0; i < queries.length; i++) {
    let storage = answer[queries[i][0]];
    answer[queries[i][0]] = answer[queries[i][1]];
    answer[queries[i][1]] = storage;
  }

  return answer;
}

// function solution(arr, queries) {
//   queries.forEach(([a, b]) => {
//     [arr[a], arr[b]] = [arr[b], arr[a]];
//   });
//   return arr;
// }

// 주석처리 한 코드가 더 간결하다. 첫번째 함수에서는 storage에 [...arr]이 더 좋은 작성이었을 것
