/*
문제 설명:
사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 
사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.
단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 word의 길이는 1 이상 5 이하입니다.
📌 word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.
*/

function solution(word) {
  const pocket = ["A", "E", "I", "O", "U"];
  const cases = [781, 156, 31, 6, 1];
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const index = pocket.indexOf(word[i]);
    answer += index * cases[i] + 1;
  }

  return answer;
}

function solution(words) {
  return words
    .split("")
    .reduce(
      (r, c, i) =>
        r + [781, 156, 31, 6, 1][i] * ["A", "E", "I", "O", "U"].indexOf(c) + 1,
      0
    );
}

// 📘 요약 주석
// - 모음 A, E, I, O, U로 만들 수 있는 모든 단어를 사전 순으로 정렬한 순서 찾기
// - 각 자리에서 가능한 단어 수를 미리 계산해 cases로 저장 (ex. 첫 자리: 5⁴ + 5³ + 5² + 5¹ + 5⁰ = 781)
// - 단어의 각 자리마다: (현재 글자의 인덱스) × (자리 가중치) + 1 을 누적
//   → index * cases는 해당 글자보다 앞선 글자들이 만든 단어 수
//   → +1은 자기 자신(EIO 등 포함)
// - 결국 A부터 시작해서 word가 나올 때까지 사전 넘기듯 계산하는 방식

// arr.reduce(callback(accumulator, currentValue, index, array), initialValue);  // 누적값, 현재값, 인덱스, 요소), 초기값)
