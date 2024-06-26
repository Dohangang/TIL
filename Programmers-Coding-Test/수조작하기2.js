/*
문제 설명:
정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 
"w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

      "w" : 수에 1을 더한다.
      "s" : 수에 1을 뺀다.
      "d" : 수에 10을 더한다.
      "a" : 수에 10을 뺀다.

그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 
즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 2 ≤ numLog의 길이 ≤ 100,000
      -100,000 ≤ numLog[0] ≤ 100,000
      1 ≤ i ≤ numLog의 길이인 모든 i에 대해 |numLog[i] - numLog[i - 1]|의 값은 1 또는 10입니다.
*/

function solution(numLog) {
  let result = "";

  for (let i = 1; i < numLog.length; i++) {
    let diff = numLog[i] - numLog[i - 1];

    if (diff === 1) {
      result += "w";
    } else if (diff === -1) {
      result += "s";
    } else if (diff === 10) {
      result += "d";
    } else if (diff === -10) {
      result += "a";
    }
  }

  return result;
}
