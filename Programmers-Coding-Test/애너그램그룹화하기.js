/*
문제 설명:
문자열 배열이 주어집니다. 이 배열에서 애너그램(Anagram) 관계에 있는 문자열끼리 그룹을 지어
2차원 배열 형태로 반환하는 함수 groupAnagrams를 작성하세요.

애너그램이란, 문자의 순서를 바꾸어 만들 수 있는 다른 단어를 의미합니다. 
예를 들어, "eat", "tea", "ate"는 모두 같은 문자로 이루어져 있으므로 애너그램 관계입니다. 
모든 입력값은 소문자로 가정합니다.

제한사항:
📌 groupAnagrams라는 이름의 함수를 작성하세요.
📌 함수는 문자열 배열을 인자로 받습니다.
📌 애너그램끼리 묶인 2차원 배열을 반환해야 합니다.
*/

function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}
