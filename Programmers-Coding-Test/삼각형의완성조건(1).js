/*
문제 설명:
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
   - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항:
📌 sides의 원소는 자연수입니다.
📌 sides의 길이는 3입니다.
📌 1 ≤ sides의 원소 ≤ 1,000
*/

function solution(sides) {
  // if(sides%1!==0 && sides!==Math.floor(sides)){return 'not natural number';}
  if (sides.length !== 3) {
    return "length error";
  }
  if (sides.find((x) => x < 1 || 1000 < x)) {
    return "sides range error";
  }

  if (
    2 * Math.max(sides[0], sides[1], sides[2]) <
    sides[0] + sides[1] + sides[2]
  ) {
    return 1;
  } else {
    return 2;
  }
}

// 주석 처리 된 코드는 자연수가 아닐 때 활용하고자 작성한 부분이었으나 배열의 요소에 접근하지 않았던 관계로 제거함.
//sort()를 사용하여 크기에 따른 정렬 후 비교 하는 방법도 있다.
