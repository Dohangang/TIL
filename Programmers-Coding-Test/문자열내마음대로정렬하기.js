/*
문제 설명:
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한사항:
📌 strings는 길이 1 이상, 50이하인 배열입니다.
📌 strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
📌 strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
📌 모든 strings의 원소의 길이는 n보다 큽니다.
📌 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
}

// function solution(strings, n) {
//   var answer = [];
//   for (var i = 0; i < strings.length; i++) {
//     var chu = strings[i][n];
//     strings[i] = chu + strings[i];
//   }
//   strings.sort();
//   for (var j = 0; j < strings.length; j++) {
//     strings[j] = strings[j].replace(strings[j][0], "");
//     answer.push(strings[j]);
//   }

//   return answer;
// }
