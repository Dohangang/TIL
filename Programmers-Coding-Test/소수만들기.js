/*
문제 설명:
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항:
📌 nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
📌 nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 홀수가 세개인 경우, 홀수 하나와 짝수 두개인 경우를 나누어서 하려 했지만
// 데이터가 꽤나 많아야 의미가 있는 듯하여 그냥 진행.
// sqrt를 하고 하면 꽤나 많은 과정을 생략할 수 있다.
