/*
문제 설명:
다음은 식당의 정보를 담은 REST_INFO 테이블과 식당의 리뷰 정보를 담은 REST_REVIEW 테이블입니다. 
REST_INFO 테이블은 다음과 같으며 REST_ID, REST_NAME, FOOD_TYPE, VIEWS, FAVORITES, PARKING_LOT, ADDRESS, TEL은 
식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.

Column name	Type	Nullable
REST_ID	VARCHAR(5)	FALSE
REST_NAME	VARCHAR(50)	FALSE
FOOD_TYPE	VARCHAR(20)	TRUE
VIEWS	NUMBER	TRUE
FAVORITES	NUMBER	TRUE
PARKING_LOT	VARCHAR(1)	TRUE
ADDRESS	VARCHAR(100)	TRUE
TEL	VARCHAR(100)	TRUE

REST_REVIEW 테이블은 다음과 같으며 REVIEW_ID, REST_ID, MEMBER_ID, REVIEW_SCORE, REVIEW_TEXT,REVIEW_DATE는 
각각 리뷰 ID, 식당 ID, 회원 ID, 점수, 리뷰 텍스트, 리뷰 작성일을 의미합니다.

Column name	Type	Nullable
REVIEW_ID	VARCHAR(10)	FALSE
REST_ID	VARCHAR(10)	TRUE
MEMBER_ID	VARCHAR(100)	TRUE
REVIEW_SCORE	NUMBER	TRUE
REVIEW_TEXT	VARCHAR(1000)	TRUE
REVIEW_DATE	DATE	TRUE

REST_INFO와 REST_REVIEW 테이블에서 서울에 위치한 식당들의 식당 ID, 식당 이름, 음식 종류, 즐겨찾기수, 주소, 리뷰 평균 점수를 
조회하는 SQL문을 작성해주세요. 이때 리뷰 평균점수는 소수점 세 번째 자리에서 반올림 해주시고 결과는 평균점수를 기준으로 내림차순 정렬해주시고, 
평균점수가 같다면 즐겨찾기수를 기준으로 내림차순 정렬해주세요.
제한사항:
📌 
*/

SELECT
    I.REST_ID,
    I.REST_NAME,
    I.FOOD_TYPE,
    I.FAVORITES,
    I.ADDRESS,
    ROUND(AVG(R.REVIEW_SCORE), 2) AS SCORE
FROM
    REST_INFO I
JOIN
    REST_REVIEW R ON I.REST_ID = R.REST_ID
WHERE
    I.ADDRESS LIKE '서울%'
GROUP BY
    I.REST_ID,
    I.REST_NAME,
    I.FOOD_TYPE,
    I.FAVORITES,
    I.ADDRESS
ORDER BY
    SCORE DESC,
    I.FAVORITES DESC; 
 
  --  별칭 (Alias): 짧고 의미 있는 이름으로 바꿔준다. 이렇게 만든 별칭은 ORDER BY 절 등에서 재사용
  --  `WHERE` 절과 `LIKE` 연산자: '서울'로 시작하는 데이터만 가져온다. %는 '어떤 문자열이든 상관없다'는 의미
  --  ROUND(..., 2): 숫자를 반올림하는 함수입니다. 두 번째 자리까지 표시하라는 의미입니다.


  -- 실행되는 논리적 순서
  --  1. `FROM` / `JOIN`: REST_INFO와 REST_REVIEW 테이블을 REST_ID를 기준으로 합침
  --  2. `WHERE`: 합쳐진 데이터 중에서 주소가 '서울'로 시작하는 것들만 남김
  --  3. `GROUP BY`: 남은 데이터를 식당별로 그룹으로 묶음
  --  4. `AVG` / `ROUND`: 각 그룹별로 리뷰 점수 평균을 계산하고 반올림 (SELECT 절의 집계 함수 계산)
  --  5. `SELECT`: 최종적으로 보여줄 컬럼들을 선택
  --  6. `ORDER BY`: 최종 결과를 평균 점수와 즐겨찾기 수로 정렬