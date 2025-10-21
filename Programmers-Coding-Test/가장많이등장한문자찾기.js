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
