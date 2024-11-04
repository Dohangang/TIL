/*
문제 설명:
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.


제한사항:
📌 chicken은 정수입니다.
📌 0 ≤ chicken ≤ 1,000,000
*/

function solution(chicken) {
  var answer = Math.floor((chicken - 1) / 9);
  return answer;
}

// function solution(chicken) {
//   let serviceChicken = 0;
//   let coupons = chicken;

//   while (coupons >= 10) {
//     let newChicken = Math.floor(coupons / 10);
//     serviceChicken += newChicken;
//     coupons = (coupons % 10) + newChicken;
//   }

//   return serviceChicken;
// }
