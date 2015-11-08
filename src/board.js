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
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
    displayed_board.append("<tr></tr");
}
