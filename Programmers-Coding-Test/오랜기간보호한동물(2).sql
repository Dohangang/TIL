/*
문제 설명:
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	TYPE	NULLABLE
ANIMAL_ID	VARCHAR(N)	FALSE
ANIMAL_TYPE	VARCHAR(N)	FALSE
DATETIME	DATETIME	FALSE
INTAKE_CONDITION	VARCHAR(N)	FALSE
NAME	VARCHAR(N)	TRUE
SEX_UPON_INTAKE	VARCHAR(N)	FALSE

ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. 
ANIMAL_OUTS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 
각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. 
ANIMAL_OUTS 테이블의 ANIMAL_ID는 ANIMAL_INS의 ANIMAL_ID의 외래 키입니다.

NAME	TYPE	NULLABLE
ANIMAL_ID	VARCHAR(N)	FALSE
ANIMAL_TYPE	VARCHAR(N)	FALSE
DATETIME	DATETIME	FALSE
NAME	VARCHAR(N)	TRUE
SEX_UPON_OUTCOME	VARCHAR(N)	FALSE

입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 
이때 결과는 보호 기간이 긴 순으로 조회해야 합니다.

제한사항:
📌 
*/

SELECT I.ANIMAL_ID, I.NAME FROM ANIMAL_INS AS I
JOIN ANIMAL_OUTS AS O ON I.ANIMAL_ID = O.ANIMAL_ID
ORDER BY (O.DATETIME - I.DATETIME) DESC
LIMIT 2;


-- AS 생략 가능 : AS는 테이블과 컬럼에 별칭(alias)을 부여할 때 선택 사항이라 없어도 된다.
-- 예: ANIMAL_INS AS I → ANIMAL_INS I (동일하게 동작)

-- O.DATETIME - I.DATETIME 사용 가능 여부:
-- MySQL, PostgreSQL: DATETIME - DATETIME이 자동으로 시간 차이로 계산됨.
-- Oracle, SQL Server: 직접 연산 불가. DATEDIFF() 또는 TIMESTAMPDIFF() 사용해야 함.