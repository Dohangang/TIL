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

단, 잡은 물고기의 길이가 10cm 이하일 경우에는 LENGTH 가 NULL 이며, LENGTH 에 NULL 만 있는 경우는 없습니다
잡은 물고기의 평균 길이를 출력하는 SQL문을 작성해주세요.
평균 길이를 나타내는 컬럼 명은 AVERAGE_LENGTH로 해주세요.
평균 길이는 소수점 3째자리에서 반올림하며, 10cm 이하의 물고기들은 10cm 로 취급하여 평균 길이를 구해주세요.

제한사항:
📌 
*/

SELECT ROUND(AVG(LENGTH), 2) AS AVERAGE_LENGTH 
FROM (
    SELECT IF(LENGTH IS NULL, 10, LENGTH) AS LENGTH 
    FROM FISH_INFO
) AS sub;

/*
ROUND(123.456, 2) -> 123.45
ROUND(123.456, -1) -> 120
TRUNCATE(123.456, 2) -> 123.45
TRUNCATE(123.456, -1) -> 120

IFNULL(컬럼명, something) -> 컬럼이 NULL이면 something으로 치환하여 반환
NULLIF(전자, 후자) -> 전자 후자가 같으면 NULL 반환, 다르면 전자 반환
COALESCE(value1, value2, ...) -> 왼쪽부터 순서대로 NULL값이 아니라면 반환, 모든 값이 NULL이면 NULL 반환
*/