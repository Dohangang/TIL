/*
문제 설명:
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ numbers의 길이 ≤ 9
  👉🏻  0 ≤ numbers의 모든 원소 ≤ 9
  👉🏻  numbers의 모든 원소는 서로 다릅니다.
*/

function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const missingNumbers = allNumbers.filter((num) => !numbers.includes(num));

  const sumOfMissingNumbers = missingNumbers.reduce((acc, num) => acc + num, 0);

  return sumOfMissingNumbers;
}

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
