/*
문제 설명:
다음은 IT 회사의 EMPLOYEE 테이블과 PROJECT 테이블입니다.

EMPLOYEE 테이블
Column name	Type	Nullable	설명
EMP_ID	INTEGER	FALSE	직원 ID
NAME	VARCHAR	FALSE	직원 이름
DEPT	VARCHAR	FALSE	부서명
SALARY	INTEGER	FALSE	월급

PROJECT 테이블
Column name	Type	Nullable	설명
PROJECT_ID	INTEGER	FALSE	프로젝트 ID
EMP_ID	INTEGER	FALSE	참여 직원 ID
HOURS	INTEGER	FALSE	투입 시간

각 부서별로 가장 많은 프로젝트 시간(HOURS)을 투입한 직원의 이름과 총 시간을 구하세요.
만약 같은 부서에서 최대 시간이 동일한 직원이 여러 명이라면 모두 출력합니다.
결과 컬럼은 DEPT, NAME, TOTAL_HOURS 이며,
DEPT 오름차순 → NAME 오름차순으로 정렬하세요.

제한사항:
📌 
*/

WITH EMP_HOURS AS (
    SELECT 
        E.EMP_ID,
        E.NAME,
        E.DEPT,
        SUM(P.HOURS) AS TOTAL_HOURS
    FROM EMPLOYEE E
    JOIN PROJECT P ON E.EMP_ID = P.EMP_ID
    GROUP BY E.EMP_ID, E.NAME, E.DEPT
),
MAX_HOURS AS (
    SELECT 
        DEPT,
        MAX(TOTAL_HOURS) AS MAX_TOTAL
    FROM EMP_HOURS
    GROUP BY DEPT
)
SELECT 
    H.DEPT,
    H.NAME,
    H.TOTAL_HOURS
FROM EMP_HOURS H
JOIN MAX_HOURS M ON H.DEPT = M.DEPT AND H.TOTAL_HOURS = M.MAX_TOTAL
ORDER BY H.DEPT ASC, H.NAME ASC;
