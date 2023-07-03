/*
문제 설명:
문자열 my_string이 매개변수로 주어집니다. 
my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ my_string의 길이 ≤ 1,000
*/

function solution(my_string) {
  if (my_string.length < 1 || 1000 < my_string.length) {
    return "length error";
  }

  let answer = "";
  for (let i = my_string.length - 1; 0 <= i; i--) {
    answer = answer + my_string[i];
  }
  return answer;
}

// function solution(my_string) {
//   var answer = [...my_string].reverse().join("");
//   return answer;
// }
// 문자열을 배열로 변형, 뒤집은 후, 다시 문자열로 변형
