GAM.addOne = [
	'<tr id="addOne"><td>'
	, '<i class="fa fa-plus addLvOne"></i>'
	, '</td></tr>'
].join('');

GAM.addTwo = [
	'<tr id="addTwo"><td>'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvTwo"></i>'
	, '</td></tr>'
].join('');

GAM.addThree = [
	'<tr id="addThree"><td>'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvThree"></i>'
	, '</td></tr>'
].join('');

GAM.row1 = [
	'<tr id="One"><td>'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input class="form-control" type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>'
	, '</td></tr>'
].join('');

GAM.row2 = [
	'<tr id="Two"><td>'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input class="form-control" type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>' 
	, '</td></tr>'
].join('');

GAM.row3 = [
	'<tr id="Three"><td>'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input class="form-control" type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>' 
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