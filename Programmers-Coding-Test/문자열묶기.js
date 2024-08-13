/*
문제 설명:
문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 
가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 1 ≤ strArr의 길이 ≤ 100,000
      1 ≤ strArr의 원소의 길이 ≤ 30
      strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
*/

function solution(strArr) {
  let count = [];

  for (let i = 0; i < strArr.length; i++) {
    let length = strArr[i].length;

    if (count[length] === undefined) {
      count[length] = 1;
    } else {
      count[length]++;
    }
  }

  return Math.max(...count.filter((num) => num !== undefined));
}

// function solution(strArr) {
//   let ans = Array(31).fill(0);
//   for (let s of strArr) ans[s.length]++;
//   return Math.max(...ans);
// }
