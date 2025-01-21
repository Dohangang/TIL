/*
문제 설명:
다음은 어느 의류 쇼핑몰에서 판매 중인 상품들의 정보를 담은 PRODUCT 테이블입니다. 
PRODUCT 테이블은 아래와 같은 구조로 되어있으며, PRODUCT_ID, PRODUCT_CODE, PRICE는 각각 상품 ID, 상품코드, 판매가를 나타냅니다.

Column         name	Type	     Nullable
PRODUCT_ID	   INTEGER	       FALSE
PRODUCT_CODE	 VARCHAR(8)    	 FALSE
PRICE	         INTEGER	       FALSE

상품 별로 중복되지 않는 8자리 상품코드 값을 가지며, 앞 2자리는 카테고리 코드를 의미합니다.
PRODUCT 테이블에서 판매 중인 상품 중 가장 높은 판매가를 출력하는 SQL문을 작성해주세요. 이때 컬럼명은 MAX_PRICE로 지정해주세요.

제한사항:
📌 
*/

SELECT MAX(PRICE) AS MAX_PRICE FROM PRODUCT;

-- SELECT PRICE AS MAX_PRICE FROM PRODUCT
-- ORDER BY PRICE DESC LIMIT 1;

-- ASC DESC 잊지 말 것

-- ORDER BY
-- - 결과를 정렬할 때 사용한다. ASC(오름차순) DESC(내림차순)을 사용하여 순서 지정
-- - SELECT column_1, column_2 FROM table ORDER BY column_1 ASC/DESC
-- - SELECT column_1, column_2, column_3 FROM table ORDER BY column_1, column_2
--      → column_1에 대해 먼저 정렬하고 column_2를 이후에 정렬한다
-- - SELECT column_1, column_2, column_3 FROM table 
--    ORDER BY column_1 DESC, column_2 ASC  
--      → 개별로 가능
-- - SELECT 에 존재하지 않는 column도 ORDER BY 할 수 있지만 논리적으로 별로다