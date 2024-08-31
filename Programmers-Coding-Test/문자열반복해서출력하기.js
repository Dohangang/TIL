/*
문제 설명:
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.


제한사항:
📌 1 ≤ str의 길이 ≤ 10
📌 1 ≤ n ≤ 5
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const str = input[0];
  const n = Number(input[1]);

  const result = str.repeat(n);

  console.log(result);
});
