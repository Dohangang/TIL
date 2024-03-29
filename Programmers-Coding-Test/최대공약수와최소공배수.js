/*
문제 설명:
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한사항:
📌 두 수는 1이상 1000000이하의 자연수입니다.
*/

function solution(n, m) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return [gcd(n, m), lcm(n, m)];
}

// >>>>>>>>> for문 신기한 활용 <<<<<<<<<<<<
// function gcdLcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }

// 유클리드 호제법 활용  (a=bq+r, b=rq'+r'  ->  a와 b의 최대공약수가 b와 r의 최대공약수와 같다)
// -> a = bq + r  좌변도 우변도 최대공약수의 곱이다 (a'g = b'gq + r'g,  a'g=a  b'g=b  r'g=r,  g는 최대공약수라고 가정한다.)
// gcd = Greatest Common Divisor
// lcm = Least Common Multiple
