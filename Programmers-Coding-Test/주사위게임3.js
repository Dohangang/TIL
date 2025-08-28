/*
문제 설명:
1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

      네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
      세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
      주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
      어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
      네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요

제한사항:
📌 a, b, c, d는 1 이상 6 이하의 정수입니다.
*/

function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const counts = {};

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  if (entries.length === 1) {
    const p = parseInt(entries[0][0]);
    return 1111 * p;
  }

  if (entries.length === 2) {
    const [most, countOfMost] = entries[0];
    const [second, countOfSecond] = entries[1];
    const p = parseInt(most);
    const q = parseInt(second);

    if (countOfMost === 3) {
      return (10 * p + q) ** 2;
    } else {
      return (p + q) * Math.abs(p - q);
    }
  }

  if (entries.length === 3) {
    const [most, countOfMost] = entries[0];
    const others = entries.slice(1).map((e) => parseInt(e[0]));
    return others[0] * others[1];
  }

  if (entries.length === 4) {
    return Math.min(...arr);
  }
}

// function solution(a, b, c, d) {
//   const map = new Map();
//   for (const data of [a, b, c, d]) {
//     map.set(data, (map.get(data) || 0) + 1);
//   }

//   const sortedArr = [...map].sort((a, b) => {
//     if (a[1] === b[1]) return b[0] - a[0];
//     else return b[1] - a[1];
//   });

//   if (map.size === 1) return 1111 * sortedArr[0][0];
//   else if (map.size === 3) return sortedArr[1][0] * sortedArr[2][0];
//   else if (map.size === 4) return sortedArr[3][0];
//   else if (sortedArr[0][1] === 3)
//     return (10 * sortedArr[0][0] + sortedArr[1][0]) ** 2;
//   else
//     return (
//       (sortedArr[0][0] + sortedArr[1][0]) * (sortedArr[0][0] - sortedArr[1][0])
//     );
// }
