/*
문제 설명:
길이가 같은 두 문자열 str1과 str2가 주어집니다.
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 1 ≤ str1의 길이 = str2의 길이 ≤ 10
      str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
*/

function solution(str1, str2) {
  let answer = [];

  for (let i = 0; i < str1.length; i++) {
    answer.push(str1[i]);
    answer.push(str2[i]);
  }

  return answer.join("");
}

// class Queue {
//   constructor(arr) {
//     this.queue = [...arr];
//     this.front = 0;
//     this.back = arr.length - 1;
//   }
//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;
//     return value;
//   }
//   isEmpty() {
//     return this.front === this.back;
//   }
//   show() {
//     return this.queue;
//   }
// }

// function solution(str1, str2) {
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");
//   const queue1 = new Queue([...str1]);
//   const queue2 = new Queue([...str2]);

//   let answer = arr1.slice().reduce((acc, curr) => {
//     const a = queue1?.dequeue() ?? "";
//     const b = queue2?.dequeue() ?? "";
//     return acc + a + b;
//   }, "");

//   if (arr2.length > 0) {
//     const remain = queue2.show().join("");
//     answer += remain;
//   }
//   return answer;
// }
