/*
문제 설명:
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME            	 TYPE	           NULLABLE
ANIMAL_ID	         VARCHAR(N)	     FALSE
ANIMAL_TYPE	       VARCHAR(N)	     FALSE
DATETIME	         DATETIME	       FALSE
INTAKE_CONDITION 	 VARCHAR(N) 	   FALSE
NAME	             VARCHAR(N) 	   TRUE
SEX_UPON_INTAKE	   VARCHAR(N)	     FALSE

ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. 
ANIMAL_OUTS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 
각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. 
ANIMAL_OUTS 테이블의 ANIMAL_ID는 ANIMAL_INS의 ANIMAL_ID의 외래 키입니다.

NAME	              TYPE        	   NULLABLE
ANIMAL_ID          	VARCHAR(N)	     FALSE
ANIMAL_TYPE	        VARCHAR(N)	     FALSE
DATETIME          	DATETIME	       FALSE
NAME	              VARCHAR(N)	     TRUE
SEX_UPON_OUTCOME	  VARCHAR(N)	     FALSE

아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 
이때 결과는 보호 시작일 순으로 조회해야 합니다.

제한사항:
📌 
*/

SELECT I.NAME, I.DATETIME 
FROM ANIMAL_INS AS I
LEFT JOIN ANIMAL_OUTS AS O ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.ANIMAL_ID IS NULL 
ORDER BY I.DATETIME ASC     
LIMIT 3;                  
