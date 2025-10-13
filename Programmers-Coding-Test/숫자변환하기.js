/*
문제 설명:
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.
      x에 n을 더합니다
      x에 2를 곱합니다.
      x에 3을 곱합니다.

자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 
이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

제한사항:
📌 1 ≤ x ≤ y ≤ 1,000,000
📌 1 ≤ n < y
*/

function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) continue;

    if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

// function solution(x, y, n) {
//   const visited = new Set();
//   const queue = [[x, 0]];
//   visited.add(x);

//   while (queue.length > 0) {
//     const [cur, count] = queue.shift();

//     if (cur === y) return count;

//     const nextValues = [cur + n, cur * 2, cur * 3];
//     for (let next of nextValues) {
//       if (next <= y && !visited.has(next)) {
//         visited.add(next);
//         queue.push([next, count + 1]);
//       }
//     }
//   }

//   return -1;
// }

// -- BFS로 풀면 queueMicrotask.shift()로 인해 비용이 크다. dp는 단순 순회라서 훨씬 빠르다.
// -- dp의 길이가 y+1 이라는 것과 Infinity가 안전하다는 것을 생각할 것.
// -- 혼자 못풀었고, 답을 보고도 이해가 제대로 가지 않는다.
