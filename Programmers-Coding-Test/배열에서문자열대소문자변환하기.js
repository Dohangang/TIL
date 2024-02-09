/*
문제 설명:
문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 
배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 
짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

제한사항:
📌 1 ≤ strArr ≤ 20
    - 1 ≤ strArr의 원소의 길이 ≤ 20
    - strArr의 원소는 알파벳으로 이루어진 문자열 입니다.
*/

function solution(strArr) {
  // const regex = /^[a-zA-Z]*$/;
  // if(!regex.test(strArr)){return 'only english';}
  // 의 정규표현식을 활용한 유효성 검사는 요소마다 진행해야 하는데 생략함.

  // 1 ≤ strArr ≤ 20 배열을 숫자안에 넣어놓은건 무슨 의미인가?
  if (strArr.length < 1 || 20 < strArr.length) {
    return "length error";
  }

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 == 0) {
      strArr[i] = strArr[i].toLowerCase();
    } else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr;
}
