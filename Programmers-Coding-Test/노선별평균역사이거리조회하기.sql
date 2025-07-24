/*
문제 설명:
SUBWAY_DISTANCE 테이블은 서울지하철 2호선의 역 간 거리 정보를 담은 테이블입니다. 
SUBWAY_DISTANCE 테이블의 구조는 다음과 같으며 LINE, NO, ROUTE, STATION_NAME, D_BETWEEN_DIST, D_CUMULATIVE는 
각각 호선, 순번, 노선, 역 이름, 역 사이 거리, 노선별 누계 거리를 의미합니다.

Column name	Type	Nullable
LINE	VARCHAR(10)	FALSE
NO	NUMBER	FALSE
ROUTE	VARCHAR(50)	FALSE
STATION_NAME	VARCHAR(100)	FLASE
D_BETWEEN_DIST	NUMBER	FLASE
D_CUMULATIVE	NUMBER	FLASE

SUBWAY_DISTANCE 테이블에서 노선별로 노선, 총 누계 거리, 평균 역 사이 거리를 노선별로 조회하는 SQL문을 작성해주세요.
총 누계거리는 테이블 내 존재하는 역들의 역 사이 거리의 총 합을 뜻합니다. 총 누계 거리와 평균 역 사이 거리의 컬럼명은 
각각 TOTAL_DISTANCE, AVERAGE_DISTANCE로 해주시고, 총 누계거리는 소수 둘째자리에서, 평균 역 사이 거리는 
소수 셋째 자리에서 반올림 한 뒤 단위(km)를 함께 출력해주세요.
결과는 총 누계 거리를 기준으로 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT 
    ROUTE, 
    CONCAT(ROUND(SUM(D_BETWEEN_DIST), 1), 'km') AS TOTAL_DISTANCE, 
    CONCAT(ROUND(AVG(D_BETWEEN_DIST), 2), 'km') AS AVERAGE_DISTANCE
FROM SUBWAY_DISTANCE
GROUP BY ROUTE
ORDER BY ROUND(SUM(D_BETWEEN_DIST), 1) DESC;

-- sql 구문 중에 alias(별칭)을 AS 뒤에 지정하는 것 외에 작성해도 되는 곳
--     SELECT COUNT(*) AS <ALIAS>
--     ORDER BY <ALIAS> DESC
--     HAVING ALIAS > 10
-- 안되는 곳
--     WHERE -> 아직 alias가 생성되기 전 단계라 별칭 사용 불가
--     GROUP BY -> 본래 컬럼 표현으로 그룹화 해야함

-- CONCAT() -> 문자열을 이어붙이는 함수, NULL이 포함되면 NULL이 되어버림, 숫자도 문자열로 자동 변환됨
-- ROUND(숫자, 만들고 싶은 자릿수) -> 반올림
-- CEIL(3.1) → 4 올림
-- FLOOR(3.9) → 3 내림
-- TRUNCATE(3.1415, 2) → 3.14 특정 자리에서 잘라서 반환

-- 정렬 기준은 숫자로 할 것, 위의 sql문을 예로 들자면 km때문에 오름 내림차순이 망가질 수 있음.