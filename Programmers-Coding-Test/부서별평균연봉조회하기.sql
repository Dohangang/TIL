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

HR_DEPARTMENT와 HR_EMPLOYEES 테이블을 이용해 부서별 평균 연봉을 조회하려 합니다. 
부서별로 부서 ID, 영문 부서명, 평균 연봉을 조회하는 SQL문을 작성해주세요.
평균연봉은 소수점 첫째 자리에서 반올림하고 컬럼명은 AVG_SAL로 해주세요.
결과는 부서별 평균 연봉을 기준으로 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT D.DEPT_ID, D.DEPT_NAME_EN, ROUND(AVG(E.SAL), 0) AS AVG_SAL
FROM HR_EMPLOYEES AS E
JOIN HR_DEPARTMENT AS D ON E.DEPT_ID = D.DEPT_ID
GROUP BY D.DEPT_ID
ORDER BY ROUND(AVG(E.SAL), 0) DESC;

-- mysql과 postgreSQL이 비슷하지만 섬세하게 다르다는 것을 유의할 것.
-- 항상 디버깅을 해보고 다름을 알게 되겠지만 미리 알고 정리해두면 더 좋지 않을까 생각함.
-- 예로
-- TIMESTAMPZ timestamp와 timezone을 함께 다루는 것은 다를 수 있음
-- EXTRACT() 비슷하지만 사용 방식의 차이
-- FACTORIAL() 내장 함수 없음
-- LOG() 방식이 다름
-- GCD() LCM()이 없음
-- 비트 연산자의 구현 방식이 다를 수 있음
-- TO_CHAR() 비슷한 것 있지만 사용법이 다름