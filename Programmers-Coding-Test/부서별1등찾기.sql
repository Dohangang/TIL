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

-- MAX_HOURS를 만들어야 하는 이유에 대해 논리적으로 이해하는데 약간 시간을 소모했다.
-- EMP_HOURS를 통해서 바로 MAX를 사용하여 SELECT을 하면 되지 않을까 생각했지만, 문제에서 SELECT문에 H.NAME이 들어가 있기 때문에
-- GROUP BY에도 역시 H.NAME을 넣어야 오류가 나지 않는데, H.NAME을 넣는다면 기존의 EMP_HOURS와 똑같은 결과값이다. 
-- 그렇기 때문에 (1)직원별 총 시간 (2)부서별 최댓값 을 구해서 그 둘의 시간 값이 같은 사람을 뽑는 절차를 추가해주어야 한다.
-- 서브쿼리를 사용해도 좋지만 남들이 보기 좋은 것은 CTE라고 한다.
-- (본인은 서브쿼리가 더 직관적으로 보기 좋음, 엄청 길고 복잡한 쿼리가 된다면 모르겠지만 현 시점엔 그러함.)