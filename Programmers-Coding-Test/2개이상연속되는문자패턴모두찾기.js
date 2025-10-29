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

// start를 통해서 필요한 부분을 한쪽에 저장해놓는 생각을 자주 생각하면 좋은 것 같다.
// 마지막 요소까지 고려하여 +1을 하는 것을 고려
// slice(start, end) -> start 이상 end 미만 ->  "abcdef".slice(1, 4) → "bcd"
// 'a' !== undefined → true

// 1. 연속되는 문자의 길이를 센다
// 2. 연속이 끊기면 이전 구간을 검사한다
// 3. 2개 이상이면 결과에 추가
// 4. 새 구간 시작점 업데이트
