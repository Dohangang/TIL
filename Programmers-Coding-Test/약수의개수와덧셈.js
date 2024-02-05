/*
문제 설명:
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ left ≤ right ≤ 1,000
*/

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// function solution(left, right) {
//   let sum = ((left + right) / 2) * (right - left + 1);
//   let l = Math.ceil(Math.sqrt(left));
//   while (l ** 2 <= right) sum -= (l++) ** 2 * 2;
//   return sum;
// }
