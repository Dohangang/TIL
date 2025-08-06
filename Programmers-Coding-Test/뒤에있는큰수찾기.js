/*
문제 설명:
정수로 이루어진 배열 numbers가 있습니다. 
배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 
단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

제한사항:
📌 4 ≤ numbers의 길이 ≤ 1,000,000
      1 ≤ numbers[i] ≤ 1,000,000
*/

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);

  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    while (stack.length > 0 && current > numbers[stack[stack.length - 1]]) {
      const idx = stack.pop();
      answer[idx] = current;
    }
    stack.push(i);
  }
  return answer;
}

// stack에는 자기 자신보다 큰 숫자를 찾지 못한 원소들의 index가 들어가 있다.
// 자연스럽게 stack에 남은 index들의 실제 숫자들은 [큰수, 조금 큰수, 작은수, 제일 작은수]와 같은 순서로 저장된다.
// 뒤의 수가 더 크다면 뒷 큰수를 찾은 것이기에 존재하면 안된다.
// for문을 겹으로 사용하지 않고 while을 사용한 이유는 for문은 stack과 같이 성능을 도와줄 수단이 없다

// while문의 조건은 오류를 막을 stack.length와 현재 루프의 숫자와 전에 있던 가장 작은 숫자를 비교하는 조건이다.
// while문은 같은 조건을 계속 확인하고 본 계산에서 무엇인가 변경될 것이다. 그 후에 또 조건을 확인하고 계산을 한다.
// 이러한 방식을 이해하고 while을 사용할 곳을 느낄 것.
