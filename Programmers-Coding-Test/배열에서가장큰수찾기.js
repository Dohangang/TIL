/*
문제 설명:
주어진 숫자 배열에서 가장 큰 수를 찾는 함수 findMaxNumber를 작성하세요.

제한사항:
📌 함수는 숫자로 이루어진 배열을 인자로 받습니다.
📌 배열에 있는 숫자 중 가장 큰 값을 반환해야 합니다.
📌 만약 빈 배열이 주어진다면, null을 반환하세요.
*/

function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// function findMaxNumber(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   return Math.max(...arr);
// }
