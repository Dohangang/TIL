/*
문제 설명:
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
      ">", "=" : n >= m
      "<", "=" : n <= m
      ">", "!" : n > m
      "<", "!" : n < m

두 문자열 ineq와 eq가 주어집니다. 
ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 
맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 1 ≤ n, m ≤ 100
*/

function solution(ineq, eq, n, m) {
  if (ineq == "<") {
    if (eq == "=") {
      return n <= m ? 1 : 0;
    } else {
      return n < m ? 1 : 0;
    }
  } else if (eq == "=") {
    return n >= m ? 1 : 0;
  } else {
    return n > m ? 1 : 0;
  }
}

// sol2
// function solution(ineq, eq, n, m) {
//   if (eq === "=" && n === m) return 1;
//   if (ineq === "<" && n < m) return 1;
//   if (ineq === ">" && n > m) return 1;
//   return 0;
// }

// sol3
// const operations = {
//   ">=": (n, m) => n >= m,
//   "<=": (n, m) => n <= m,
//   ">!": (n, m) => n > m,
//   "<!": (n, m) => n < m,
// };
// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }

// sol4
// function solution(ineq, eq, n, m) {
//   var str = (n + ineq + eq + m).replace("!", "");
//   var answer = eval(str) ? 1 : 0;
//   return answer;
// }

// eval이 안좋다는 의견 ++
