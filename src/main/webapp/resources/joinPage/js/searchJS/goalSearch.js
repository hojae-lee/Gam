/*
 작성자 : 이재호,
 기능 : submit 하기 전에 검색 할 단어가 입력되었는지 안되었는지 확인.
 */
 GAM.searchCheck = function () {
    const searchContents = document.getElementById('searchContents');
    if (searchContents) {
        if (searchContents.value === "") {
            alert("검색 할 단어를 입력해주세요.");
            searchContents.focus();
            return false;
        } else if (searchContents.value.length > 30) {
            alert("어허~ 어딜!");
            searchContents.value = "";
            searchContents.focus();
            return false;
        }
    }
}
 
document.getElementById('searchContents').onkeyup = function (e) {
	if (e.srcElement && e.srcElement.value.length > 30) {
		document.getElementById('searchContents').value = e.srcElement.value.substring(0, 29);
		return alert("검색 하고자 하는 길이를 초과하였습니다.");
	}
}