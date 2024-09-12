/*
문제 설명:
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 
이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

제한사항:
📌 1 ≤ arr의 길이 ≤ 1,000,000
      1 ≤ arr의 원소의 값 ≤ 100
*/

function solution(arr) {
  let x = 0;
  let changed = true;

  while (changed) {
    changed = false;
    let newArr = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      } else if (num < 50 && num % 2 === 1) {
        return num * 2 + 1;
      } else {
        return num;
      }
    });

    if (arr.some((val, idx) => val !== newArr[idx])) {
      changed = true;
      arr = newArr;
      x++;
    }
  }

  return x;
}

// function solution(arr) {
//   var answer = 0;
//   let before = [-1];

//   while (!arr.every((e, idx) => e == before[idx])) {
//     before = [...arr];

//     arr = arr.map((e) => {
//       if ((e >= 50) & (e % 2 == 0)) return e / 2;
//       if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
//       return e;
//     });
//     answer++;
//   }
//   return answer - 1;
// }

// array.every()는 배열의 모든 요소가 조건을 충족하는지 확인하고 (AND),
// array.some() 함수는 배열의 1개 요소라도 특정 조건을 충족하는지 확인(OR)하는데 사용한다.
