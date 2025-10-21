/*
문제 설명:
문자열이 주어질 때, 가장 많이 등장한 문자를 찾아 반환하세요.
단, 공백(' ')은 무시하고, 가장 많이 등장한 문자가 여러 개면 알파벳 순으로 가장 앞선 문자를 반환합니다.

제한사항:
📌 대소문자를 구분하지 않습니다. (A와 a는 같은 문자로 취급)
📌 문자열이 비어있거나 문자가 없으면 "" (빈 문자열)을 반환합니다.
📌 Map 또는 Object를 활용하면 좋습니다.
*/

function solution(str) {
  const countMap = new Map();

  for (const ch of str.toLowerCase()) {
    if (ch === " ") continue;
    countMap.set(ch, (countMap.get(ch) || 0) + 1);
  }

  if (countMap.size === 0) return "";

  const maxCount = Math.max(...countMap.values());

  const candidates = [...countMap.entries()]
    .filter(([_, count]) => count === maxCount)
    .map(([ch]) => ch);

  candidates.sort();
  return candidates[0];
}

// function solution(str) {
//   const freq = new Array(26).fill(0);

//   for (const ch of str.toLowerCase()) {
//     if (ch < 'a' || ch > 'z') continue;
//     freq[ch.charCodeAt(0) - 97]++;
//   }

//   const maxCount = Math.max(...freq);
//   if (maxCount === 0) return "";

//   const idx = freq.indexOf(maxCount);
//   return String.fromCharCode(idx + 97);
// }

// new Array(26).fill(0) -> 길이 26짜리 배열을 만들고, 모든 요소를 0으로 채움
// if (ch < 'a' || ch > 'z') -> 문자가 'a'~'z'범위 밖인지 확인하는 조건식, JS에서는 문자끼리 비교 시 자동으로 유니코드(아스키 코드) 값을 비교함
// charCodeAt(index) -> 문자열의 index번째 문자의 유니코드(아스키) 코드 값을 반환
// String.fromCharCode(number) -> 유니코드(아스키) 코드 값을 문자로 변환
