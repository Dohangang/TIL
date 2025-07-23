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