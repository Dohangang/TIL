/*
문제 설명:
HR_DEPARTMENT 테이블은 회사의 부서 정보를 담은 테이블입니다. 
HR_DEPARTMENT 테이블의 구조는 다음과 같으며 DEPT_ID, DEPT_NAME_KR, DEPT_NAME_EN, LOCATION은 
각각 부서 ID, 국문 부서명, 영문 부서명, 부서 위치를 의미합니다.

Column name	Type	Nullable
DEPT_ID	VARCHAR	FALSE
DEPT_NAME_KR	VARCHAR	FALSE
DEPT_NAME_EN	VARCHAR	FALSE
LOCATION	VARCHAR	FLASE

HR_EMPLOYEES 테이블은 회사의 사원 정보를 담은 테이블입니다. 
HR_EMPLOYEES 테이블의 구조는 다음과 같으며 EMP_NO, EMP_NAME, DEPT_ID, POSITION, EMAIL, COMP_TEL, HIRE_DATE, SAL은 
각각 사번, 성명, 부서 ID, 직책, 이메일, 전화번호, 입사일, 연봉을 의미합니다.

Column name	Type	Nullable
EMP_NO	VARCHAR	FALSE
EMP_NAME	VARCHAR	FALSE
DEPT_ID	VARCHAR	FALSE
POSITION	VARCHAR	FALSE
EMAIL	VARCHAR	FALSE
COMP_TEL	VARCHAR	FALSE
HIRE_DATE	DATE	FALSE
SAL	NUMBER	FALSE

HR_GRADE 테이블은 2022년 사원의 평가 정보를 담은 테이블입니다. 
HR_GRADE의 구조는 다음과 같으며 EMP_NO, YEAR, HALF_YEAR, SCORE는 각각 사번, 연도, 반기, 평가 점수를 의미합니다.

Column name	Type	Nullable
EMP_NO	VARCHAR	FALSE
YEAR	NUMBER	FALSE
HALF_YEAR	NUMBER	FALSE
SCORE	NUMBER	FALSE

HR_DEPARTMENT, HR_EMPLOYEES, HR_GRADE 테이블을 이용해 사원별 성과금 정보를 조회하려합니다. 
평가 점수별 등급과 등급에 따른 성과금 정보가 아래와 같을 때, 사번, 성명, 평가 등급, 성과금을 조회하는 SQL문을 작성해주세요.

평가등급의 컬럼명은 GRADE로, 성과금의 컬럼명은 BONUS로 해주세요.
결과는 사번 기준으로 오름차순 정렬해주세요.

기준 점수	평가 등급	성과금(연봉 기준)
96 이상	S	20%
90 이상	A	15%
80 이상	B	10%
이외	C	0%

제한사항:
📌 
*/

SELECT 
    E.EMP_NO,
    E.EMP_NAME,
    CASE
        WHEN AVG_GRADE >= 96 THEN 'S'
        WHEN AVG_GRADE >= 90 THEN 'A'
        WHEN AVG_GRADE >= 80 THEN 'B'
        ELSE 'C'
    END AS GRADE,
    CASE
        WHEN AVG_GRADE >= 96 THEN ROUND(E.SAL * 0.2)
        WHEN AVG_GRADE >= 90 THEN ROUND(E.SAL * 0.15)
        WHEN AVG_GRADE >= 80 THEN ROUND(E.SAL * 0.1)
        ELSE 0
    END AS BONUS
FROM HR_EMPLOYEES E
JOIN (
    SELECT 
        EMP_NO, 
        ROUND(AVG(SCORE), 2) AS AVG_GRADE
    FROM HR_GRADE
    WHERE YEAR = 2022
    GROUP BY EMP_NO
) G ON E.EMP_NO = G.EMP_NO
ORDER BY E.EMP_NO ASC;

-- CASE WHEN THEN ELSE END AS -> 구성 까먹지 말기
-- 집계 함수를 썼을 경우에 GROUP BY를 잊지 말 것

-- SELECT 부분에 쓰여져 출력되는 칸에는 여러 변형이 가능한데, 아래 부분에서 모든 것을 예쁘게 만들어서 출력하려하면 문제를 해결할 때 머리가 안굴러갈 수 있다.
-- 생각의 영역을 넓힐 것