/*
문제 설명:
다음은 어느 의류 쇼핑몰의 온라인 상품 판매 정보를 담은 ONLINE_SALE 테이블과 오프라인 상품 판매 정보를 담은 OFFLINE_SALE 테이블 입니다. 
ONLINE_SALE 테이블은 아래와 같은 구조로 되어있으며 ONLINE_SALE_ID, USER_ID, PRODUCT_ID, SALES_AMOUNT, SALES_DATE는 
각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

Column name	Type	Nullable
ONLINE_SALE_ID	INTEGER	FALSE
USER_ID	INTEGER	FALSE
PRODUCT_ID	INTEGER	FALSE
SALES_AMOUNT	INTEGER	FALSE
SALES_DATE	DATE	FALSE

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.
OFFLINE_SALE 테이블은 아래와 같은 구조로 되어있으며 OFFLINE_SALE_ID, PRODUCT_ID, SALES_AMOUNT, SALES_DATE는 
각각 오프라인 상품 판매 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

Column name	Type	Nullable
OFFLINE_SALE_ID	INTEGER	FALSE
PRODUCT_ID	INTEGER	FALSE
SALES_AMOUNT	INTEGER	FALSE
SALES_DATE	DATE	FALSE

동일한 날짜, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다. ONLINE_SALE 테이블과 OFFLINE_SALE 테이블에서 
2022년 3월의 오프라인/온라인 상품 판매 데이터의 판매 날짜, 상품ID, 유저ID, 판매량을 출력하는 SQL문을 작성해주세요. 
OFFLINE_SALE 테이블의 판매 데이터의 USER_ID 값은 NULL 로 표시해주세요. 
결과는 판매일을 기준으로 오름차순 정렬해주시고 판매일이 같다면 상품 ID를 기준으로 오름차순, 상품ID까지 같다면 유저 ID를 기준으로 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT 
    DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    PRODUCT_ID,
    USER_ID,
    SALES_AMOUNT
FROM ONLINE_SALE
WHERE SALES_DATE BETWEEN '2022-03-01' AND '2022-03-31'

UNION ALL

SELECT
    DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    PRODUCT_ID,
    NULL AS USER_ID,
    SALES_AMOUNT
FROM OFFLINE_SALE
WHERE SALES_DATE BETWEEN '2022-03-01' AND '2022-03-31'

ORDER BY SALES_DATE ASC, PRODUCT_ID ASC, USER_ID ASC;



