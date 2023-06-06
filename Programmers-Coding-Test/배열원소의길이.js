/*
문제 설명:
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ strlist 원소의 길이 ≤ 100
📌 strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
*/

function solution(strlist) {
  if (strlist < 1 || 100 < strlist) {
    return "length error";
  }

  const answer = strlist.map((x) => x.length);
  return answer;
}

// 유효성 검사를 하는 방법도 알고 싶다. 남이 만들어 놓은 것을 가져다 쓰는게 아닌 스스로 만드는 법을 알아볼 것!
