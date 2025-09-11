/*
문제 설명:
낚시앱에서 사용하는 FISH_INFO 테이블은 잡은 물고기들의 정보를 담고 있습니다. 
FISH_INFO 테이블의 구조는 다음과 같으며 ID, FISH_TYPE, LENGTH, TIME은 
각각 잡은 물고기의 ID, 물고기의 종류(숫자), 잡은 물고기의 길이(cm), 물고기를 잡은 날짜를 나타냅니다.

Column name	Type	Nullable
ID	INTEGER	FALSE
FISH_TYPE	INTEGER	FALSE
LENGTH	FLOAT	TRUE
TIME	DATE	FALSE

단, 잡은 물고기의 길이가 10cm 이하일 경우에는 LENGTH 가 NULL 이며, LENGTH 에 NULL 만 있는 경우는 없습니다.
FISH_NAME_INFO 테이블은 물고기의 이름에 대한 정보를 담고 있습니다. FISH_NAME_INFO 테이블의 구조는 다음과 같으며, 
FISH_TYPE, FISH_NAME 은 각각 물고기의 종류(숫자), 물고기의 이름(문자) 입니다.

Column name	Type	Nullable
FISH_TYPE	INTEGER	FALSE
FISH_NAME	VARCHAR	FALSE

물고기 종류 별로 가장 큰 물고기의 ID, 물고기 이름, 길이를 출력하는 SQL 문을 작성해주세요.
물고기의 ID 컬럼명은 ID, 이름 컬럼명은 FISH_NAME, 길이 컬럼명은 LENGTH로 해주세요.
결과는 물고기의 ID에 대해 오름차순 정렬해주세요.
단, 물고기 종류별 가장 큰 물고기는 1마리만 있으며 10cm 이하의 물고기가 가장 큰 경우는 없습니다.

제한사항:
📌 
*/

SELECT 
    FI.ID,
    FNI.FISH_NAME,
    FI.LENGTH
FROM FISH_INFO AS FI
JOIN FISH_NAME_INFO AS FNI ON FI.FISH_TYPE = FNI.FISH_TYPE
WHERE FI.LENGTH = (
    SELECT MAX(LENGTH)
    FROM FISH_INFO
    WHERE FISH_TYPE = FI.FISH_TYPE
)
ORDER BY FI.ID ASC;

-- GROUP BY를 사용하면 안되는 이유는 ID때문이다.
-- 본인은 처음에 GROUP BY를 사용하여 MAX(LENGTH)를 출력하려 했지만, ID가 SELECT문에 존재하기 때문에
-- ID와 FISH_NAME이 GROUP화 되면 MAX()를 쓴 것이 의미가 없다. 
-- 즉 ID, FISH_NAME 값이 완전히 같은 행끼리만 묶이는 결과로 이어져 원하는 결과를 얻지 못한다. 그룹핑이 의미가 없다


-- SELECT ID, FISH_NAME, LENGTH
-- FROM (
--     SELECT FI.ID, FNI.FISH_NAME, FI.LENGTH,
--            RANK() OVER(PARTITION BY FI.FISH_TYPE ORDER BY FI.LENGTH DESC) AS RANKING
--     FROM FISH_INFO AS FI
--     JOIN FISH_NAME_INFO AS FNI ON FI.FISH_TYPE = FNI.FISH_TYPE
-- ) T
-- WHERE RANKING = 1
-- ORDER BY ID ASC;

-- 윈도우 함수: 함수명() OVER( PARTITION BY 그룹컬럼 ORDER BY 정렬컬럼 ) -> 서브쿼리 활용보다 더 직관적이라는 평이다.