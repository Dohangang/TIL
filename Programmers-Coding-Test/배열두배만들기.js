/*
문제 설명:
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 각 원소에 두배한 원소를 가진 배열을 
return하도록 solution 함수를 완성해주세요.

제한사항:
📌 -10,000 ≤ numbers의 원소 ≤ 10,000
📌 1 ≤ numbers의 길이 ≤ 1,000
*/

function solution(numbers) {
  if (numbers.includes((x) => x < -10000 || 10000 < x)) {
    return "elements error";
  }
  if (numbers.length < 1 || 1000 < numbers.length) {
    return "length error";
  }

  return numbers.map((x) => 2 * x);
}

// reduce를 사용해서도 해결할 수 있다
