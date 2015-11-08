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
    for (var i= 0; i < 10; i++) {
	var displayed_row= $("<tr></tr>").appendTo(displayed_board);
	for (var j= 0; j < 10; j++)
	    $("<td></td>").appendTo(displayed_row);
    }
}
