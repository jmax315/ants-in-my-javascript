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
	displayed_board.append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
    }
}
