function Board() {
}

Board.prototype.width= function() {
    return 10;
}

Board.prototype.height= function() {
    return 10;
}

Board.prototype.color= function(row, column) {
    return 'white';
}

Board.prototype.display= function(container) {
    $("<table id='ant-board'></table>").appendTo(container).
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr").
	append("<tr></tr");
}
