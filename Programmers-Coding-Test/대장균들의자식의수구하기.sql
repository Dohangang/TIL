/*
문제 설명:
대장균들은 일정 주기로 분화하며, 분화를 시작한 개체를 부모 개체, 분화가 되어 나온 개체를 자식 개체라고 합니다.
다음은 실험실에서 배양한 대장균들의 정보를 담은 ECOLI_DATA 테이블입니다. 
ECOLI_DATA 테이블의 구조는 다음과 같으며, ID, PARENT_ID, SIZE_OF_COLONY, DIFFERENTIATION_DATE, GENOTYPE 은 
각각 대장균 개체의 ID, 부모 개체의 ID, 개체의 크기, 분화되어 나온 날짜, 개체의 형질을 나타냅니다.

Column name	Type	Nullable
ID	INTEGER	FALSE
PARENT_ID	INTEGER	TRUE
SIZE_OF_COLONY	INTEGER	FALSE
DIFFERENTIATION_DATE	DATE	FALSE
GENOTYPE	INTEGER	FALSE

최초의 대장균 개체의 PARENT_ID 는 NULL 값입니다.
대장균 개체의 ID(ID)와 자식의 수(CHILD_COUNT)를 출력하는 SQL 문을 작성해주세요. 
자식이 없다면 자식의 수는 0으로 출력해주세요. 이때 결과는 개체의 ID 에 대해 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT 
    E1.ID AS ID,
    COUNT(E2.ID) AS CHILD_COUNT
FROM ECOLI_DATA AS E1
LEFT JOIN ECOLI_DATA E2 
    ON E1.ID = E2.PARENT_ID
GROUP BY E1.ID
ORDER BY E1.ID;

-- 조직도: 직원, 상사
-- 상품 카테고리: 대분류, 소분류
-- 게시판 댓글: 부모 댓글, 자식 댓글
-- 등과 같이 한 테이블 안에 계층 구조나 연결 정보가 있을 때, 연결 짓고자 하는 것을 나타내기 위해 실제로 사용할 수 있으니 알아둘 것

-- 🌟 공통 테이블 표현식 (CTE, common table expression):
-- WITH 및 WITH RECURSIVE는 공통 테이블 표현식을 정의하는 데 사용되는 sql 구문, 
-- 쿼리 내에 임시 결과 집합을 정의하고 그것을 다른 쿼리에서 참조할 수 있게 한다

--       WITH 구문
--       주 사용: 임시 테이블 명의 사용하여 값을 참조, 연산할 경우
--       WITH 임시테이블명 AS (
--           SELECT *
--           FROM 테이블명
--       )

--       WITH RECURSIVE 구문
--       주 사용: 임시 테이블을 생성하면서 자신의 값을 참조하여 값을 연산할 경우, 계층적 데이터 구조를 연산할 경우
--       WITH RECURSIVE 임시테이블명 AS (
--           SELECT *                초기값 설정
--           FROM 테이블명
--           UNION ALL
--           SELECT *                재귀식 설정
--           FROM 임시테이블명
--           WHERE                   정지 조건
--       )