/*
문제 설명:
다음은 어느 온라인 서점의 주문 정보를 담은 BOOK_ORDER 테이블과 회원 정보를 담은 MEMBER 테이블입니다.

BOOK_ORDER 테이블

Column name	Type	Nullable	설명
ORDER_ID	INTEGER	FALSE	주문 ID
MEMBER_ID	INTEGER	FALSE	회원 ID
BOOK_ID	INTEGER	FALSE	책 ID
PRICE	INTEGER	FALSE	책 가격
ORDER_DATE	DATE	FALSE	주문 날짜

각 주문은 한 명의 회원이 책 한 권을 구매한 내역입니다.
동일한 주문 ID는 존재하지 않습니다.

MEMBER 테이블

Column name	Type	Nullable	설명
MEMBER_ID	INTEGER	FALSE	회원 ID
NAME	VARCHAR	FALSE	이름
GRADE	VARCHAR	FALSE	회원 등급(VIP, GOLD, SILVER 중 하나)

2022년 7월 한 달 동안의 주문 데이터를 바탕으로,
회원 이름, 회원 등급, 총 주문 금액을 출력하는 SQL문을 작성해주세요

제한사항:
📌 총 주문 금액은 회원별 합계로 구합니다.
📌 7월 동안 주문이 없는 회원은 결과에 포함되지 않습니다.
📌 결과는 총 주문 금액을 기준으로 내림차순 정렬하고, 금액이 같다면 이름을 기준으로 오름차순 정렬합니다.
*/

SELECT 
    M.NAME,
    M.GRADE,
    SUM(B.PRICE) AS TOTAL_AMOUNT
FROM BOOK_ORDER B
JOIN MEMBER M ON B.MEMBER_ID = M.MEMBER_ID
WHERE B.ORDER_DATE BETWEEN '2022-07-01' AND '2022-07-31'
GROUP BY M.MEMBER_ID, M.NAME, M.GRADE
ORDER BY TOTAL_AMOUNT DESC, M.NAME ASC;

-- GROUP BY에 M.MEMBER_ID까지 포함된 이유는 이름과 회원 등급이 둘다 같은 사람이 존재했을 떄, 잘못 연산되는 경우를 방지하기 위해 그렇다.
-- 문법상 M.MEMBER_ID를 빼도 틀리진 않는다. 유일한, PK성격을 띤 컬럼을 가져온 것