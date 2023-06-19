/*
문제 설명:
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 dot의 길이 = 2
📌 dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
📌 -500 ≤ dot의 원소 ≤ 500
📌 dot의 원소는 0이 아닙니다.
*/

function solution(dot) {
  if (dot.length !== 2) {
    return "length error";
  }
  let errorPoint = dot.includes((x) => x < -500 || 500 < x);
  if (errorPoint) {
    return "elements range error";
  }
  if (dot[0] == 0 || dot[1] == 0) {
    return "Do not use zero";
  }

  if (0 < dot[0]) {
    if (0 < dot[1]) {
      return 1;
    } else {
      return 4;
    }
  } else if (dot[0] < 0) {
    if (0 < dot[1]) {
      return 2;
    } else {
      return 3;
    }
  }
}

// function solution(dot) {
//   var answer = 0;
//   if (dot[0] > 0 && dot[1] > 0) answer = 1;
//   if (dot[0] < 0 && dot[1] > 0) answer = 2;
//   if (dot[0] < 0 && dot[1] < 0) answer = 3;
//   if (dot[0] > 0 && dot[1] < 0) answer = 4;
//   return answer;
// }
//
// 구조분해 할당, 삼항연산 등 많은 풀이가 있지만 본 파일의 주석 부분이 가독성이 가장 뛰어난 풀이라고 생각한다.
