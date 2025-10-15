/*
문제 설명:
정수 배열 arr이 주어졌을 때,
가장 많이 등장한 숫자를 반환하는 함수를 작성하세요.

만약 가장 많이 등장한 숫자가 여러 개라면, 그 중 가장 작은 수를 반환하세요.

제한사항:
📌 배열의 길이는 1 이상 1000 이하
📌 각 원소는 1 이상 1000 이하의 정수
📌 시간 복잡도는 O(n) 또는 O(n log n) 이내로 구현하세요.
*/

function solution(arr) {
  const countMap = new Map();

  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let maxCount = Math.max(...countMap.values());

  const numberOfMaxCount = [...countMap.entries()]
    .filter(([_, count]) => count === maxCount)
    .map(([num]) => num);

  return Math.min(...numberOfMaxCount);
}
