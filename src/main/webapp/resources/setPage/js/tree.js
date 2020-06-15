
GAM.row1 = [
	'<tr><td>'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>'
	, '</td></tr>'
	, '<tr><td class="addTwo">'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvTwo"></i>'
	, '</td></tr>'
	, '<tr>'
	, '<td><i class="fa fa-plus addLvOne"></i>'
	, '</td></tr>'
].join('');

GAM.row2 = [
	'<tr><td>'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>' 
	, '</td></tr>'
	, '<tr><td class="addThree">'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvThree"></i>'
	, '</td></tr>'
	, '<tr><td>'
	, '&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvTwo"></i>'
	, '</td></tr>'
].join('');

GAM.row3 = [
	'<tr><td>'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fas fa-angle-right"></i>'
	, '&emsp;'
	, '<input type="text">'
	, '&emsp;'
	, '<i class="fa fa-check"></i> <i class="fa fa-times delRow"></i>' 
	, '</td></tr>'
	, '<tr><td>'
	, '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'
	, '<i class="fa fa-plus addLvThree"></i>'
	, '</td></tr>'
].join('');

$(document).on("click", ".addLvOne", function() {
	$(".table").append(GAM.row1);
	$(this).closest("tr").remove();
});

$(document).on("click", ".addLvTwo", function() {
	var tmpTwo = $(this).parent();
	
	$(tmpTwo).append(GAM.row2);
	$(this).closest(".addLvTwo").remove();
});

$(document).on("click", ".addLvThree", function() {
	var tmpThree = $(this).parent();
	
	$(tmpThree).append(GAM.row3);
	$(this).closest(".addLvThree").remove();
});

$(document).on("click", ".delRow", function() {
	$(this).closest("tr").remove();
});