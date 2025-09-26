/*
문제 설명:
정수 배열이 주어질 때, 가장 긴 연속 증가 부분 수열의 길이를 구하세요.

제한사항:
📌 배열의 길이는 1 이상 100 이하입니다.
📌 배열의 원소는 -1000 이상 1000 이하의 정수입니다.
*/

function solution(arr) {
  let maxLength = 1;
  let currLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currLength++;
      maxLength = Math.max(maxLength, currLength);
    } else {
      currLength = 1;
    }
  }

  return maxLength;
}
