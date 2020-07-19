/*
 작성자 : 이재호
 기능 : jquery ui를 이용한 자동완성 기능.
 */
GAM.autoSearch = () => {
	(() => {
		$('#searchContents').autocomplete({
			source : (req, res) => {
				$.ajax({
					url: "../autocomplete/search.do",
					dataType: "json",
					data: { 
						searchValue: req.term,
						searchTitle: document.getElementById('searchTitle').value
					},
					success: data => {
						res(data.map(value => {
							return {
								label: value.gam_title_nm || value.user_nicknm || value.gam_type,
								value: value.gam_title_nm || value.user_nicknm || value.gam_type
							}
						}));
					}
				});
			},
			minLength: 1
		});
	})();
};

/*
 작성자 : 이재호
 기능 : submit 하기 전에 검색 할 단어가 입력되었는지 안되었는지 확인.
 추가 : 강제로 Contents에 길이 30 이상 값을 넣을 경우 확인하는 방어코드 추가. 
 */
GAM.searchCheck = () => {
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

// 검색시 이벤트 함수.
GAM.keySearchEventList = () => {
	/*
	 작성자 : 이재호
	 기능 : Contents에 길이30자 이상 입력 시 이상 입력하지 못 하도록 막는다. -- 삭제
	 추가 : keydown, keyup 삭제 event 관련 오류 있을시 추가 할 영역.
	 */
	document.getElementById('searchContents').onkeydown = e => {
		if (e.keyCode === 38 || e.keyCode === 40) {
			keyCanCelEvent(e);
			return false;
		}
	}
//	
//	document.getElementById('searchContents').onkeyup = e => {
//		keyCanCelEvent(e);
//	}
	
	/*
	작성자 : 이재호
	기능 : Contents에 길이30자 이상 입력 시 이상 입력하지 못 하도록 막는다. keydown, keyup => oninput으로 수정. IE같은 경우 keyup에서 처리해야 할 수도 있음.
	추가 : oninput 이벤트로 수정.
	 */
	
	document.getElementById('searchContents').oninput = e => {
		if (e.srcElement && e.srcElement.value.length > 30) {
			alert("검색 하고자 하는 길이를 초과하였습니다.");
			e.srcElement.value = "";
			keyCanCelEvent(e);
			return false;
		}
	}
	
	function keyCanCelEvent(e) {
		e.preventDefault();
		e.stopPropagation();
	}
}


/*
 작성자 : 이재호
 기능 : 연관 검색어 클릭시 검색
*/
GAM.relationSearch = (type, obj) => {
//	const reBtn = document.getElementById('reBtn');
	const reBtn = document.querySelectorAll('.reBtn');
	if (reBtn.length > 0 && type === 'gam_title_nm') {
		reBtn.forEach(function(item) {
			if(item.textContent === obj.textContent) {
				location.href = '../search/goalSearchResult.do?searchContents='+item.textContent + '&searchTitle=' + type;
				item.submit();
				return false;
			}
		});
	}
}

//이벤트 비동기 문제로 위치 수정.
GAM.autoSearch();
GAM.keySearchEventList();
