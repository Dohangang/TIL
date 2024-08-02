/*
문제 설명:
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.


제한사항:
📌 중복된 원소는 없습니다.
📌 1 ≤ emergency의 길이 ≤ 10
📌 1 ≤ emergency의 원소 ≤ 100
*/

function solution(emergency) {
  let indexedEmergency = emergency.map((value, index) => [value, index]);

  indexedEmergency.sort((a, b) => b[0] - a[0]);

  let result = new Array(emergency.length);
  for (let i = 0; i < indexedEmergency.length; i++) {
    let originalIndex = indexedEmergency[i][1];
    result[originalIndex] = i + 1;
  }

  return result;
}
