/*
문제 설명:
다음은 중고거래 게시판 정보를 담은 USED_GOODS_BOARD 테이블과 중고거래 게시판 첨부파일 정보를 담은 USED_GOODS_FILE 테이블입니다. 
USED_GOODS_BOARD 테이블은 다음과 같으며 BOARD_ID, WRITER_ID, TITLE, CONTENTS, PRICE, CREATED_DATE, STATUS, VIEWS은 
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

USED_GOODS_FILE 테이블은 다음과 같으며 FILE_ID, FILE_EXT, FILE_NAME, BOARD_ID는 
각각 파일 ID, 파일 확장자, 파일 이름, 게시글 ID를 의미합니다.

Column name	Type	Nullable
FILE_ID	VARCHAR(10)	FALSE
FILE_EXT	VARCHAR(5)	FALSE
FILE_NAME	VARCHAR(256)	FALSE
BOARD_ID	VARCHAR(10)	FALSE

USED_GOODS_BOARD와 USED_GOODS_FILE 테이블에서 조회수가 가장 높은 중고거래 게시물에 대한 첨부파일 경로를 조회하는 SQL문을 작성해주세요. 
첨부파일 경로는 FILE ID를 기준으로 내림차순 정렬해주세요. 기본적인 파일경로는 /home/grep/src/ 이며, 게시글 ID를 기준으로 디렉토리가 구분되고, 
파일이름은 파일 ID, 파일 이름, 파일 확장자로 구성되도록 출력해주세요. 조회수가 가장 높은 게시물은 하나만 존재합니다.

제한사항:
📌 
*/

SELECT 
    CONCAT('/home/grep/src/', UF.BOARD_ID, '/', UF.FILE_ID, UF.FILE_NAME, UF.FILE_EXT) AS FILE_PATH
FROM 
    USED_GOODS_BOARD AS UB
JOIN 
    USED_GOODS_FILE AS UF ON UB.BOARD_ID = UF.BOARD_ID
WHERE 
    UB.VIEWS = (
        SELECT MAX(VIEWS)
        FROM USED_GOODS_BOARD
    )
ORDER BY 
    UF.FILE_ID DESC;