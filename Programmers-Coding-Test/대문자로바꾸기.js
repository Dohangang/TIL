/*
문제 설명:
알파벳으로 이루어진 문자열 myString이 주어집니다. 
모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

제한사항:
📌 1 ≤ myString의 길이 ≤ 100,000
📌 myString은 알파벳으로 이루어진 문자열입니다.
*/

function solution(myString) {
  if (myString.length < 1 || 100000 < myString.length) {
    return "length error";
  }
  const checkNumber = /[0-9]/;
  const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const checkCharacter = /[~!@#\#$%<>^&*]/; //특수문자

  if (
    checkNumber.test(myString) ||
    checkKorean.test(myString) ||
    checkCharacter.test(myString)
  ) {
    return "Only English";
  }

  return myString.toUpperCase();
}

// 사용자가 영어만 입력하기 바랄 때, 더 좋은 방안이 있나 고려해볼 것 (코드가 깨끗하지 못함)
