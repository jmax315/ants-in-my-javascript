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
    var displayed_board= $("<table id='ant-board'></table>").appendTo(container);
    for (var row= 0; row < 10; row++) {
	var displayed_row= $("<tr></tr>").appendTo(displayed_board);
	for (var column= 0; column < 10; column++)
	    $("<td></td>").appendTo(displayed_row);
    }
}
