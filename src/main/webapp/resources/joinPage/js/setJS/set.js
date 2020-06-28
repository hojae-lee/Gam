(function (addOne, addTwo, addThree, row1, row2, row3) {
	
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
		, '<input type="text" class="form-control text">'
		, '<input type="text" class="form-control peri" placeholder="기간 설정">'
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
		, '<input type="text" class="form-control text">'
		, '<input type="text" class="form-control peri" placeholder="기간 설정">'
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
		, '<input type="text" class="form-control text">'
		, '<input type="text" class="form-control peri" placeholder="기간 설정">'
		, '</div>'
		, '<div class="input-group-append">'
		, '<span><i class="far fa-trash-alt fa-1x delRow"></i></span>'
		, '</div>'
		, '</div>'
		, '</td></tr>'
	].join('');
	
	$(document).on("click", ".addLvOne", function() {
		$(".table").append(row1);
		$(".table").append(addTwo);
		$(".table").append(addOne);
		$(this).closest("tr").remove();
	});
	
	$(document).on("click", ".addLvTwo", function() {
		var tmpTwo = $(this).closest("tr");
		
		$(tmpTwo).after(addTwo);
		$(tmpTwo).after(addThree);
		$(tmpTwo).after(row2);
		$(this).closest("tr").remove();
	});

	$(document).on("click", ".addLvThree", function() {
		var tmpThree = $(this).closest("tr");
		
		$(tmpThree).after(addThree);
		$(tmpThree).after(row3);
		$(this).closest("tr").remove();
	});

	$(document).on("click", ".delRow", function() {
		var saveLv = $(this).closest("tr").attr("id");
		var selectedLvTwo = $(this).closest("tr");
		var selectedLvOne = $(this).closest("tr");
		
		var checkDel = confirm("해당 목표를 삭제하시겠습니까?")
		
		if (checkDel && saveLv == "Three") {
			$(this).closest("tr").remove();
		} else if (checkDel && saveLv == "Two") {
			while (1) {
				var nextLvTwo = selectedLvTwo.next();
				
				if (nextLvTwo.attr("id") == "Three" || nextLvTwo.attr("id") == "addThree") {
					nextLvTwo.remove();
				} else {
					break;
				}
			}
			$(this).closest("tr").remove();
		} else if (checkDel && saveLv == "One") {
			while (1) {
				var nextLvOne = selectedLvOne.next();
				
				if (nextLvOne.attr("id") == "Two" || nextLvOne.attr("id") == "addTwo"
					|| nextLvOne.attr("id") == "Three" || nextLvOne.attr("id") == "addThree") {
					nextLvOne.remove();
				} else {
					break;
				}
			}
			$(this).closest("tr").remove();
		}
		
	});
	
	$(document).on("mouseup", ".peri", function() {		
		$(this).daterangepicker({
			"opens": "left"
		}, function(start, end, label) {
			console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
		});
	});
	
})();
