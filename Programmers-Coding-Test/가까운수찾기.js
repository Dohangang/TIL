/*
문제 설명:
정수 배열 arr과 정수 n이 주어집니다.
arr에 들어있는 수 중 n과 가장 가까운 수를 반환하는 함수를 작성하세요.
만약 가까운 수가 여러 개라면, 그 중 가장 작은 수를 반환합니다.

제한사항:
📌 1 ≤ x ≤ y ≤ 1,000,000
📌 1 ≤ n < y
*/

function solution(arr, n) {
  return arr.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);
    if (diffA === diffB) return a - b;
    return diffA - diffB;
  })[0];
}
