/*
문제 설명:
다음은 어느 의류 쇼핑몰의 온라인 상품 판매 정보를 담은 ONLINE_SALE 테이블과 오프라인 상품 판매 정보를 담은 OFFLINE_SALE 테이블 입니다. 
ONLINE_SALE 테이블은 아래와 같은 구조로 되어있으며 ONLINE_SALE_ID, USER_ID, PRODUCT_ID, SALES_AMOUNT, SALES_DATE는 
각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

Column name	Type	Nullable
ONLINE_SALE_ID	INTEGER	FALSE
USER_ID	INTEGER	FALSE
PRODUCT_ID	INTEGER	FALSE
SALES_AMOUNT	INTEGER	FALSE
SALES_DATE	DATE	FALSE

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.
OFFLINE_SALE 테이블은 아래와 같은 구조로 되어있으며 OFFLINE_SALE_ID, PRODUCT_ID, SALES_AMOUNT, SALES_DATE는 
각각 오프라인 상품 판매 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

Column name	Type	Nullable
OFFLINE_SALE_ID	INTEGER	FALSE
PRODUCT_ID	INTEGER	FALSE
SALES_AMOUNT	INTEGER	FALSE
SALES_DATE	DATE	FALSE

동일한 날짜, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다. ONLINE_SALE 테이블과 OFFLINE_SALE 테이블에서 
2022년 3월의 오프라인/온라인 상품 판매 데이터의 판매 날짜, 상품ID, 유저ID, 판매량을 출력하는 SQL문을 작성해주세요. 
OFFLINE_SALE 테이블의 판매 데이터의 USER_ID 값은 NULL 로 표시해주세요. 
결과는 판매일을 기준으로 오름차순 정렬해주시고 판매일이 같다면 상품 ID를 기준으로 오름차순, 상품ID까지 같다면 유저 ID를 기준으로 오름차순 정렬해주세요.

제한사항:
📌 
*/

SELECT 
    DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    PRODUCT_ID,
    USER_ID,
    SALES_AMOUNT
FROM ONLINE_SALE
WHERE SALES_DATE BETWEEN '2022-03-01' AND '2022-03-31'

UNION ALL

SELECT
    DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    PRODUCT_ID,
    NULL AS USER_ID,
    SALES_AMOUNT
FROM OFFLINE_SALE
WHERE SALES_DATE BETWEEN '2022-03-01' AND '2022-03-31'

ORDER BY SALES_DATE ASC, PRODUCT_ID ASC, USER_ID ASC;

/*
문제만 본다면 같은 날짜에 팔린 같은 물품은 같이 count해야하나 헷갈릴 수 있다. 그냥 online과 offline의 두 결과를 이어 붙이라는게 문제가 바라는 답이다.
나는 문제를 잘못 이해하여 같은 날에 한 종류의 물품이 온오프라인 구분하지 않고 몇개씩 팔렸나 헤아리기 위해 필요한 sql문이라고 생각했는데 그게 아니었다.

UNION 연산자 (2개 이상의 SELECT문의 결과 세트를 결합할 수 있다)
- SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;
   → SELECT에 의해 출력된 값을 이어 붙인 테이블이 생성된다
- SELECT * FROM Sales2021 UNION SELECT * FROM Sales2022 ORDER BY name;
   → 두 개의 판매량을 합칠 때 쓸 수 있다

-스키마 Schema
스키마 schema 는 전체적인 데이터베이스의 골격 구조를 나타내는 일종의 도면입니다. 
스키마는 데이터베이스의 엔티티와 그 엔티티들 간의 관계를 정의합니다. 어떤 타입의 데이터가 어느 위치에 적재되어야 하는지, 
다른 테이블이나 엔티티와 어떠한 관계를 맺는지 정의하게 되죠.

-테이블 Table (파일 Files)
서로 연관된 레코드의 집합을 테이블 또는 파일이라고 한다.

-엔티티 Entity
엔티티 entity는 현실 세계에 존재하는 것을 데이터베이스 상에서 표현하기 위해 사용하는 추상적인 개념입니다. 일종의 비유라고 할 수 있죠.

-필드 Fields
필드 Field는 엑셀에서 열 column에 해당하는 가장 작은 단위의 데이터를 의미합니다. 이 필드는 엔티티의 속성을 표현합니다.

-레코드 Records (튜플 Tuple)
레코드 Record는 논리적으로 연관된 필드의 집합을 의미하며, 엑셀의 행 row에 해당됩니다. 튜플 Tuple 이라고 불리기도 합니다. 
여기서 각각의 필드는 특정한 데이터 타입과 크기가 지정되어 있습니다. 즉, 여러 행이 모여 한 열을 이루듯이 여러 필드가 모여 한 레코드를 이루는 것이죠.

-필드(Field)와 특성(Attribute)의 차이점 ?
데이터베이스에서 필드와 특성은 본질적으로 같은 것을 이야기 합니다. 
엔티티의 특수한 성질을 의미하죠. 고객 엔티티에서 customer_id, name, age, class는 고객이라는 엔티티의 고유한 특성들입니다. 
이 특성들은 다른 테이블/엔티티와의 관계에 대해 이야기할 때, 필드(Field)라고 불려질 수 있습니다.
*/