/*
문제 설명:
대학교 동아리 관리 시스템의 데이터를 분석하려고 합니다. CLUBS(동아리 정보) 테이블과 CLUB_MEMBERS(동아리 회원 정보) 테이블이 있습니다.
두 테이블을 이용해, 'IT' 계열 동아리 중에서 2023년 이후에 가입한 신규회원이 5명 이상인 
동아리의 ID, 동아리명, 그리고 신규 회원 수를 조회하는 SQL문을 작성해주세요.

* 신규 회원 수를 나타내는 컬럼명은 NEW_MEMBER_COUNT로 지정해주세요.
* 결과는 신규 회원 수가 많은 순서대로 정렬하고, 신규 회원 수가 같다면 동아리 ID를 기준으로 오름차순 정렬해주세요.

`CLUBS` (동아리 정보)
┌─────────────┬─────────┬─────────────────────────────────────┐
│ Column Name │ Type    │ Description                         │
├─────────────┼─────────┼─────────────────────────────────────┤
│ `CLUB_ID`   │ INT     │ 동아리 ID (기본 키)                       │
│ `CLUB_NAME` │ VARCHAR │ 동아리명                                │
│ `CATEGORY`  │ VARCHAR │ 동아리 계열 (예: '스포츠', '학술', 'IT', '봉사') │
└─────────────┴─────────┴─────────────────────────────────────┘

`CLUB_MEMBERS` (동아리 회원 정보)
┌───────────────┬─────────┬──────────────┐
│ Column Name   │ Type    │ Description  │
├───────────────┼─────────┼──────────────┤
│ `MEMBER_ID`   │ INT     │ 회원 ID (기본 키) │
│ `CLUB_ID`     │ INT     │ 소속 동아리 ID    │
│ `MEMBER_NAME` │ VARCHAR │ 회원 이름        │
│ `JOIN_DATE`   │ DATE    │ 가입 일자        │
└───────────────┴─────────┴──────────────┘

제한사항:
📌 
*/

SELECT
  C.CLUB_ID,
  C.CLUB_NAME,
  COUNT(M.MEMBER_ID) AS NEW_MEMBER_COUNT
FROM
  CLUBS AS C
JOIN 
  CLUB_MEMBERS AS M ON C.CLUB_ID = M.CLUB_ID
WHERE
  C.CATEGORY = 'IT' 
  AND M.JOIN_DATE >= '2023-01-01'
GROUP BY
  C.CLUB_ID, C.CLUB_NAME
HAVING
  COUNT(M.MEMBER_ID) >= 5
ORDER BY 
  NEW_MEMBER_COUNT DESC, C.CLUB_ID ASC;