/*
문제 설명:
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항:
📌 0 <numer1, denom1, numer2, denom2 < 1,000
*/

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  let numerator = numer1 * denom2 + numer2 * denom1;
  let denominator = denom1 * denom2;

  let g = gcd(numerator, denominator);
  return [numerator / g, denominator / g];
}

// --------오랜만에 복습---------
// 유클리드 호제법 활용  (a=bq+r, b=rq'+r'  ->  a와 b의 최대공약수가 b와 r의 최대공약수와 같다)
// -> a = bq + r  좌변도 우변도 최대공약수의 곱이다 (a'g = b'gq + r'g,  a'g=a  b'g=b  r'g=r,  g는 최대공약수라고 가정한다.)
// gcd = Greatest Common Divisor
// lcm = Least Common Multiple

// 유클리드 호제법을 사용한 gcd공식을 사용했다. 정수론, a=bq+r, gcd(a,b)=gcd(b,r)
// gcd(a,b)=ax+by 도 있으니 유의할 것
