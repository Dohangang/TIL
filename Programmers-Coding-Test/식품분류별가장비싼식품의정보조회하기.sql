/*
문제 설명:
다음은 식품의 정보를 담은 FOOD_PRODUCT 테이블입니다. FOOD_PRODUCT 테이블은 다음과 같으며 
PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE는 식품 ID, 식품 이름, 식품코드, 식품분류, 식품 가격을 의미합니다.

Column name	Type	Nullable
PRODUCT_ID	VARCHAR(10)	FALSE
PRODUCT_NAME	VARCHAR(50)	FALSE
PRODUCT_CD	VARCHAR(10)	TRUE
CATEGORY	VARCHAR(10)	TRUE
PRICE	NUMBER	TRUE

FOOD_PRODUCT 테이블에서 식품분류별로 가격이 제일 비싼 식품의 분류, 가격, 이름을 조회하는 SQL문을 작성해주세요. 
이때 식품분류가 '과자', '국', '김치', '식용유'인 경우만 출력시켜 주시고 결과는 식품 가격을 기준으로 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT CATEGORY, PRICE, PRODUCT_NAME
FROM FOOD_PRODUCT F
WHERE CATEGORY IN ('과자', '국', '김치', '식용유')
AND PRICE = (
    SELECT MAX(PRICE) 
    FROM FOOD_PRODUCT 
    WHERE CATEGORY = F.CATEGORY
)
ORDER BY PRICE DESC;

-- WITH Ranked_Food AS (
--     SELECT CATEGORY, PRICE, PRODUCT_NAME,
--            RANK() OVER (PARTITION BY CATEGORY ORDER BY PRICE DESC) AS rnk
--     FROM FOOD_PRODUCT
--     WHERE CATEGORY IN ('과자', '국', '김치', '식용유')
-- )
-- SELECT CATEGORY, PRICE, PRODUCT_NAME
-- FROM Ranked_Food
-- WHERE rnk = 1
-- ORDER BY PRICE DESC;


-- 추가 학습 정보
-- - WITH() // 공통 테이블 표현식 CTE, 서브쿼리를 깔끔하게 정리하는 임시 테이블 // 
-- WITH Temp AS (SELECT ...)

-- - RANK() // 순위 매기는 함수, 데이터 정렬 후 순위 매김(동점 시 건너뜀) // 
-- RANK() OVER (ORDER BY PRICE DESC)

-- - OVER // 윈도우 함수(RANK, DENSE_RANK, ROW_NUMBER, SUM 등)를 적용하는 범위 지정, 
-- RANK() OVER (ORDER BY PRICE DESC)

-- -  PARTITION BY // 특정 그룹별로 나눠서 윈도우 함수 적용 // 
-- PARTITION BY CATEGORY ORDER BY PRICE DESC
