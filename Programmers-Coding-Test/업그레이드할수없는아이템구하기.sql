/*
문제 설명:
어느 한 게임에서 사용되는 아이템들은 업그레이드가 가능합니다. 'ITEM_A'->'ITEM_B'와 같이 업그레이드가 가능할 때
'ITEM_A'를 'ITEM_B'의 PARENT 아이템, PARENT 아이템이 없는 아이템을 ROOT 아이템이라고 합니다.

예를 들어 'ITEM_A'->'ITEM_B'->'ITEM_C' 와 같이 업그레이드가 가능한 아이템이 있다면
'ITEM_C'의 PARENT 아이템은 'ITEM_B' 'ITEM_B'의 PARENT 아이템은 'ITEM_A' ROOT 아이템은 'ITEM_A'가 됩니다.

다음은 해당 게임에서 사용되는 아이템 정보를 담은 ITEM_INFO 테이블과 아이템 관계를 나타낸 ITEM_TREE 테이블입니다.
ITEM_INFO 테이블은 다음과 같으며, ITEM_ID, ITEM_NAME, RARITY, PRICE는 각각 아이템 ID, 아이템 명, 아이템의 희귀도, 아이템의 가격을 나타냅니다.

Column name	Type	Nullable
ITEM_ID	INTEGER	FALSE
ITEM_NAME	VARCHAR(N)	FALSE
RARITY	INTEGER	FALSE
PRICE	INTEGER	FALSE

ITEM_TREE 테이블은 다음과 같으며, ITEM_ID, PARENT_ITEM_ID는 각각 아이템 ID, PARENT 아이템의 ID를 나타냅니다.

Column name	Type	Nullable
ITEM_ID	INTEGER	FALSE
PARENT_ITEM_ID	INTEGER	TRUE

단, 각 아이템들은 오직 하나의 PARENT 아이템 ID 를 가지며, ROOT 아이템의 PARENT 아이템 ID 는 NULL 입니다.
ROOT 아이템이 없는 경우는 존재하지 않습니다.
더 이상 업그레이드할 수 없는 아이템의 아이템 ID(ITEM_ID), 아이템 명(ITEM_NAME), 아이템의 희귀도(RARITY)를 출력하는 SQL 문을 작성해 주세요. 
이때 결과는 아이템 ID를 기준으로 내림차순 정렬해 주세요.

제한사항:
📌 
*/

SELECT 
    i.ITEM_ID,
    i.ITEM_NAME,
    i.RARITY
FROM 
    ITEM_INFO AS i
JOIN 
    ITEM_TREE AS t
    ON i.ITEM_ID = t.ITEM_ID
WHERE 
    i.ITEM_ID NOT IN (
        SELECT PARENT_ITEM_ID
        FROM ITEM_TREE
        WHERE PARENT_ITEM_ID IS NOT NULL
    )
ORDER BY 
    i.ITEM_ID DESC;


-- ITEM_TREE에 PARENT_ITEM_ID가 존재하면 누군가의 부모라 업그레이드 된다
-- NOT IN은 안들어있는, 즉 없는 것만 필터링 하는 것, NULL이 있으면 오류가 있을 수 있다
-- 서브쿼리 없이 JOIN을 통해 직관적으로 하는 아래 방법, NULL값 오류 이슈도 없음

-- SELECT 
--     i.ITEM_ID,
--     i.ITEM_NAME,
--     i.RARITY
-- FROM 
--     ITEM_INFO AS i
-- JOIN 
--     ITEM_TREE AS t
--     ON i.ITEM_ID = t.ITEM_ID
-- LEFT JOIN 
--     ITEM_TREE AS child
--     ON i.ITEM_ID = child.PARENT_ITEM_ID
-- WHERE 
--     child.PARENT_ITEM_ID IS NULL
-- ORDER BY 
--     i.ITEM_ID DESC;