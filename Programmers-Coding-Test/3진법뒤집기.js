/*
문제 설명:
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 n은 1 이상 100,000,000 이하인 자연수입니다.
*/

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// }

// parseInt() -> 다른 진법의 숫자를 10진법으로 변환가능
// toString() -> 10진법의 숫자를 다른 진법으로 변환가능, 문자열일 때 숫자일 때 다 가능
