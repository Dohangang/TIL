/*
문제 설명:
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 
     지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

secret map

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

제한사항:
📌 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
📌 1 ≦ n ≦ 16
📌 arr1, arr2는 길이 n인 정수 배열로 주어진다.
📌 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
*/

function solution(n, arr1, arr2) {
  function toBinary(num, length) {
    let binary = num.toString(2);
    while (binary.length < length) {
      binary = "0" + binary;
    }
    return binary;
  }

  function mergeMaps(map1, map2) {
    const mergedMap = [];
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j < n; j++) {
        if (map1[i][j] === "1" || map2[i][j] === "1") {
          row += "#";
        } else {
          row += " ";
        }
      }
      mergedMap.push(row);
    }
    return mergedMap;
  }

  const binaryArr1 = arr1.map((num) => toBinary(num, n));
  const binaryArr2 = arr2.map((num) => toBinary(num, n));

  const result = mergeMaps(binaryArr1, binaryArr2);

  return result;
}

// const solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

// padStart padEnd  OR비트연산자  정규표현식
