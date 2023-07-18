/*
문제 설명:
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 
return하도록 solution 함수를 완성해주세요.

제한사항:
📌 my_string은 소문자와 공백으로 이루어져 있습니다.
📌 1 ≤ my_string의 길이 ≤ 1,000
*/

function solution(my_string) {
  const arrayForm = Array.from(my_string).filter(
    (x) => x !== "a" && x !== "i" && x !== "o" && x !== "u" && x !== "e"
  );
  return arrayForm.join("");
}

// function solution(my_string) {
//   return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
// }

// function solution(my_string) {
//   return my_string.replace(/[aeiou]/g, '');
// }

// 더 간단한 방법, 정규표현식을 사용하여 제외할 수 있는 방법, replace의 활용법.
