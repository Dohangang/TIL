/*
문제 설명:
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

제한사항:
📌 n은 1,000,000 이하의 자연수 입니다.
*/

// @file, @brief, @author, @param, @return, @see, @todo, @deprecated 순서로 작성
/**
 *
 * @brief 파일에 대한 설명 작성
 * @author dohangang
 * @param {number} 2진법으로 바꿀 숫자, 비교할 숫자
 * @returns {number} 매개변수보다 크고, 2진법으로 표시했을 때 1의 개수는 같은 가장 작은 수
 * @see 참고사항 해당 주석 관련 내용을 볼 때 추가적으로 확인해야할 사항
 * @todo 가끔씩 주석을 위해 찾아오기
 * @deprecated 사실 해당 로직 필요없음
 */
function solution(n) {
  const countOne = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((x) => x === "1").length;
  };

  const targetCount = countOne(n);

  for (let i = n + 1; ; i++) {
    if (countOne(i) === targetCount) {
      return i;
    }
  }
}

//deprecated된 표시
solution(78);
