/*
문제 설명:
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.


제한사항:
📌 0 ≤ score[0], score[1] ≤ 100
📌 1 ≤ score의 길이 ≤ 10
📌 score의 원소 길이는 2입니다.
📌 score는 중복된 원소를 갖지 않습니다.
*/

function solution(score) {
  const average = score.map(([english, math]) => (english + math) / 2);

  const rank = average.map((avg) => {
    return average.filter((a) => a > avg).length + 1;
  });

  return rank;
}

// function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }
