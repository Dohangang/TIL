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
FISH_NAME_INFO 테이블은 물고기의 이름에 대한 정보를 담고 있습니다. 
FISH_NAME_INFO 테이블의 구조는 다음과 같으며, FISH_TYPE, FISH_NAME 은 각각 물고기의 종류(숫자), 물고기의 이름(문자) 입니다.

Column name	Type	Nullable
FISH_TYPE	INTEGER	FALSE
FISH_NAME	VARCHAR	FALSE

FISH_INFO 테이블에서 잡은 BASS와 SNAPPER의 수를 출력하는 SQL 문을 작성해주세요.
컬럼명은 'FISH_COUNT`로 해주세요.

제한사항:
📌 
*/

SELECT COUNT(FISH_TYPE) AS FISH_COUNT FROM FISH_INFO
WHERE FISH_TYPE IN (
SELECT FISH_TYPE FROM FISH_NAME_INFO
WHERE FISH_NAME IN ('BASS', 'SNAPPER')
)

-- SELECT COUNT(FI.FISH_TYPE) AS FISH_COUNT
-- FROM FISH_INFO FI
-- JOIN FISH_NAME_INFO FNI ON FI.FISH_TYPE = FNI.FISH_TYPE
-- WHERE FNI.FISH_NAME IN ('BASS', 'SNAPPER')
