/*
문제 설명:
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ n ≤ 10000
*/

function solution(n) {
  if (n < 1 || 10000 < n) {
    return "number error";
  }

  return JSON.stringify(n);
}

// 자바스크립트 문법의 대소문자 확실히 기억하기
