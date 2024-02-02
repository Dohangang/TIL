/*
문제 설명:
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 
문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한사항:
📌 n은 길이 10,000이하인 자연수입니다.
*/

// @file, @brief, @author, @param, @return, @see, @todo, @deprecated 순서로 작성
/**
 *
 * @brief 파일에 대한 설명 작성
 * @author dohangang
 * @param {number} n 반환할 글자 수
 * @returns {string} 입력한 글자 수만큼 반복된 '수박'
 * @see 참고사항 해당 주석 관련 내용을 볼 때 추가적으로 확인해야할 사항
 * @todo 가끔씩 주석을 위해 찾아오기
 * @deprecated 사실 해당 로직 필요없음
 */
function solution(n) {
  return n % 2 == 0
    ? "수박".repeat(Math.floor(n / 2))
    : "수박".repeat(Math.floor(n / 2)) + "수";
}

solution();
