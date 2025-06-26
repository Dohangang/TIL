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
