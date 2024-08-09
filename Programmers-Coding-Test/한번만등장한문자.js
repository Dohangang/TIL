/*
문제 설명:
문자열 s가 매개변수로 주어집니다. 
s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.


제한사항:
📌 0 < s의 길이 < 1,000
📌 s는 소문자로만 이루어져 있습니다.
*/

function solution(s) {
  let answer = [];
  let duplicate = [];

  for (let i = 0; i < s.length; i++) {
    if (!answer.includes(s[i])) {
      answer.push(s[i]);
    } else {
      duplicate.push(s[i]);
    }
  }

  return answer
    .filter((item) => !duplicate.includes(item))
    .sort()
    .join("");
}

// function solution(s) {
//   let res = [];
//   for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//   return res.sort().join("");
// }

// indexOf()와 lastIndexOf() 기억하기!
