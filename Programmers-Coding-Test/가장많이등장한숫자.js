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

// -- ountMap.set(num, (countMap.get(num) || 0) + 1) 설명
//   키, 값의 쌍을 추가 및 업데이트 하기 위함. 키에 대한 값이 있다면 그 값을 가져오고, 없다면 undefined이기 때문에 0으로 처리한다. 후에 +1을 처리

// -- countMap.entries()는 [Key, value] 형태로 반환한다 -> [ [5, 2], [4, 1], [3, 2] ]
// .filter(([_, count]) => count === maxCount) 에서 쓰지 않을 매개 변수를 관례적으로 '_'와 같이 표시. 안써주면 두번 째 매개변수로 활용을 못함
// .map(([num]) => num) 에 대한 이해는 [num] = [5, 2] 과 num = 5 이 같은 의미라는 걸 알면 된다. 구조 분해 할당
