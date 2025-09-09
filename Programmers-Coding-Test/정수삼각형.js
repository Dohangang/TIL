/*
문제 설명:

          7
         3 8
        8 1 0
       2 7 4 4
      4 5 2 6 5

위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 
래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

제한사항:
📌 삼각형의 높이는 1 이상 500 이하입니다.
📌 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
*/

function solution(triangle) {
  const n = triangle.length;

  const forMerging = triangle.map((row) => [...row]);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      forMerging[i][j] += Math.max(
        forMerging[i + 1][j],
        forMerging[i + 1][j + 1]
      );
    }
  }

  return forMerging[0][0];
}

// function solution(triangle) {
//   return Math.max(
//     ...triangle.reduce((cost, line) => {
//       return line.map((v, index) => {
//         return (
//           v +
//           Math.max(
//             index < cost.length ? cost[index] : 0,
//             index > 0 ? cost[index - 1] : 0
//           )
//         );
//       });
//     }, [])
//   );
// }

// 아래에서 위로 올라가는 방식과 위에서 아래로 내려오는 두 가지 방식
// 아래에서 위로 올라가는 방식이 데이터 소모가 더 적을 것으로 예상.
// 위의 첫번째 코드는 들어온 매개변수를 깊은 복사 하는 바람에 시간 초과가 되긴 했다. 깊은 복사를 하지 않고 원본으로 계산한다면 초과가 되지 않는다.

// (1) map((row) => [...row]) → 각 행을 새 배열로 만들어 주므로 triangle과 독립적인 배열을 얻게 된다. -> 깊은 복사
//     3차원 이상 구조라면 다른 방법을 사용해야함.
// (2) reduce와 map은 둘 다 배열을 순회한다. 이를 이용하여 for문을 대신할 수 있다. reduce를 통해 주어진 수들을 계속 더해나가며,
//     map을 통해 같은 행에서 더 큰 수를 고르는 작업을 행함. 결국엔 Math.max를 통해 reduce로 모아진 수들 중 가장 큰 수를 택할 수 있음.

// 🌟 map()과 reduce()
// arr.map((element, index,  array) ⇒ { return 변환된값; });
// -> 배열의 각 요소를 순회하면서 새로운 값으로 변환된 배열을 만들어 반환하는 메서드, let a = b.map(), b 원본에 변경이 없음
// arr.reduce(function (acc, cur, idx, array) { return acc + cur; }, 초기값);
// -> 배열을 순회하면서, 하나의 값으로 누적 축약시켜 반화낳는 메서드
