/*
문제 설명:
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항:
📌 my_string은 숫자와 알파벳으로 이루어져 있습니다.
📌 1 ≤ my_string의 길이 ≤ 1000
📌 1 ≤ n ≤ my_string의 길이
*/

function solution(my_string, n) {
  const reg = /^[a-zA-Z0-9]*$/;
  if (!reg.test(my_string)) {
    return "regular expression error";
  }
  if (my_string.length < 1 || 1000 < my_string.length) {
    return "length error";
  }
  if (my_string < n || n < 1) {
    return "length error";
  }

  return my_string.slice(0, n);
}
