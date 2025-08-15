/*
문제 설명:
createCounter라는 함수를 작성하세요. 이 함수는 내부에 숫자를 세는 비공개(private) 변수를 가지며, 이 변수를 조작하는 객체를 반환합니다.

createCounter 함수는 인자를 받지 않습니다. 함수는 아래 세 개의 메서드를 가진 객체를 반환해야 합니다.
      increment(): 내부 카운터 값을 1 증가시킵니다. 
      decrement(): 내부 카운터 값을 1 감소시킵니다.
      getValue(): 현재 카운터 값을 반환합니다.

핵심: increment와 decrement 메서드는 메서드 체이닝(Method Chaining)이 가능해야 합니다. 
즉, counter.increment().increment()와 같은 연쇄적인 호출이 가능해야 합니다.
카운터의 현재 값은 오직 getValue() 메서드를 통해서만 접근할 수 있어야 합니다. (정보 은닉)

제한사항:
📌 
*/

function createCounter() {
  let value = 0;

  const counterObject = {
    increment() {
      value++;
      return this;
    },

    decrement() {
      value--;
      return this;
    },

    getValue() {
      return value;
    },
  };

  return counterObject;
}

/*
1. 클로저를 이용한 정보 은닉 
함수가 실행된 뒤에도 내부 변수 value는 사라지지 않는다. 내부 변수는 메서드들을 통해서만 접근 가능하다.
-> 외부에서 직접적인 변수 수정을 막을 수 있는 방법. typescript를 쓰면 java처럼 지정해버릴 수 있음

  TypeScript `private` 클래스 밖에서 쓰면 에러를 띄워줘. 라는 규칙에 가깝다.
  JavaScript 클로저: 바깥 스코프에서는 안쪽 스코프의 변수에 절대로 접근할 수 없다. 라는 물리적 격리에 가깝다.
  value 변수는 '스코프' 라는 공간에 살고, '클로저' 는 그 공간을 계속 참조할 수 있도록 다리를 놓아주는 '기능' 또는 '현상' 

2. `return this`를 활용한 메서드 체이닝
this는 counterObject를 나타낸다(호출한 객체). 
return this를 통해 객체 자체가 반환되므로 그 뒤에 increment getValue와 같은 메소드를 연이어 쓸 수 있다. 
*/
