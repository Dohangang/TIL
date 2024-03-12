/*
문제 설명:
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한사항:
📌 s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
*/

function solution(s) {
  let arrayS = s.split(" ");
  let maxS = arrayS.reduce((a, b) => Math.max(a, b));
  let minS = arrayS.reduce((a, b) => Math.min(a, b));

  return minS + " " + maxS;
}

// function solution(s) {
//   const arr = s.split(" ");

//   return Math.min(...arr) + " " + Math.max(...arr);
// }

// 스프레드 연산자
// 자바스크립트라 문자열도 Math가 돌아갔는데, 유의해서 사용할 것
