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

// 첫번째 함수, 자기 자신을 다시 호출하는 함수를 사용 (재귀), 중첩의 중첩들까지도 평탄화한다. ...flatten이라는 전개연산(spread operator)
// 배열인지 아닌지 검사하고 싶을 떄 -> Array.isArray(value)를 사용. true false 반환.
// 두번째 함수, arr.flat(depth) -> 평탄화를 진행할 깊이를 숫자로 지정, 생략 시 기본값은 1, Infinity는 모든 것을 평탄화.

// @brief
// 간략한 설명, 함수, 클래스, 파일 등을 요약 설명, 핵심 파악 도움

// @param
// 파라미터(매개변수)가 무엇이고 어떤 타입인지 설명

// @returns
// 실행 후 어떤 종류의 값을 반환하고 무엇을 의미하는지 설명

// @see
// 관련 있는 다른 함수, 클래스 등을 참조하라고 사용. 읽는 사람에게 더 많은 정보 제공

// @todo
// 앞으로 수정 추가할 기능을 표시하는 용, ex:'예외 처리 코드 추가 해야 함'

// @deprecated
// 해당 함수나 기능이 오래되었거나 더 좋은 새로운 방식으로 대체되어 앞으로 사용하지 않기를 권장
