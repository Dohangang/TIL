/*
문제 설명:
정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 
각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.


제한사항:
📌 date1의 길이 = date2의 길이 = 3
      0 ≤ year ≤ 10,000
      1 ≤ month ≤ 12
      day는 month에 따라 가능한 날짜로 주어집니다.
*/

function solution(date1, date2) {
  if (date1[0] < date2[0]) {
    return 1;
  } else if (date1[0] > date2[0]) {
    return 0;
  }

  if (date1[1] < date2[1]) {
    return 1;
  } else if (date1[1] > date2[1]) {
    return 0;
  }

  if (date1[2] < date2[2]) {
    return 1;
  } else if (date1[2] > date2[2]) {
    return 0;
  }

  return 0;
}

// const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);
