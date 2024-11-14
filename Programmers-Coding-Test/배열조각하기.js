/*
문제 설명:
정수 배열 arr와 query가 주어집니다.

query를 순회하면서 다음 작업을 반복합니다.
    짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
    홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.

위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 5 ≤ arr의 길이 ≤ 100,000
      0 ≤ arr의 원소 ≤ 100
📌 1 ≤ query의 길이 < min(50, arr의 길이 / 2)
      query의 각 원소는 0보다 크거나 같고 남아있는 arr의 길이 보다 작습니다.
*/

function solution(arr, query) {
  let answer = [...arr];

  for (let i = 0; i < query.length; i++) {
    let idx = query[i];

    i % 2 == 0
      ? (answer = answer.slice(0, idx + 1))
      : (answer = answer.slice(idx));
  }

  return answer;
}

// function solution(arr, query) {
//   query.forEach((v, i) => {
//     if (i % 2) {
//       arr = arr.slice(v);
//     } else {
//       arr = arr.slice(0, v + 1);
//     }
//   });
//   return arr;
// }

// map() → 너무 대충 알고 있음, return 값이 있음, let a = b.map(), b 원본에 변경이 없음
// forEach() → map과 같이 배열을 순회하지만 return 값이 없음, b.forEach(), b 원본을 변경
