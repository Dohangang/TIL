/*
문제 설명:
문자열이 주어졌을 때,
같은 문자가 연속으로 반복된 구간 중 가장 긴 길이를 구하세요.

제한사항:
📌 대소문자를 구분합니다. ('A'와 'a'는 다른 문자로 취급)
📌 공백(' ')도 문자로 취급합니다.
📌 문자열이 비어있으면 0을 반환합니다.
*/

function solution(str) {
  if (str.length === 0) return 0;

  let maxLen = 1;
  let currentLen = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentLen++;
    } else {
      currentLen = 1;
    }
    maxLen = Math.max(maxLen, currentLen);
  }

  return maxLen;
}
