/*
문제 설명:
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한사항:
📌 n과 m은 각각 1000 이하인 자연수입니다.
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const input = data.split(" ");
  const n = Number(input[0]);
  const m = Number(input[1]);

  for (let i = 0; i < m; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
});

// function solution(n,m) {
//     for(let i = 1; i<=m; i++) {
//         console.log('*'.repeat(n));
//     }
// }
