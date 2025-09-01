/*
문제 설명:
정수 배열 nums와 정수 k가 주어집니다.
nums에서 연속된 부분 수열(subarray) 중 합이 k 이상인 것들 중, 가장 짧은 길이를 구하세요.
만약 그런 부분 수열이 없다면 0을 출력하세요.

입출력 예시:
    Input: nums = [2, 3, 1, 2, 4, 3], k = 7
    Output: 2

    Input: nums = [1, 1, 1, 1, 1], k = 11
    Output: 0

제한사항:
📌
*/

function solution(k, nums) {
  let left = 0,
    sum = 0;
  let answer = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= k) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return answer === Infinity ? 0 : answer;
}

// function solution(k, nums) {
//   let answer = Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;

//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];

//       if (sum >= k) {
//         answer = Math.min(answer, j - i + 1);
//         break;
//       }
//     }
//   }

//   return answer === Infinity ? 0 : answer;
// }
