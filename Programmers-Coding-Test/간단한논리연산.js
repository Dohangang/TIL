/*
문제 설명:
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

(x1 ∨ x2) ∧ (x3 ∨ x4)

제한사항:
📌 
*/

function solution(x1, x2, x3, x4) {
  let left = false;
  let right = false;

  if (x1 || x2) {
    left = true;
  }
  if (x3 || x4) {
    right = true;
  }

  return left && right ? true : false;
}

// function solution(x1, x2, x3, x4) {
//   return (x1 || x2) && (x3 || x4);
// }
