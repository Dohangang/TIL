/*
문제 설명:
정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, 
arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 
return 하는 solution 함수를 작성해 주세요.


제한사항:
📌 1 ≤ arr의 길이 ≤ 1,000
📌 1 ≤ arr의 원소 ≤ 1,000
📌 1 ≤ n ≤ 1,000
*/

function solution(arr, n) {
  const result = arr.map((value, index) => {
    return arr.length % 2 === 1
      ? index % 2 === 0
        ? value + n
        : value
      : index % 2 === 1
      ? value + n
      : value;
  });

  return result;
}

// const solution = (arr, n) => arr.map((num, idx) => (
//   arr.length % 2 !== idx % 2
//   ? num + n
//   : num
// ))
