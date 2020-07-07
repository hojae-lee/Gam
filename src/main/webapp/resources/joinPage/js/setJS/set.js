(function (addOne, addTwo, addThree, row1, row2, row3) {
	
	var fm = document.regGoal;
	
	addOne = [
		'<tr id="addOne"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvOne"></i></span>'
		, '</td></tr>'
	].join('');

	addTwo = [
		'<tr id="addTwo"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvTwo"></i></span>'
		, '</td></tr>'
	].join('');

	addThree = [
		'<tr id="addThree"><td>'
		, '<span><i class="fa fa-plus-circle fa-1x addLvThree"></i></span>'
		, '</td></tr>'
	].join('');

	row1 = [
		'<tr id="One"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="fas fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvOneInput">'
		, '<input type="text" id="text" class="form-control text">'
		, '<input type="text" id="peri" class="form-control peri" placeholder="기간 설정">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');
	
	row2 = [
		'<tr id="Two"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="far fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvTwoInput">'
		, '<input type="text" id="text" class="form-control text">'
		, '<input type="text" id="peri" class="form-control peri" placeholder="기간 설정">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');

	row3 = [
		'<tr id="Three"><td>'
		, '<div class="input-group mb-2">'
		, '<div class="input-group-prepend">'
		, '<span><i class="far fa-star fa-1x"></i></span>'
		, '</div>'
		, '<div class="lvThreeInput">'
		, '<input type="text" id="text" class="form-control text">'
		, '<input type="text" id="peri" class="form-control peri" placeholder="기간 설정">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');
	
	var lvOneCount = 0;
	$(document).on("click", ".addLvOne", function() {
		var tmpOne = $(this).closest("tr");
		var tOne = tmpOne.prev();
		
		while (true) {
			if (tOne.attr("id") == "One") {
				lvOneCount++;
			} else if (tOne.attr("id") == undefined) {
				break;
			} else {}
			tOne = tOne.prev();
		}
		
		if (lvOneCount < 2) {
			$(".table").append(row1);
			$(".table").append(addTwo);
			$(".table").append(addOne);
			tmpOne.remove();
		} else {
			$(".table").append(row1);
			$(".table").append(addTwo);
			tmpOne.remove();
		}
		lvOneCount = 0;
	});
	
	var lvTwoCount = 0;
	$(document).on("click", ".addLvTwo", function() {
		var tmpTwo = $(this).closest("tr");
		var tTwo = tmpTwo.prev();
		
		while (tTwo.attr("id") !== "One") {
			if (tTwo.attr("id") == "Two") {
				lvTwoCount++;
			}			
			tTwo = tTwo.prev();
		}
		
		if (lvTwoCount < 2) {
			tmpTwo.after(addTwo);
			tmpTwo.after(addThree);
			tmpTwo.after(row2);
			tmpTwo.remove();
		} else {
			tmpTwo.after(addThree);
			tmpTwo.after(row2);
			tmpTwo.remove();
		}
		lvTwoCount = 0;
	});
	
	var lvThreeCount = 0;
	$(document).on("click", ".addLvThree", function() {
		var tmpThree = $(this).closest("tr");
		var tThree = tmpThree.prev();
		
		while (tThree.attr("id") !== "Two") {
			lvThreeCount++;
			tThree = tThree.prev();
		}
		
		if (lvThreeCount < 2) {
			tmpThree.after(addThree);
			tmpThree.after(row3);
			tmpThree.remove();
		} else {
			tmpThree.after(row3);
			tmpThree.remove();
		}
		lvThreeCount = 0;
	});
	
	var countDel = 0;
	$(document).on("click", ".delRow", function() {
		var saveLv = $(this).closest("tr");
		var countLv = saveLv;
		
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
			
			countDel = 0;
			
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
			
			countDel = 0;
			
		} else if (checkDel && saveLv.attr("id") == "One") {
			var nextLvOne = saveLv.next();
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
			
			console.log(countOne.attr("class"));
			console.log(countDel);
			
			countDel = 0;
		}
		
	});
	
	$(document).on("mouseup", ".peri", function() {		
		$(this).daterangepicker({
			"opens": "left"
		}, function(start, end, label) {
			console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
		});
	});
	
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
	
})();
