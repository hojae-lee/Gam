GAM.addOne = [
	'<tr id="addOne"><td>'
	, '<span><i class="fa fa-plus addLvOne fa-1x"></i></span>'
	, '</td></tr>'
].join('');

GAM.addTwo = [
	'<tr id="addTwo"><td>'
	, '<span><i class="fa fa-plus addLvTwo fa-1x"></i></span>'
	, '</td></tr>'
].join('');

GAM.addThree = [
	'<tr id="addThree"><td>'
	, '<span><i class="fa fa-plus addLvThree fa-1x"></i></span>'
	, '</td></tr>'
].join('');

GAM.row1 = [
	'<tr id="One">'
	, '<td>'
	, '<div class="input-group mb-2">'
	, '<div class="input-group-prepend">'
	, '<span><i class="fas fa-angle-right fa-1x"></i></span>'
	, '</div>'
	, '<input class="form-control" type="text">'
	, '<div class="input-group-append">'
	, '<span><i class="fa fa-check fa-1x"></i></span>'
	, '<span><i class="fa fa-times delRow fa-1x"></i></span>'
	, '</div>'
	, '</div>'
	, '</td>'
	, '</tr>'
].join('');

GAM.row2 = [
	'<tr id="Two"><td>'
	, '<div class="input-group mb-2">'
	, '<div class="input-group-prepend">'
	, '<span><i class="fas fa-angle-right fa-1x"></i></span>'
	, '</div>'
	, '<input class="form-control" type="text">'
	, '<div class="input-group-append">'
	, '<span><i class="fa fa-check fa-1x"></i></span>'
	, '<span><i class="fa fa-times delRow fa-1x"></i></span>'
	, '</div>'
	, '</div>'
	, '</td></tr>'
].join('');

GAM.row3 = [
	'<tr id="Three"><td>'
	, '<div class="input-group mb-2">'
	, '<div class="input-group-prepend">'
	, '<span><i class="fas fa-angle-right fa-1x"></i></span>'
	, '</div>'
	, '<input class="form-control" type="text">'
	, '<div class="input-group-append">'
	, '<span><i class="fa fa-check fa-1x"></i></span>'
	, '<span><i class="fa fa-times delRow fa-1x"></i></span>'
	, '</div>'
	, '</div>'
	, '</td></tr>'
].join('');

$(document).on("click", ".addLvOne", function() {
	$(".table").append(GAM.row1);
	$(".table").append(GAM.addTwo);
	$(".table").append(GAM.addOne);
	$(this).closest("tr").remove();
});

$(document).on("click", ".addLvTwo", function() {
	var tmpTwo = $(this).closest("tr");
	
	$(tmpTwo).after(GAM.addTwo);
	$(tmpTwo).after(GAM.addThree);
	$(tmpTwo).after(GAM.row2);
	$(this).closest("tr").remove();
});

$(document).on("click", ".addLvThree", function() {
	var tmpThree = $(this).closest("tr");
	
	$(tmpThree).after(GAM.addThree);
	$(tmpThree).after(GAM.row3);
	$(this).closest("tr").remove();
});

$(document).on("click", ".delRow", function() {
	var saveLv = $(this).closest("tr").attr("id");
	var selectedLvTwo = $(this).closest("tr");
	var selectedLvOne = $(this).closest("tr");
	
	if (saveLv == "Three") {
		$(this).closest("tr").remove();
	} else if (saveLv == "Two") {
		while (1) {
			var nextLvTwo = selectedLvTwo.next();
			
			if (nextLvTwo.attr("id") == "Three" || nextLvTwo.attr("id") == "addThree") {
				nextLvTwo.remove();
			} else {
				break;
			}
		}
		$(this).closest("tr").remove();
	} else if (saveLv == "One") {
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