/*
문제 설명:
온라인 쇼핑몰의 사용자 정보와 주문 정보를 관리하는 두 개의 테이블이 있다고 가정합니다.

테이블 1: `Users` (사용자 정보)
  ┌─────────┬───────────┬─────────────┬─────────────┐
  │ user_id │ user_name │ signup_date │ city        │
  ├─────────┼───────────┼─────────────┼─────────────┤
  │ 1       │ Alice     │ 2022-11-15  │ New York    │
  │ 2       │ Bob       │ 2023-01-20  │ Los Angeles │
  │ 3       │ Charlie   │ 2023-03-10  │ Chicago     │
  │ 4       │ David     │ 2022-05-01  │ New York    │
  │ 5       │ Eve       │ 2023-06-25  │ Los Angeles │
  └─────────┴───────────┴─────────────┴─────────────┘

테이블 2: `Orders` (주문 정보)
  ┌──────────┬─────────┬────────────┬────────┬───────────┐
  │ order_id │ user_id │ order_date │ amount │ status    │
  ├──────────┼─────────┼────────────┼────────┼───────────┤
  │ 101      │ 2       │ 2023-02-15 │ 300.50 │ completed │
  │ 102      │ 1       │ 2023-03-01 │ 150.00 │ cancelled │
  │ 103      │ 3       │ 2023-04-05 │ 450.00 │ completed │
  │ 104      │ 5       │ 2023-07-01 │ 200.00 │ completed │
  │ 105      │ 2       │ 2023-07-10 │ 250.00 │ completed │
  │ 106      │ 3       │ 2023-08-12 │ 120.75 │ completed │
  │ 107      │ 5       │ 2023-08-20 │ 100.00 │ shipped   │
  └──────────┴─────────┴────────────┴────────┴───────────┘

요구사항:
2023년 이후에 가입한 사용자 중에서, 'completed' 상태인 주문의 총액이 500달러를 초과하는 우수 고객의 목록을 조회하는 SQL 쿼리를 작성하세요.
* 조회할 컬럼: 사용자의 ID (user_id), 사용자 이름 (user_name), 그리고 사용자의 총 주문액 (total_amount).
* 정렬: 총 주문액이 높은 순서대로 내림차순 정렬해주세요.
제한사항:
📌 
*/

SELECT
   u.user_id,
   u.user_name,
   SUM(o.amount) AS total_amount 
FROM
   Users u
JOIN
   Orders o ON u.user_id = o.user_id 
WHERE
   u.signup_date >= '2023-01-01' 
   AND o.status = 'completed'       
GROUP BY
   u.user_id, u.user_name 
HAVING
   total_amount > 500 
ORDER BY
   total_amount DESC; 
      
-- -`WHERE` vs `HAVING`
-- `WHERE`: GROUP BY로 데이터를 그룹화하기 전, 테이블의 개별 행(row)을 필터링하는 조건(예: "가입일이 2023년 이후인 사용자만", "주문 상태가 'completed'인 것만")
-- `HAVING`: GROUP BY로 데이터를 그룹화한 후, 그룹화된 결과에 대한 조건을 거는 필터. SUM(), COUNT() 같은 집계 함수에 대한 조건을 걸 때 사용 (예: "주문액 총합이 500을 넘는 그룹만")
-- 실행 순서: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 순으로 동작

-- -집계 함수(`SUM`)와 `GROUP BY`의 조합
-- GROUP BY u.user_id에 의해 "사용자별로" 금액을 더하게 됨. GROUP BY는 집계 함수가 계산할 단위를 지정해주는 역할
