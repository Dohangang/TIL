/*
문제 설명:
주어진 문자열 s에서 처음으로 반복되지 않는 문자(unique character)를 찾아 
그 문자의 인덱스를 반환하는 함수 firstUniqChar를 작성하세요. 
만약 그런 문자가 없다면 -1을 반환하세요.

 예시 1
const s1 = "leetcode"; 출력: 0
 예시 2
const s2 = "loveleetcode"; 출력: 2
 예시 3
const s3 = "aabb"; 출력: -1

제한사항:
📌 
*/

function firstUniqChar(s) {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
