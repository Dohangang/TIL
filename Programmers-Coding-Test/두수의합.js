/*
문제 설명:
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

제한사항:
📌 1 ≤ a의 길이 ≤ 100,000
📌 1 ≤ b의 길이 ≤ 100,000
📌 a와 b는 숫자로만 이루어져 있습니다.
📌 a와 b는 정수 0이 아니라면 0으로 시작하지 않습니다.
*/

function solution(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digitA = i >= 0 ? parseInt(a[i]) : 0;
    let digitB = j >= 0 ? parseInt(b[j]) : 0;

    let sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
}
