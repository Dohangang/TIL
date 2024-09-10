/*
문제 설명:
다음과 같이 출력하도록 코드를 작성해 주세요.

제한사항:
📌 출력 예시
      !@#$%^&*(\'"<>?:;
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});

// 무슨 이런 문제가!!?
