/*
문제 설명:
숫자로 이루어진 배열 nums와 목표 값 target이 주어집니다. 배열에서 두 수를 더해 target을 
만들 수 있는 두 숫자의 인덱스(위치)를 찾아 배열로 반환하는 함수를 작성하세요.

제한사항:
📌 정답은 단 하나만 존재한다고 가정합니다.
📌 같은 요소를 두 번 사용할 수 없습니다.
*/

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}
