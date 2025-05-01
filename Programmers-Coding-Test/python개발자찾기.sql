/*
문제 설명:
DEVELOPER_INFOS 테이블은 개발자들의 프로그래밍 스킬 정보를 담은 테이블입니다. 
DEVELOPER_INFOS 테이블 구조는 다음과 같으며, ID, FIRST_NAME, LAST_NAME, EMAIL, SKILL_1, SKILL_2, SKILL_3는 
각각 ID, 이름, 성, 이메일, 첫 번째 스킬, 두 번째 스킬, 세 번째 스킬을 의미합니다.

NAME	TYPE	UNIQUE	NULLABLE
ID	VARCHAR(N)	Y	N
FIRST_NAME	VARCHAR(N)	N	Y
LAST_NAME	VARCHAR(N)	N	Y
EMAIL	VARCHAR(N)	Y	N
SKILL_1	VARCHAR(N)	N	Y
SKILL_2	VARCHAR(N)	N	Y
SKILL_3	VARCHAR(N)	N	Y

DEVELOPER_INFOS 테이블에서 Python 스킬을 가진 개발자의 정보를 조회하려 합니다. 
Python 스킬을 가진 개발자의 ID, 이메일, 이름, 성을 조회하는 SQL 문을 작성해 주세요.
결과는 ID를 기준으로 오름차순 정렬해 주세요.

제한사항:
📌 
*/

SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS
WHERE SKILL_1 = 'Python'
   OR SKILL_2 = 'Python'
   OR SKILL_3 = 'Python'
ORDER BY ID ASC;
