/*
 작성자 : 이재호
 기능 : jquery ui를 이용한 자동완성 기능.
 */
(function() {
	$('#searchContents').autocomplete({
		source : function (req, res) {
			$.ajax({
				url: "../autocomplete/search.do",
				dataType: "json",
				data: { 
					searchValue: req.term,
					searchTitle: document.getElementById('searchTitle').value
				},
				success: function(data) {
					res(data.map(function(value){
						return {
							label: value.list_nm || value.user_nicknm,
							value: value.list_nm || value.user_nicknm
						}
					}));
				}
			});
		},
		minLength: 1
	});
})();


/*
 작성자 : 이재호
 기능 : submit 하기 전에 검색 할 단어가 입력되었는지 안되었는지 확인.
 추가 : 강제로 Contents에 길이 30 이상 값을 넣을 경우 확인하는 방어코드 추가. 
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

/*
 작성자 : 이재호
 기능 : Contents에 길이30자 이상 입력 시 이상 입력하지 못 하도록 막는다.
*/
 
document.getElementById('searchContents').onkeyup = function (e) {
	if (e.srcElement && e.srcElement.value.length > 30) {
		document.getElementById('searchContents').value = e.srcElement.value.substring(0, 29);
		return alert("검색 하고자 하는 길이를 초과하였습니다.");
	}
}