/*
문제 설명:
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 3 ≤ num_list의 길이 ≤ 100
📌 1 ≤ num_list의 원소 ≤ 100
📌 1 ≤ n ≤ 100
*/

// @file, @brief, @author, @param, @return, @see, @todo, @deprecated 순서로 작성
/**
 *
 * @brief 파일에 대한 설명 작성
 * @author dohangang
 * @param {number} 1. num_list 숫자로 된 배열 2. n 유무를 확인하고 싶은 숫자
 * @returns {number} n이 존재하면 1 없으면 0
 * @see 참고사항 해당 주석 관련 내용을 볼 때 추가적으로 확인해야할 사항
 * @todo 가끔씩 주석을 위해 찾아오기
 * @deprecated 사실 해당 로직 필요없음
 */

function solution(num_list, n) {
  return num_list.filter((x) => x === n).length > 0 ? 1 : 0;
}

solution();

// const solution = (num_list, n) => {
//   if (num_list.includes(n)) return 1;
//   return 0;
// };
