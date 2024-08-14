/*
문제 설명:
정수 배열 arr이 매개변수로 주어집니다. 
arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. 
arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.


제한사항:
📌 1 ≤ arr의 길이 ≤ 1,000
📌 1 ≤ arr의 원소 ≤ 1,000
*/

function solution(arr) {
  let lengthOfArr = arr.length;

  let minArr = 1;
  while (minArr < lengthOfArr) {
    minArr *= 2;
  }

  while (arr.length < minArr) {
    arr.push(0);
  }

  return arr;
}

// function solution(arr) {
//   const length = arr.length;
//   const totalLength = 2 ** Math.ceil(Math.log2(length));
//   return [...arr, ...new Array(totalLength - length).fill(0)];
// }
// 로그를 사용한 풀이
