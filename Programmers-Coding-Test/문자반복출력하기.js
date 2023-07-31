/*
문제 설명:
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 
return 하도록 solution 함수를 완성해보세요.

제한사항:
📌 2 ≤ my_string 길이 ≤ 5
📌 2 ≤ n ≤ 10
📌 "my_string"은 영어 대소문자로 이루어져 있습니다.
*/

function solution(my_string, n) {
  if (my_string < 2 || 5 < my_string) {
    return "length error";
  }
  if (n < 2 || 10 < n) {
    return "number error";
  }
  //my_string 유효성 검사 생략
  return my_string
    .split("")
    .map((char) => char.repeat(n))
    .join("");
}

// function solution(my_string, n) {
//   if(my_string<2 || 5<my_string){return 'length error';}
//   if(n<2 || 10<n){return 'number error';}

//   const myArray = [...my_string];
//   let toAnswer = [];

//   for (let i = 0; i < myArray.length; i++) {
//       for (let j = 0; j < n; j++) {
//           toAnswer.push(myArray[i]);
//       }
//   }

//   return toAnswer.join('');
// }
