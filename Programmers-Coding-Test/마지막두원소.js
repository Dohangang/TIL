/*
문제 설명:
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 
마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 
마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 2 ≤ num_list의 길이 ≤ 10
📌 1 ≤ num_list의 원소 ≤ 9
*/

function solution(num_list) {
  const reversed = num_list.slice().reverse();
  const end = reversed[0];
  const endMinusOne = reversed[1];
  endMinusOne < end
    ? num_list.push(end - endMinusOne)
    : num_list.push(end + end);
  return num_list;
}

// function solution(num_list) {
//   const [a, b] = [...num_list].reverse();
//   return [...num_list, a > b ? (a-b):a*2];
// }

// function solution(num_list) {
//   numlen = num_list.length;
//   if(num_list[numlen-2] < num_list[numlen-1])
//       num_list.push(num_list[numlen-1] - num_list[numlen-2])
//   else num_list.push(num_list[numlen-1]*2)
//   return num_list;
// }

// 구조분해 할당으로 해결해도 되고, 머리쓰지 말고 length를 활용해도 된다. length가 근본같다.
