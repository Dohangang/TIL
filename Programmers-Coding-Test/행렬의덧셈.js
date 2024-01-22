/*
문제 설명:
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 
행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한사항:
📌 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/

function solution(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr1[0].length;

  const result = new Array(rows);

  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols);

    for (let j = 0; j < cols; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
}

// function solution(arr1, arr2) {
//   let answer = [[]];
//   for (let i=0; i<arr1.length; i++){
//       answer[i] =[];
//       for(let j=0; j<arr1[i].length; j++){
//           answer[i].push(arr1[i][j] + arr2[i][j]);
//       }
//   }
//   return answer;
// }
