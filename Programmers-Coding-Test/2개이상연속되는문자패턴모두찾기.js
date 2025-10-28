/*
문제 설명:
문자열이 주어졌을 때,
같은 문자가 2번 이상 연속된 구간들을 모두 찾아 배열로 반환하세요.

제한사항:
📌 대소문자를 구분합니다 ('A' ≠ 'a').
📌 공백(' ')도 문자로 취급합니다.
📌 결과는 문자열이 등장한 순서대로 정렬되어야 합니다.
📌 2개 미만으로 연속된 문자는 결과에 포함하지 않습니다.
*/

function solution(str) {
  if (str.length === 0) return [];

  const result = [];
  let startIdx = 0;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== str[i - 1]) {
      const length = i - startIdx;
      if (length >= 2) {
        result.push(str.slice(startIdx, i));
      }
      startIdx = i;
    }
  }

  return result;
}
