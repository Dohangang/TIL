/*
문제 설명:
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, 
my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 
순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항:
📌 1 ≤ my_string의 길이 ≤ 1,000
*/

function solution(my_string) {
  const result = Array(52).fill(0);

  for (let char of my_string) {
    if (char >= "A" && char <= "Z") {
      result[char.charCodeAt(0) - "A".charCodeAt(0)]++;
    } else if (char >= "a" && char <= "z") {
      result[char.charCodeAt(0) - "a".charCodeAt(0) + 26]++;
    }
  }

  return result;
}

// function solution(m) {
//   var answer = [];
//   let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let a = [];
//   a.length = 52;
//   a.fill(0);

//   m.split("").map((n) => {
//     a[al.indexOf(n)] += 1;
//   });

//   return a;
// }
