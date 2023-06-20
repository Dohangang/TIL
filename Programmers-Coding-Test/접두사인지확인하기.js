/*
문제 설명:
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 
아니면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항:
📌 1 ≤ my_string의 길이 ≤ 100
📌 1 ≤ is_prefix의 길이 ≤ 100
📌 my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
*/

function solution(my_string, is_prefix) {
  if (my_string.length < 1 || 100 < my_string.length) {
    return "length error";
  }
  if (is_prefix.length < 1 || 100 < is_prefix.length) {
    return "length error";
  }
  // 영문자인 유효성검사는 생략
  let myString = my_string.toLowerCase();
  let isPrefix = is_prefix.toLowerCase();

  if (isPrefix.length > myString.length) {
    return 0;
  }

  for (let i = 0; i < isPrefix.length; i++) {
    if (myString[i] !== isPrefix[i]) {
      return 0;
    }
  }

  return 1;
}
