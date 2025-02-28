function useCache() {
  let cache = new Map(); // ✅ useCache() 내부 변수 (외부에서 직접 접근 불가)

  return {
    add: (key, value) => cache.set(key, value), // ✅ 객체의 메서드 (cache에 값 추가)
    get: (key) => cache.get(key), // ✅ 객체의 메서드 (cache에서 값 가져오기)
  };
}

const myCache = useCache(); // ✅ useCache() 실행 → 객체가 반환됨

// 1️⃣ useCache()는 { add: ..., get: ... } 객체를 반환하는 함수
// 2️⃣ myCache는 useCache()가 반환한 객체를 저장
// 3️⃣ 그래서 myCache.add("name", "Alice")처럼 객체의 메서드를 호출하는 방식으로 사용 가능

myCache.add("name", "Alice"); // cache에 "name" : "Alice" 저장
console.log(myCache.get("name")); // "Alice"

// ✅ myCache.add() 실행 과정:
// 1️⃣ myCache.add("name", "Alice")를 호출
// 2️⃣ add는 cache.set("name", "Alice")를 실행
// 3️⃣ 내부의 cache에 값이 저장됨

// ✅ myCache.get() 실행 과정:
// 1️⃣ myCache.get("name")을 호출
// 2️⃣ get은 cache.get("name")을 실행
// 3️⃣ "Alice" 값을 반환

function createUser(userName) {
  return {
    name: userName,
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };
}

const user = createUser("Alice");
console.log(user.greet()); // Hello, Alice!

// ✅ useCache()도 이런 방식으로 객체를 반환해서, 메서드를 사용할 수 있게 만든 것!
