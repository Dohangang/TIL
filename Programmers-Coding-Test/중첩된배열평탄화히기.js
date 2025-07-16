/*
문제 설명:
숫자와 다른 배열들로 구성된 중첩 배열(nested array)이 주어집니다. 이배열을 인자로 받아, 
모든 요소를 포함하는 1차원 배열(flat array)로 만들어 반환하는 flatten 함수를 작성하세요.

제한사항:
📌 배열의 요소는 숫자 혹은 다른 배열입니다.
📌 배열이 얼마나 깊게 중첩될지는 알 수 없습니다.
*/

function flatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// function flatten(arr) {
//   return arr.flat(Infinity);
// }
