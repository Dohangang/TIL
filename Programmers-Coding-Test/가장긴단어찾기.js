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
