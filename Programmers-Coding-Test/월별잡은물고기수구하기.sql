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
월별 잡은 물고기의 수와 월을 출력하는 SQL문을 작성해주세요.
잡은 물고기 수 컬럼명은 FISH_COUNT, 월 컬럼명은 MONTH로 해주세요.
결과는 월을 기준으로 오름차순 정렬해주세요.
단, 월은 숫자형태 (1~12) 로 출력하며 9 이하의 숫자는 두 자리로 출력하지 않습니다. 
잡은 물고기가 없는 월은 출력하지 않습니다.

제한사항:
📌 
*/

SELECT COUNT(ID) AS FISH_COUNT, MONTH(TIME) AS MONTH
FROM FISH_INFO
GROUP BY MONTH
ORDER BY MONTH ASC



-- SELECT TO_CHAR(TIME, 'MM') AS MONTH
-- FROM FISH_INFO;
-- '01', '02', ..., '09', '10', '11', '12'
-- 월을 문자열로 출력하면서 항상 두 자릿수로 표현하는 방법
-- 단, ORDER BY할 땐 문자열 정렬이라 '10'이 '2'보다 먼저 나올 수 있음


-- 잡은 물고기가 없는 월도 출력하기 위해선, 
-- WITH RECURSIVE months AS (
--     SELECT 1 AS month
--     UNION ALL
--     SELECT month + 1
--     FROM months
--     WHERE month < 12
-- )
-- 와 같이 1~12월을 생성해주고, join하여 출력한다