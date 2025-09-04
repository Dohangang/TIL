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