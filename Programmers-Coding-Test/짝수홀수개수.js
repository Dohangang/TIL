/*
문제 설명:
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항:
📌 1 ≤ num_list의 길이 ≤ 100
📌 0 ≤ num_list의 원소 ≤ 1,000
*/

function solution(num_list) {
  if (num_list.length < 1 || 100 < num_list.length) {
    return "length error";
  }
  const number = num_list.find((element) => element < 0 || 1000 < element);
  if (number) {
    return "element error";
  }

  let odd = 0;
  let even = 0;
  const answer = num_list.map((element) => {
    if (element % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  });
  return [even, odd];
}

// 짝수 홀수를 찾아서 반환하는 메소드가 있을지 모르니 찾아볼 것.
