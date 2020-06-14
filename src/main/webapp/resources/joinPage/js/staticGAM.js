/*
 	전역에서 사용할 객체들이 있는 파일입니다.
 	인클루드 하는 스크립트 보다 위에 인클루드 해주시길 바랍니다.
 	큰 문제는 안 생길테지만 혹시나 하는 문제가 있을 수 있으니 주의해주시기 바랍니다.
 */
let GAM = null;

function gamProject() {
    this.gMember = [
        {
            name : "최민성",
            age : "28",
            gender: "man",
            desc : "목표CRUD 작업 및 DB"
        },
        {
            name : "황슬기",
            age : "27",
            gender: "woman",
            desc : "메인 페이지 및 DB"
        },
        {
            name : "한동욱",
            age : "27",
            gender: "man",
            desc : "목표현황 및 스프링"
        },
        {
            name : "이재호",
            age : "28",
            gender: "man",
            desc : "목표검색 및 스프링"
        }
    ];
    this.Desc = "데브업체 첫 사이드 프로젝트 - 목표등록 사이트";
    this.gTrue = true;
    this.gFalse = false;
    this.gOne = 1;
    this.gZero = 0;
    this.gNull = null;
}

GAM = new gamProject();

