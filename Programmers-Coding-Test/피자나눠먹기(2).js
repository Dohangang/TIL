/*
문제 설명:
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.


제한사항:
📌 1 ≤ n ≤ 100
*/

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function solution(n) {
  const pieces = 6;
  const totalPieces = lcm(pieces, n);
  return totalPieces / pieces;
}

// 유클리드 호제법

// const solution = (n) => {
//   let piece = 6

//   while(true) {
//       if (piece % n === 0) {
//           break
//       }
//       piece += 6
//   }

//   return piece / 6
// }
