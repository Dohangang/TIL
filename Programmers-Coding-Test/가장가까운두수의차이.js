/*
문제 설명:
정수 배열 arr이 주어졌을 때,
배열 내에서 가장 차이가 작은 두 수의 차이값을 반환하세요.

제한사항:
📌 배열 길이 ≥ 2
📌 각 원소는 1 이상 10,000 이하의 정수
📌 시간 복잡도: O(n log n) 이하로 구현할 것 (즉, 정렬은 허용됨)
*/

function solution(arr) {
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}
