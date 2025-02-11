/*
문제 설명:
다음은 어느 의류 쇼핑몰에서 판매중인 상품들의 정보를 담은 PRODUCT 테이블입니다. PRODUCT 테이블은 아래와 같은 구조로 되어있으며, 
PRODUCT_ID, PRODUCT_CODE, PRICE는 각각 상품 ID, 상품코드, 판매가를 나타냅니다.

Column name	    Type	      Nullable
PRODUCT_ID	    INTEGER    	FALSE
PRODUCT_CODE	  VARCHAR(8)	FALSE
PRICE	          INTEGER	    FALSE

상품 별로 중복되지 않는 8자리 상품코드 값을 가지며, 앞 2자리는 카테고리 코드를 의미합니다.
PRODUCT 테이블에서 상품 카테고리 코드(PRODUCT_CODE 앞 2자리) 별 상품 개수를 출력하는 SQL문을 작성해주세요. 
결과는 상품 카테고리 코드를 기준으로 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT LEFT(PRODUCT_CODE, 2) AS CATEGORY_CODE, COUNT(*) AS PRODUCT_COUNT
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2)
ORDER BY CATEGORY_CODE ASC;

-- 코드 앞 2자리 추출, 각 카테고리별 상품 개수 계산, 코드별로 그룹화, 오름차순
-- SELECT 후에 나오는 열들이 먼저 수행되는 건 아니다. 그래서 COUNT가 그룹화된 데이터에 작동한다.