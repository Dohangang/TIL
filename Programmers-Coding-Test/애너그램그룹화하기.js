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

/*
Map 객체 : 키-값 쌍을 저장하는 자료구조, 키에 모든 자료형을 쓸 수 있음, 추가한 순서를 보존
map.set('name', 'Alice');  키-값 쌍을 추가 및 업데이트
map.get(''name') 키에 연결된 값을 반환
map.has('name') 특정 키가 존재하는지 확인 TF
map.delete('name') 특정 키-값 쌍을 삭제
map.clear() 맵 안의 모든 요소를 제거합니다.
map.size 저장된 키-값 쌍의 개수를 반환
.keys()  .values()  .entries()  모든 키 모든 값 모든 키-값배열을 순서대로 맵 반환

Array.from("hello");           // ['h', 'e', 'l', 'l', 'o']
Array.from(new Set([1, 2, 3])); // [1, 2, 3]
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

배열 원본 변경 O / X
✅ 변경하지 않음	map, filter, slice, concat, reduce, flat, find, includes, join, Array.from
❗ 원본 변경	push, pop, shift, unshift, splice, sort, reverse, fill
*/
