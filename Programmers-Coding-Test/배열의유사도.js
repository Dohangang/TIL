/*
문제 설명:
두 배열이 얼마나 유사한지 확인해보려고 합니다. 
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ s1, s2의 길이 ≤ 100
📌 1 ≤ s1, s2의 원소의 길이 ≤ 10
📌 s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
📌 s1과 s2는 각각 중복된 원소를 갖지 않습니다
*/

function solution(s1, s2) {
  if (s1 < 1 || 100 < s1) {
    return "length error";
  }
  if (s2 < 1 || 100 < s2) {
    return "length error";
  }
  const S1 = s1.map((x) => x.toLowerCase());
  const S2 = s2.map((x) => x.toLowerCase());

  return S1.filter((x) => S2.includes(x)).length;
}

// toLowerCase()와 중복된 원소도 처리하는 과정을 넣으려 했으나 코드가 너무 길어져 생략함.
// 중복된 원소를 처리하는 로직은 새로운 변수를 만들어 중복 없이 만들거나, set을 활용해 만듦. set은 순서를 보장하지 않는다.
