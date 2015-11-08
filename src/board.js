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

Board.prototype.display_cell= function(displayed_row) {
	$("<td class='white-cell'></td>").appendTo(displayed_row);
}

Board.prototype.display_row= function(displayed_board) {
    var displayed_row= $("<tr></tr>").appendTo(displayed_board);
    for (var column= 0; column < this.width(); column++)
	this.display_cell(displayed_row);
}

Board.prototype.display= function(container) {
    var displayed_board= $("<table id='ant-board'></table>").appendTo(container);
    for (var row= 0; row < this.height(); row++)
	this.display_row(displayed_board);
}

Board.prototype.add_ant= function() {
    return { location: function() {return [5,5];} };
}
