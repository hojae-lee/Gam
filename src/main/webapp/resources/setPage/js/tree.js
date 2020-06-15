var addRow = function() {	
	var row = "<tr>";
	row += "<th><i>ㅇ</i></th>";
	row += "<td><input type=\"text\"></td>";
	row += "<td><i class=\"fa fa-check\"></i> <i class=\"fa fa-times\"></i></td>";
	row += "</tr>";
	row += "<tr>";
	row += "<th><i class='fa fa-plus' addRow></i></th>";
	row += "<td></td><td></td>";
	row += "</tr>";
	
	$('.table').append(row);
}


$(document).on("click",".addRow",function() {
	$(this).closest("tr").remove();
	addRow();
});