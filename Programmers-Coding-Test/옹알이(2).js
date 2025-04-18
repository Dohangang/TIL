/*
문제 설명:
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항:
📌  1 ≤ babbling의 길이 ≤ 100
📌  1 ≤ babbling[i]의 길이 ≤ 30
📌  문자열은 알파벳 소문자로만 이루어져 있습니다.
*/

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let b = babbling[i];
    let temp = b;
    let isValid = true;

    for (let j = 0; j < words.length; j++) {
      const w = words[j];

      if (temp.includes(w + w)) {
        isValid = false;
        break;
      }

      temp = temp.split(w).join(" ");
    }

    if (isValid && temp.trim() === "") {
      count++;
    }
  }

  return count;
}

// function solution(babbling) {
//   const regexp1 = /(aya|ye|woo|ma)\1+/;
//   const regexp2 = /^(aya|ye|woo|ma)+$/;

//   return babbling.reduce(
//     (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
//     0
//   );
// }

/*
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
출력: apple, banana, cherry

const person = { name: "John", age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
출력:
name John
age 30

for (let x of 배열) → 배열의 요소 하나씩 (값)
for (let k in 객체) → 객체의 키 하나씩
*/
