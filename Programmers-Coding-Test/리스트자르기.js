/*
문제 설명:
정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. 
slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

    n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
    n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
    n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
    n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로

올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.


제한사항:
📌 n 은 1, 2, 3, 4 중 하나입니다.
📌 slicer의 길이 = 3
📌 slicer에 담긴 정수를 차례대로 a, b, c라고 할 때
      0 ≤ a ≤ b ≤ num_list의 길이 - 1
      1 ≤ c ≤ 3
📌 5 ≤ num_list의 길이 ≤ 30
📌 0 ≤ num_list의 원소 ≤ 100
*/

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
  }
}

// 구조분해할당과 switch의 활용

// **switch 문**
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( '비교하려는 값보다 작습니다.' );
//     break;

//          *case 4:
//            alert( '비교하려는 값과 일치합니다.' );
//            break;*

//          case 5:
//            alert( '비교하려는 값보다 큽니다.' );
//            break;
//          default:
//            alert( "어떤 값인지 파악이 되지 않습니다." );
//         }

// - 변수 `a`의 값과 첫 번째 `case`문의 값 `3 ('value1')`를 일치 비교한 후, 두 번째 `case`문의
//  값 `4 ('value2')`와 비교합니다. 이런 과정은 계속 이어집니다.
// - `case`문에서 변수 `a`의 값과 일치하는 값을 찾으면 해당 `case` 문의 아래의 코드가 실행됩니다. 이때, `break`문을 만나거나 `switch` 문이 끝나면 코드의 실행은 멈춥니다.
// - 값과 일치하는 `case`문이 없다면, `default`문 아래의 코드가 실행됩니다(`default` 문이 있는 경우)
// - **`case`문 안에 `break`문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 `case`문을 실행합니다.**
