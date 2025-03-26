/*
문제 설명:
다음은 식당 리뷰 사이트의 회원 정보를 담은 MEMBER_PROFILE 테이블입니다. 
MEMBER_PROFILE 테이블은 다음과 같으며 MEMBER_ID, MEMBER_NAME, TLNO, GENDER, DATE_OF_BIRTH는 
회원 ID, 회원 이름, 회원 연락처, 성별, 생년월일을 의미합니다.

Column name	Type	Nullable
MEMBER_ID	VARCHAR(100)	FALSE
MEMBER_NAME	VARCHAR(50)	FALSE
TLNO	VARCHAR(50)	TRUE
GENDER	VARCHAR(1)	TRUE
DATE_OF_BIRTH	DATE	TRUE

MEMBER_PROFILE 테이블에서 생일이 3월인 여성 회원의 ID, 이름, 성별, 생년월일을 조회하는 SQL문을 작성해주세요. 
이때 전화번호가 NULL인 경우는 출력대상에서 제외시켜 주시고, 결과는 회원ID를 기준으로 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT MEMBER_ID, MEMBER_NAME, GENDER, 
       DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE MONTH(DATE_OF_BIRTH) = 3  
  AND GENDER = 'W'  
  AND TLNO IS NOT NULL 
ORDER BY MEMBER_ID ASC;