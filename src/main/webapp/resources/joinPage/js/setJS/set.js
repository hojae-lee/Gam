(function (addOne, addTwo, addThree, row1, row2, row3) {
	
	var fm = document.regGoal;
	
	// Level 1 추가 행
	addOne = [
		'<tr id="addOne"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvOne"></i></span>'
		, '</td></tr>'
	].join('');

	// Level 2 추가 행
	addTwo = [
		'<tr id="addTwo"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvTwo"></i></span>'
		, '</td></tr>'
	].join('');

	// Level 3 추가 행
	addThree = [
		'<tr id="addThree"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvThree"></i></span>'
		, '</td></tr>'
	].join('');
	
	// Level 1
	row1 = [
		'<tr id="One"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="fas fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvOneInput">'
		, '<input type="text" name="lvOneText" id="text" class="form-control text">'
		, '<input type="text" name="lvOneStartDt" id="start" class="form-control peri" placeholder="시작일">'
		, '<input type="text" name="lvOneEndDt" id="end" class="form-control peri" placeholder="종료일">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');
	
	// Level 2
	row2 = [
		'<tr id="Two"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="far fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvTwoInput">'
		, '<input type="text" name="lvTwoText" id="text" class="form-control text">'
		, '<input type="text" name="lvTwoStartDt" id="start" class="form-control peri" placeholder="시작일">'
		, '<input type="text" name="lvTwoEndDt" id="end" class="form-control peri" placeholder="종료일">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');

	// Level 3
	row3 = [
		'<tr id="Three"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="far fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvThreeInput">'
		, '<input type="text" name="lvThreeText" id="text" class="form-control text">'
		, '<input type="text" name="lvThreeStartDt" id="start" class="form-control peri" placeholder="시작일">'
		, '<input type="text" name="lvThreeEndDt" id="end" class="form-control peri" placeholder="종료일">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');
	
	// Level 1 추가(onClick event)
	$(document).on("click", ".addLvOne", function() {
		var topOne = $(this).closest("tr");
		var prevOne = topOne.prev();
		var lvOneCount = 0;
		
		while (true) {
			if (prevOne.attr("id") == "One") {
				lvOneCount++;
			} else if (prevOne.attr("id") == undefined) {
				break;
			} else {}
			prevOne = prevOne.prev();
		}
		
		if (lvOneCount < 2) {
			$(".table").append(row1);
			$(".table").append(addTwo);
			$(".table").append(addOne);
			topOne.remove();
		} else {
			$(".table").append(row1);
			$(".table").append(addTwo);
			topOne.remove();
		}
	});
	
	// Level 2 추가(onClick event)
	$(document).on("click", ".addLvTwo", function() {
		var topTwo = $(this).closest("tr");
		var prevTwo = topTwo.prev();
		var lvTwoCount = 0;
		
		while (prevTwo.attr("id") !== "One") {
			if (prevTwo.attr("id") == "Two") {
				lvTwoCount++;
			}			
			prevTwo = prevTwo.prev();
		}
		
		if (lvTwoCount < 2) {
			topTwo.after(addTwo);
			topTwo.after(addThree);
			topTwo.after(row2);
			topTwo.remove();
		} else {
			topTwo.after(addThree);
			topTwo.after(row2);
			topTwo.remove();
		}
	});
	
	// Level 3 추가(onClick event)
	$(document).on("click", ".addLvThree", function() {
		var topThree = $(this).closest("tr");
		var prevThree = topThree.prev();
		var lvThreeCount = 0;
		
		while (prevThree.attr("id") !== "Two") {
			lvThreeCount++;
			prevThree = prevThree.prev();
		}
		
		if (lvThreeCount < 2) {
			topThree.after(addThree);
			topThree.after(row3);
			topThree.remove();
		} else {
			topThree.after(row3);
			topThree.remove();
		}
	});
	
	// 행 삭제(onClick event)
	$(document).on("click", ".delRow", function() {
		var saveLv = $(this).closest("tr");
		var countLv = saveLv;
		var countDel = 0;
		
		var checkDel = confirm("해당 목표를 삭제하시겠습니까?\n(하위 행들도 삭제됩니다)")
		
		if (checkDel && saveLv.attr("id") == "Three") {
			while (countLv.attr("id") !== "Two") {
				countLv = countLv.prev();
			}
			
			while (true) {
				countLv = countLv.next();
				countDel++;
				if (countLv.attr("id") !== "Three")
					break;
			}
			
			if (countDel == 4) {
				countLv.before(addThree);
				saveLv.remove();
			} else 
				saveLv.remove();
		} else if (checkDel && saveLv.attr("id") == "Two") {
			while (countLv.attr("id") !== "One") {
				countLv = countLv.prev();
			}
			
			while (true) {
				countLv = countLv.next();
				if (countLv.attr("id") == "Two") {
					countDel++;
				}
				if (countLv.attr("id") == "One" || countLv.attr("id") == "addOne") {
					break;
				}
			}
			
			while (true) {
				var nextLvTwo = saveLv.next();
				
				if (nextLvTwo.attr("id") == "Three" || nextLvTwo.attr("id") == "addThree") {
					nextLvTwo.remove();
				} else {
					break;
				}
			}
			
			if (countDel == 3) {
				countLv.before(addTwo);
				saveLv.remove();
			} else {
				saveLv.remove();
			}
		} else if (checkDel && saveLv.attr("id") == "One") {
			var countOne; checkLast = 0;
			
			while (countLv.attr("id") !== undefined) {
				countOne = countLv;
				countLv = countLv.prev();
				if (countLv.attr("id") == "One") {
					checkLast++;
				}
			}
			
			while (countOne.next().attr("id") !== undefined) {
				if (countOne.attr("id") == "One") {
					countDel++;
				}
				countOne = countOne.next();
			}
			
			while (true) {
				var nextLvOne = saveLv.next();
				
				if (nextLvOne.attr("id") == "Two" || nextLvOne.attr("id") == "addTwo"
					|| nextLvOne.attr("id") == "Three" || nextLvOne.attr("id") == "addThree") {
					nextLvOne.remove();
				} else {
					break;
				}
			}
			
			if (countDel == 3) {
				if (checkLast == 2) {
					saveLv.before(addOne);
					saveLv.remove();
				} else {
					countOne.after(addOne);
					saveLv.remove();
				}
			} else {
				saveLv.remove();
			}
		}
	});
	
	// 달력(기간 설정)
	function compDate(a, b) {
		// var nowDt = nowDate();
		
		var aDt = a;
		var bDt = b;
		
		// var nowArr = nowDt.split('/');
		
		var aArr = aDt.split('/');
		var bArr = bDt.split('/');
		
		// var nowCompare = new Date(parseInt(nowArr[1])-1, nowArr[2], nowArr[0]);
		
		var aCompare = new Date(parseInt(aArr[1])-1, aArr[2], aArr[0]);
		var bCompare = new Date(parseInt(bArr[1])-1, bArr[2], bArr[0]);
		
		if (aCompare < bCompare) {
			return 1;
		} else if (aCompare == bCompare) {
			return 2;
		} else {
			return 3;
		}
	}
	
	$(document).on("mouseup", "#start", function() {
		$(this).daterangepicker({
			singleDatePicker: true,
			"opens": "left"
		});
	});
	
	$(document).on("mouseup", "#end", function() {
		$(this).daterangepicker({
			singleDatePicker: true,
			"opens": "left"
		});
	});
	
	// input 테두리 색 변경(focusOut event)
	$(document).on("focusout", "input", function() {
		var saveInput = $(this);
		
		if (!saveInput.val()) {
			saveInput.css('box-shadow', '0 0 5px rgba(255, 90, 90, 1)');
			saveInput.css('border', '1px solid rgba(255, 90, 90, 1)');
		} else {
			saveInput.css('box-shadow', 'none');
			saveInput.css('border', '1px solid rgb(206, 212, 218)');
		}
	});
	
	// DB로 보낼 값 정리
	function nowDate() {
		var date = new Date();
		
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		
		if(month < 10) month = "0" + month;
	    if(day < 10) day = "0" + day;
		
		return month + "/" + day + "/" + year;
	}
	
	// title
	var titleText = $("input[name=titleText]").val();
	var titleStartDt = $("input[name=titleStartDt]").val();
	var titleEndDt = $("input[name=titleEndDt]").val();

	/*
	 lv1.push("내용|시작|끝");
	 */
	
//	group["group"+cnt].lv1 = lv1 || [];
//	group["group"+cnt].lv2 = lv2 || [];
//	group["group"+cnt].lv3 = lv3 || [];
	
	var group = {};
	var groupNum = 1;
	
	function regGoal(number) {
		var lv1 = [], lv2 = [], lv3 = [];
		var tmp = $("input[name=lvOneText]");
		var firstInput = tmp.eq(groupNum - 1);
		var nextTr = firstInput.closest("tr").next();
		var nextInput = nextTr.find("input");
		var twoCnt = 0;
		
		if (!group["group" + groupNum]) 
			group["group" + groupNum] = {};
		
		lv1.push(groupNum + "|" + firstInput.val() + "|" + firstInput.next().val() + "|" + firstInput.next().next().val());
		group["group" + groupNum].lv1 = lv1 || [];
		
		while (true) {
			if (nextTr.attr("id") == "One" || nextTr.attr("id") == "addOne") {
				break;
			} else if (nextTr.attr("id") == "Two") {
				lv2.push((twoCnt + 1) + "|" + nextInput.val() + "|" + nextInput.next().val() + "|" + nextInput.next().next().val());
				group["group" + groupNum].lv2 = lv2 || [];
				twoCnt++;
			} else if (nextTr.attr("id") == "Three") {
				lv3.push(twoCnt + "|" + nextInput.val() + "|" + nextInput.next().val() + "|" + nextInput.next().next().val());
				group["group" + groupNum].lv3 = lv3 || [];
			}
			
			nextTr = nextTr.next();
			nextInput = nextTr.find("input");
		}
		
		groupNum++;
		if (groupNum <= tmp.length) 
			regGoal(groupNum);
		else 
			alert("끝!");
	}
	
	
	
//	function reg(group, cnt) {
//		var tmp = $("input[name=lvOneText]").eq(group-1);
//		var tmp_next_tr = tmp.closest("tr").next();
//		var tmp_next_input = tmp_next_tr.find("input");
//		var twoCount = 0, threeCount = 0;
//		
//		group1[lv1] = [tmp.val()|tmp.next().val()|tmp.next().next().val()];
//		
//		if (tmp_next.attr("id") == "Two") {
//			group1[lv2[twoCount]] = [twoCount + 1|tmp_next_input.val()|tmp_next_input.next().val()|tmp_next_input.next().next().val()];
//			twoCount++;
//		} else if (tmp_next.attr("id") == "Three") {
//			if (twoCount == 1) {
//				group1[lv3[threeCount]] = [twoCount|tmp_next_input.val()|tmp_next_input.next().val()|tmp_next_input.next().next().val()];
//			} else if (twoCount == 2) {
//				group1[lv3[threeCount]] = [twoCount|tmp_next_input.val()|tmp_next_input.next().val()|tmp_next_input.next().next().val()];
//			} else if (twoCount == 3) {
//				group1[lv3[threeCount]] = [twoCount|tmp_next_input.val()|tmp_next_input.next().val()|tmp_next_input.next().next().val()];
//			}
//		} else if (tmp_next.attr("id") == "One") {
//			var group2 = {
//				lv1: [],
//				lv2: [],
//				lv3: []
//			}
//		}
//	}
	
	
	
	
	// list
	/*function findParent(target) {
		var fp = target.closest("tr");
		var countfp = 0;
		
		if (target.attr("name") == "lvTwoText") {
			while (fp.attr("id") !== undefined) {
				fp = fp.prev();
				if (fp.attr("id") == "One") {
					countfp++;
				}
			}
		}
		
		if (target.attr("name") == "lvThreeText") {
			
		}
		return countfp;
	}
	
	var listText = new Array();
	var listStartDt = new Array();
	var listEndDt = new Array();
	
	var lvOneText = $("input[name=lvOneText]").val();
	var lvOneStartDt = $("input[name=lvOneStartDt]").val();
	var lvOneEndDt = $("input[name=lvOneEndDt]").val();
	
	for (var i = 0; i < lvOneText.length; i++) {
		oneText[i] = lvOneText[i];
		oneStartDt[i] = lvOneStartDt[i];
		oneEndDt[i] = lvOneEndDt[i];		
	}
	
	
	var lvTwoText = $("input[name=lvTwoText]");
	var lvTwoPeri = $("input[name=lvTwoPeri]");
	
	for (var i = 0; i < lvTwoText.length; i++) {
		var savefp = findParent(lvTwoText[i]);
		if (favefp == 1) {
			listText[0][i] = lvTwoText[i].val();
			listStartDt[0][i] = lvTwoPeri[i].val().slice(0, 10);
			listEndDt[0][i] = lvTwoPeri[i].val().slice(13, 23);
		} else if (savefp == 2) {
			listText[1][i] = lvTwoText[i].val();
			listStartDt[1][i] = lvTwoPeri[i].val().slice(0, 10);
			listEndDt[1][i] = lvTwoPeri[i].val().slice(13, 23);
		} else {
			listText[2][i] = lvTwoText[i].val();
			listStartDt[2][i] = lvTwoPeri[i].val().slice(0, 10);
			listEndDt[2][i] = lvTwoPeri[i].val().slice(13, 23);
		}
	}
	
	var lvThreeText = $("input[name=lvThreeText]");
	var lvThreePeri = $("input[name=lvThreePeri]");
	*/
})();
