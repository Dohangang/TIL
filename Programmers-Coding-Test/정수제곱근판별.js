/*
문제 설명:
임의의 양의 정수 n에 대해, 
n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한사항:
📌 n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/

function solution(n) {
  let answer = n ** 0.5;

  if (Number.isInteger(answer)) {
    return (answer + 1) ** 2;
  }

  return -1;
}

// function nextSqaure(n) {
//   switch (n % Math.sqrt(n)) {
//     case 0:
//       return Math.pow(Math.sqrt(n) + 1, 2);
//     default:
//       return "no";
//   }
// }

// Math.sqrt()와 switch(), while()에 대해 다시 알기
