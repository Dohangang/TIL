/*
문제 설명:
다음은 중고 거래 게시판 정보를 담은 USED_GOODS_BOARD 테이블과 중고 거래 게시판 첨부파일 정보를 담은 USED_GOODS_USER 테이블입니다. 
USED_GOODS_BOARD 테이블은 다음과 같으며 BOARD_ID, WRITER_ID, TITLE, CONTENTS, PRICE, CREATED_DATE, STATUS, VIEWS는 
게시글 ID, 작성자 ID, 게시글 제목, 게시글 내용, 가격, 작성일, 거래상태, 조회수를 의미합니다.

Column name	Type	Nullable
BOARD_ID	VARCHAR(5)	FALSE
WRITER_ID	VARCHAR(50)	FALSE
TITLE	VARCHAR(100)	FALSE
CONTENTS	VARCHAR(1000)	FALSE
PRICE	NUMBER	FALSE
CREATED_DATE	DATE	FALSE
STATUS	VARCHAR(10)	FALSE
VIEWS	NUMBER	FALSE

USED_GOODS_USER 테이블은 다음과 같으며 USER_ID, NICKNAME, CITY, STREET_ADDRESS1, STREET_ADDRESS2, TLNO는 
각각 회원 ID, 닉네임, 시, 도로명 주소, 상세 주소, 전화번호를 의미합니다.

Column name	Type	Nullable
USER_ID	VARCHAR(50)	FALSE
NICKANME	VARCHAR(100)	FALSE
CITY	VARCHAR(100)	FALSE
STREET_ADDRESS1	VARCHAR(100)	FALSE
STREET_ADDRESS2	VARCHAR(100)	TRUE
TLNO	VARCHAR(20)	FALSE

USED_GOODS_BOARD와 USED_GOODS_USER 테이블에서 중고 거래 게시물을 3건 이상 등록한 사용자의 
사용자 ID, 닉네임, 전체주소, 전화번호를 조회하는 SQL문을 작성해주세요. 
이때, 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력되도록 해주시고, 
전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(-)을 삽입하여 출력해주세요. 
결과는 회원 ID를 기준으로 내림차순 정렬해주세요.

제한사항:
📌 
*/

SELECT 
    USER_ID, 
    NICKNAME, 
    CONCAT(CITY, ' ', STREET_ADDRESS1, ' ', STREET_ADDRESS2),
    INSERT(INSERT(TLNO,4,0,'-'),9,0,'-')
FROM USED_GOODS_USER
WHERE USER_ID 
    IN (
    SELECT
        WRITER_ID AS USER_ID
    FROM USED_GOODS_BOARD
    GROUP BY WRITER_ID
    HAVING COUNT(BOARD_ID)>=3
    )
ORDER BY USER_ID DESC;

/*
개인적인 의문점에 대한 정보 추가 세가지

INSERT() 함수
- INSERT(문자열, x번째위치부터, y만큼지우고, 그자리에z삽입)

WHERE과 HAVING의 차이
- GRUOP BY 전에 WHERE을 쓰고, 후에는 HAVING을 사용

해당 풀이에서는 subquery에 하나의 컬럼만 있어야 한다
- 메인 쿼리의 단일 컬럼 값과 서브 쿼리의 단일 컬럼 값을 비교해야 하므로 단일 값으로 일치 시켜야한다
*/