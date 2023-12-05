/*
문제 설명:
문자열 str1, str2가 매개변수로 주어집니다. 
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ str1의 길이 ≤ 100
📌 1 ≤ str2의 길이 ≤ 100
📌 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.
*/

function solution(str1, str2) {
  if (str1.replaceAll(str2, "") == str1) {
    return 2;
  } else {
    return 1;
  }
}

// function solution(str1, str2) {
//   return str1.includes(str2) ? 1 : 2;
// }

// 문자열에서도 includes를 사용할 수 있다.
