/*
문제 설명:
문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.


제한사항:
📌 1 ≤ str의 길이 ≤ 1,000,000
📌 str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0];
  console.log(str);
});
