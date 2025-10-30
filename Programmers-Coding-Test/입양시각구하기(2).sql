/*
문제 설명:
ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. 
ANIMAL_OUTS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 
각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	TYPE	NULLABLE
ANIMAL_ID	VARCHAR(N)	FALSE
ANIMAL_TYPE	VARCHAR(N)	FALSE
DATETIME	DATETIME	FALSE
NAME	VARCHAR(N)	TRUE
SEX_UPON_OUTCOME	VARCHAR(N)	FALSE

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 
0시부터 23시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 
이때 결과는 시간대 순으로 정렬해야 합니다.

제한사항:
📌 
*/

WITH HOURS AS (
    SELECT 0 AS HOURTERM
    UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3
    UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6
    UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
    UNION ALL SELECT 10 UNION ALL SELECT 11 UNION ALL SELECT 12
    UNION ALL SELECT 13 UNION ALL SELECT 14 UNION ALL SELECT 15
    UNION ALL SELECT 16 UNION ALL SELECT 17 UNION ALL SELECT 18
    UNION ALL SELECT 19 UNION ALL SELECT 20 UNION ALL SELECT 21
    UNION ALL SELECT 22 UNION ALL SELECT 23
)

SELECT 
    H.HOURTERM AS HOUR,
    COUNT(ANIMAL_ID) AS COUNT
FROM HOURS AS H
LEFT JOIN ANIMAL_OUTS AS A
  ON HOUR(A.DATETIME) = H.HOURTERM
GROUP BY HOURTERM
ORDER BY HOURTERM;


-- 🌟sql 구문 중에 alias(별칭)을 AS 뒤에 지정하는 것 외에 작성해도 되는 곳
--     SELECT COUNT(*) AS <ALIAS>
--     ORDER BY <ALIAS> DESC
--     HAVING ALIAS > 10
-- 안되는 곳
--     WHERE -> 아직 alias가 생성되기 전 단계라 별칭 사용 불가
--     GROUP BY -> 본래 컬럼 표현으로 그룹화 해야함

-- 🌟UNION ALL : 쿼리의 결과를 합쳐서 하나의 결과를 만드는 명령, 중복 가능 그래서 좀 더 빠름 (UNION은 자동 중복 제거, 좀 더 느림)
--       SELECT column1, column2 FROM tableA
--       UNION ALL
--       SELECT column1, column2 FROM tableB;

-- 🌟CTE(Common Table Expression) : 임시 테이블로 분리, 이름을 붙여 사용, 가독성과 재사용성을 높임.
--       WITH CTE_NAME AS (
--           SELECT ...
--       )
--       SELECT ...
--       FROM CTE_NAME

-- 🌟COALESCE(표현식1, 표현식2, ...)
-- 첫 번째로 NULL이 아닌 값을 반환합니다.
-- 전부 NULL이면 마지막 값이 반환됩니다.