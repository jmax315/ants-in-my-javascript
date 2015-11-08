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

Board.prototype.display_row= function(displayed_board) {
    var displayed_row= $("<tr></tr>").appendTo(displayed_board);
    for (var column= 0; column < this.width(); column++)
	$("<td></td>").appendTo(displayed_row);
}

Board.prototype.display= function(container) {
    var displayed_board= $("<table id='ant-board'></table>").appendTo(container);
    for (var row= 0; row < this.height(); row++)
	this.display_row(displayed_board);
}
