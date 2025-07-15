/*
문제 설명:
CART_PRODUCTS 테이블은 장바구니에 담긴 상품 정보를 담은 테이블입니다. 
CART_PRODUCTS 테이블의 구조는 다음과 같으며, ID, CART_ID, NAME, PRICE는 각각 테이블의 아이디, 장바구니의 아이디, 상품 종류, 가격을 나타냅니다.

NAME	TYPE
ID	INT
CART_ID	INT
NAME	VARCHAR
PRICE	INT

데이터 분석 팀에서는 우유(Milk)와 요거트(Yogurt)를 동시에 구입한 장바구니가 있는지 알아보려 합니다. 
우유와 요거트를 동시에 구입한 장바구니의 아이디를 조회하는 SQL 문을 작성해주세요. 이때 결과는 장바구니의 아이디 순으로 나와야 합니다.

제한사항:
📌 
*/

SELECT CART_ID
FROM CART_PRODUCTS
WHERE NAME = 'Yogurt' 
    AND CART_ID IN (
        SELECT CART_ID
        FROM CART_PRODUCTS
        WHERE NAME = 'Milk'
    )
ORDER BY CART_ID ASC;

-- SELECT CART_ID
-- FROM CART_PRODUCTS
-- WHERE NAME IN ('Milk', 'Yogurt')
-- GROUP BY CART_ID
-- HAVING COUNT(DISTINCT NAME) = 2
-- ORDER BY CART_ID ASC;

-- 위와 아래의 sql 코드를 1번과 2번이라고 서술하겠다.
-- 1번은 조건이 늘어날수록 서브쿼리가 늘어난다. 확장성에 관해 불리하고 index에 따라 성능이 갈릴 수 있다.
-- 직관적이라 유지보수와 의미 파악에 도움이 된다.
-- 2번은 IN(...) 부분만 수정하면 되므로 확장성 부분에 이득을 챙길 수 있다. DISTINCT나 GROUP BY가 문제를 일으킬 가능성이 있다.
-- HAVING COUNT() 부분으로 조건을 쉽게 수정 가능하여 유연하다.
-- 단순하고 빠르게 처리할 코드를 원한다면 1번을 변화가 생겨 복잡해질 가능성이 있다면 2번 코드를 활용하는 것이 도움이 될 것.
