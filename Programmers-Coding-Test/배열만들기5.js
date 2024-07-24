/*
문제 설명:
문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 
이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 0 ≤ s < 100
📌 1 ≤ l ≤ 8
📌 10l - 1 ≤ k < 10l
📌 1 ≤ intStrs의 길이 ≤ 10,000
      s + l ≤ intStrs의 원소의 길이 ≤ 120
*/

function solution(intStrs, k, s, l) {
  let answer = [];

  for (let i = 0; i < intStrs.length; i++) {
    if (intStrs[i].slice(s, s + l) > k) {
      answer.push(Number(intStrs[i].slice(s, s + l)));
    } else {
      continue;
    }
  }

  return answer;
}

// function solution(intStrs, k, s, l) {
//   return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
// }

// 주석 처리한 코드가 다섯배는 빠른 성능을 보인다.
