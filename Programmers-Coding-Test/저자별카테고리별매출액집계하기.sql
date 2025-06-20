/*
문제 설명:
다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(BOOK), 저자 정보(AUTHOR) 테이블입니다.
BOOK 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

Column name	Type	Nullable	Description
BOOK_ID	INTEGER	FALSE	도서 ID
CATEGORY	VARCHAR(N)	FALSE	카테고리 (경제, 인문, 소설, 생활, 기술)
AUTHOR_ID	INTEGER	FALSE	저자 ID
PRICE	INTEGER	FALSE	판매가 (원)
PUBLISHED_DATE	DATE	FALSE	출판일

AUTHOR 테이블은 도서의 저자의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

Column name	Type	Nullable	Description
AUTHOR_ID	INTEGER	FALSE	저자 ID
AUTHOR_NAME	VARCHAR(N)	FALSE	저자명

BOOK_SALES 테이블은 각 도서의 날짜 별 판매량 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

Column name	Type	Nullable	Description
BOOK_ID	INTEGER	FALSE	도서 ID
SALES_DATE	DATE	FALSE	판매일
SALES	INTEGER	FALSE	판매량

2022년 1월의 도서 판매 데이터를 기준으로 저자 별, 카테고리 별 매출액(TOTAL_SALES = 판매량 * 판매가) 을 구하여, 
저자 ID(AUTHOR_ID), 저자명(AUTHOR_NAME), 카테고리(CATEGORY), 매출액(SALES) 리스트를 출력하는 SQL문을 작성해주세요.
결과는 저자 ID를 오름차순으로, 저자 ID가 같다면 카테고리를 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT
    A.AUTHOR_ID,
    A.AUTHOR_NAME,
    B.CATEGORY,
    SUM(BS.SALES * B.PRICE) AS TOTAL_SALES
FROM 
    BOOK_SALES AS BS
JOIN 
    BOOK AS B ON BS.BOOK_ID = B.BOOK_ID
JOIN 
    AUTHOR AS A ON B.AUTHOR_ID = A.AUTHOR_ID
WHERE 
    BS.SALES_DATE BETWEEN '2022-01-01' AND '2022-01-31'
GROUP BY 
    A.AUTHOR_ID, A.AUTHOR_NAME, B.CATEGORY
ORDER BY 
    A.AUTHOR_ID ASC,
    B.CATEGORY DESC;


-- GROUP BY는 같은 값을 가지는 행들끼리 묶어서(그룹화해서) 집계 함수(예: SUM, AVG, COUNT)를 적용할 때 사용
-- 주의 : SELECT절에 쓰이는 컬럼은 반드시 GROUP BY절에 포함되거나 집계 함수로 감싸야 함


-- HAVING은 GROUP BY로 그룹화된 결과에 조건을 걸 때 사용하는 절 (WHERE과 비슷함)
-- - WHERE은 그룹화 전에 조건을 걸고,
-- - HAVING은 그룹화 후 조건을 거는 겁니다.