/*
문제 설명:
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.


제한사항:
📌 0 < before의 길이 == after의 길이 < 1,000
📌 before와 after는 모두 소문자로 이루어져 있습니다.
*/

function solution(before, after) {
  let beforeArray = before.split("").sort();
  let afterArray = after.split("").sort();

  if (beforeArray.length !== afterArray.length) {
    return 0;
  }

  for (let i = 0; i < beforeArray.length; i++) {
    if (beforeArray[i] !== afterArray[i]) {
      return 0;
    }
  }

  return 1;
}

// function solution(before, after) {
//   return before.split("").sort().join("") === after.split("").sort().join("")
//     ? 1
//     : 0;
// }
