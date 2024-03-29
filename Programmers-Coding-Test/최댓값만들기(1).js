/*
문제 설명:
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
return하도록 solution 함수를 완성해주세요.

제한사항:
📌 0 ≤ numbers의 원소 ≤ 10,000
📌 2 ≤ numbers의 길이 ≤ 100
*/

function solution(numbers) {
  if (numbers.length < 2 || 100 < numbers.length) {
    return "length error";
  }
  if (0 < numbers.filter((x) => x < 0 || 10000 < x).length) {
    return "element error";
  }

  let answer = numbers.sort((a, b) => b - a);
  return answer[0] * answer[1];
}

// sort는 오름차순 내림차순, 알파벳 정렬 등 데이터의 정렬을 도와준다
