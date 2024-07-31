/*
문제 설명:
문자열 myString과 pat이 주어집니다. 
myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 1 ≤ myString ≤ 1000
📌 1 ≤ pat ≤ 10
*/

function solution(myString, pat) {
  let count = 0;
  let index = 0;

  while ((index = myString.indexOf(pat, index)) !== -1) {
    count++;
    index += 1;
  }

  return count;
}

// function solution(myString, pat) {
//   let count = 0;
//   for (let i = 0; i <= myString.length - pat.length; i++) {
//     if (myString.slice(i, i + pat.length) === pat) {
//       count++;
//     }
//   }

//   return count;
// }

// while문 확실히 알아보기
