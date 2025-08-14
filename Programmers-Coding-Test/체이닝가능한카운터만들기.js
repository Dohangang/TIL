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
