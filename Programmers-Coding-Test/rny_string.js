/*
문제 설명:
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 
문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 
return 하는 solution 함수를 작성해 주세요.

제한사항:
📌 1 ≤ rny_string의 길이 ≤ 100
📌 rny_string은 영소문자로만 이루어져 있습니다.
*/

function solution(rny_string) {
  if (rny_string.length < 1 || rny_string.length > 100) {
    return "length error";
  }

  let answer = "";
  for (let i = 0; i < rny_string.length; i++) {
    if (rny_string[i] === "m") {
      answer += "rn";
    } else {
      answer += rny_string[i];
    }
  }

  return answer.toLowerCase();
}

// 자바스크립트 문자열에서 문자를 추가하고 싶을 때 +, concat()을 사용할 수 있다.
// rny_string.replaceAll("m", "rn")도 있는 것을 확인해볼 것.
