/*
문제 설명:
다음은 식당의 정보를 담은 REST_INFO 테이블입니다. REST_INFO 테이블은 다음과 같으며 
REST_ID, REST_NAME, FOOD_TYPE, VIEWS, FAVORITES, PARKING_LOT, ADDRESS, TEL은 
식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.

Column name	Type	Nullable
REST_ID	VARCHAR(5)	FALSE
REST_NAME	VARCHAR(50)	FALSE
FOOD_TYPE	VARCHAR(20)	TRUE
VIEWS	NUMBER	TRUE
FAVORITES	NUMBER	TRUE
PARKING_LOT	VARCHAR(1)	TRUE
ADDRESS	VARCHAR(100)	TRUE
TEL	VARCHAR(100)	TRUE

REST_INFO 테이블에서 음식종류별로 즐겨찾기수가 가장 많은 식당의 음식 종류, ID, 식당 이름, 즐겨찾기수를 조회하는 SQL문을 작성해주세요. 
이때 결과는 음식 종류를 기준으로 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT FOOD_TYPE, REST_ID, REST_NAME, FAVORITES
FROM REST_INFO AS RI
WHERE FAVORITES = (
    SELECT MAX(FAVORITES)
    FROM REST_INFO
    WHERE FOOD_TYPE = RI.FOOD_TYPE
)
ORDER BY FOOD_TYPE DESC;

-- - WITH() // 공통 테이블 표현식 CTE, 서브쿼리를 깔끔하게 정리하는 임시 테이블 // 
-- WITH Temp AS (SELECT ...)

-- - RANK() // 순위 매기는 함수, 데이터 정렬 후 순위 매김(동점 시 건너뜀) // 
-- RANK() OVER (ORDER BY PRICE DESC)

-- - OVER // 윈도우 함수(RANK, DENSE_RANK, ROW_NUMBER, SUM 등)를 적용하는 범위 지정, 
-- RANK() OVER (ORDER BY PRICE DESC)

-- -  PARTITION BY // 특정 그룹별로 나눠서 윈도우 함수 적용 // 
-- PARTITION BY CATEGORY ORDER BY PRICE DESC