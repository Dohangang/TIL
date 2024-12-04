/*
문제 설명:
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.


제한사항:
📌 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
📌 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
📌 곱할 수 있는 배열만 주어집니다.
*/

function solution(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr2[0].length;
  const common = arr2.length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let k = 0; k < common; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

// function productMatrix(A, B) {
//   return A.map(function (row) {
//     return row.map(function (_, i) {
//       return row.reduce(function (sum, cell, j) {
//         return sum + cell * B[j][i];
//       }, 0);
//     });
//   });
// }
