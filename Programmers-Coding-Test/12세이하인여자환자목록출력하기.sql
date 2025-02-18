/*
문제 설명:
다음은 종합병원에 등록된 환자정보를 담은 PATIENT 테이블입니다. PATIENT 테이블은 다음과 같으며 
PT_NO, PT_NAME, GEND_CD, AGE, TLNO는 각각 환자번호, 환자이름, 성별코드, 나이, 전화번호를 의미합니다.

Column name	    Type	          Nullable
PT_NO	          VARCHAR(10)	    FALSE
PT_NAME	        VARCHAR(20)	    FALSE
GEND_CD	        VARCHAR(1)	    FALSE
AGE	            INTEGER	        FALSE
TLNO	          VARCHAR(50)	    TRUE

PATIENT 테이블에서 12세 이하인 여자환자의 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 
이때 전화번호가 없는 경우, 'NONE'으로 출력시켜 주시고 결과는 나이를 기준으로 내림차순 정렬하고, 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT PT_NAME, PT_NO, GEND_CD, AGE, 
       COALESCE(TLNO, 'NONE') AS TLNO
FROM PATIENT
WHERE AGE <= 12 AND GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME ASC;

COALESCE(TLNO, 'NONE') -> TLNO가 NULL이면 'NONE' 반환, 여러 값 중 첫 번째 NULL이 아닌 값 반환
IF(조건, 참일 때 값, 거짓일 때 값) -> IF(GEND_CD='M', '남성', '여성'), 조건에 따라 두 가지 값 중 하나 반환
CASE WHEN THEN END -> CASE WHEN AGE < 13 THEN '어린이' WHEN AGE < 20 THEN '청소년' ELSE '성인' END, 다양한 조건 사용