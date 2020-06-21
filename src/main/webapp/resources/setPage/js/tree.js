GAM.addOne = [
	'<tr><td>'
	, '<i class="fa fa-plus addLvOne"></i>'
	, '</td></tr>'
].join('');

GAM.addTwo = [
	'<tr><td>'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvTwo"></i>'
	, '</td></tr>'
].join('');

GAM.addThree = [
	'<tr><td>'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvThree"></i>'
	, '</td></tr>'
].join('');

GAM.row1 = [
	'<tr><td>'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>'
	, '</td></tr>'
].join('');

GAM.row2 = [
	'<tr><td id="Two">'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>' 
	, '</td></tr>'
].join('');

GAM.row3 = [
	'<tr><td id="Three">'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
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
	var tmpTwo = $(this).parent();
	
	$(tmpTwo).append(GAM.row2);
	$(tmpTwo).append(GAM.addThree);
	$(tmpTwo).append(GAM.addTwo);
	$(this).closest(".addLvTwo").remove();
});

$(document).on("click", ".addLvThree", function() {
	var tmpThree = $(this).parent();
	
	$(tmpThree).append(GAM.row3);
	$(tmpThree).append(GAM.addThree);
	$(this).closest(".addLvThree").remove();
});

$(document).on("click", ".delRow", function() {
	var saveLv = $(this).closest("td").attr("id");
	var tmp = $(this).parent().parent().siblings();
	
	if (saveLv == "Three") {
		$(this).closest("td").remove();
	} else if (saveLv == "Two") {
		tmp[0].remove();
		$(this).closest("td").remove();
	}
	
});