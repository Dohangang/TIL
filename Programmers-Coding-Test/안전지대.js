/*
문제 설명:
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.

image.png

지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 board는 n * n 배열입니다.
📌 1 ≤ n ≤ 100
📌 지뢰는 1로 표시되어 있습니다.
📌 board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
*/

function solution(board) {
  const n = board.length;
  const danger = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 9; k++) {
          const ni = i + dx[k];
          const nj = j + dy[k];
          if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
            danger[ni][nj] = 1;
          }
        }
      }
    }
  }

  let safeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (danger[i][j] === 0) {
        safeCount++;
      }
    }
  }

  return safeCount;
}

// function solution(board) {

//   let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
//   let safezone = 0;

//   board.forEach((row, y, self) => row.forEach((it, x) => {
//       if (it === 1) return false;
//       return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
//              ? false : safezone++;
//   }));

//   return safezone;
// }

// 첫번째 코드는 상태를 보고 판단하여 순차적이면서 명확하다. 즉 절차지향적이라 디버깅에도 도움이 된다.
// 두번째 코드는 조건으로 바로 판단한다. 간결하고 함수형 스타일이다. 중고급자에게 적합해 보인다.
// 지뢰가 있는 곳에서 위험표시를 퍼트려 나갈 것인가, 위험하지 않다는 증거로 판단하는가에 따라 다른 코드가 쓰여질 수 있다.
// 코드가 복잡해 보여도 무조건 나쁜 것이 아니고, 간단하게 했다고 해서 꼭 좋은 것이 아니다. 절차적인 것은 타인이 보기에 이해에 도움이 되고, 함수적으로 코드를
// 만들었을 때는 유지보수에 도움이 될 수도 있다.
// map()과 forEach()에 대해 다시 한번 기억하자
