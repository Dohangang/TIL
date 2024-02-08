/*
문제 설명:
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ my_string의 길이 ≤ 1,000
📌 my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
*/

function solution(my_string) {
  const checkNumber = /[0-9]/;
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    const x = my_string[i];
    if (checkNumber.test(x)) {
      answer += parseInt(x);
    }
  }

  return answer;
}

// function solution(my_string) {
//   return [...my_string].reduce(
//     (acc, cur) => (Number(cur) ? +acc + +cur : acc),
//     0
//   );
// }
