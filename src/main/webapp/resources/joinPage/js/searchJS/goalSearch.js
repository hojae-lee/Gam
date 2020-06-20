/*
 작성자 : 이재호,
 기능 : submit 하기 전에 검색 할 단어가 입력되었는지 안되었는지 확인.
 */
GAM.searchCheck = function () {
    const searchContents = document.getElementById('searchContents');
    if (searchContents && searchContents.value === "") {
        alert("검색 할 단어를 입력해주세요.");
        searchContents.focus();
        return false;
    }
}