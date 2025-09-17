/*
문제 설명:
문자열이 주어질 때, 공백을 기준으로 나누어 가장 긴 단어를 찾아 반환하세요.
만약 가장 긴 단어가 여러 개라면 가장 앞에 나오는 단어를 반환하세요.

입력 예시: "JavaScript is the best programming language"

출력 예시: "programming"

제한사항:
📌 입력 문자열은 알파벳 소문자/대문자와 공백으로만 이루어져 있습니다.
📌 문자열 길이는 1 이상 100 이하입니다.
*/

function solution(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

// function solution(str) {
//   const words = str.split(" ");
//   let longest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }ㄴ

//   return longest;
// }

// split으로 문자열을 배열로 -> for문으로 긴 단어 교체
// 위의 첫 번째 코드는 코드가 짧고 직관적이나 sort에서 시간 복잡도를 더 길게 잡힘.
// 그래서 for문의 O(n)이 더 효과적이며 기본에 충실함.

// function solution(str) {
//   return str
//     .split(' ')
//     .reduce((longest, word) => word.length > longest.length ? word : longest, "");
// }

// for문처럼 O(n)만에 끝나고 코드도 짧고 깔끔함.
