function Board() {
}

Board.prototype.width= function() {
    return 10;
}

Board.prototype.height= function() {
    return 10;
}

Board.prototype.cell_color= function(row, column) {
    return 'white';
}

Board.prototype.display_cell= function(displayed_row, row, column) {
    if (row === 5 && column === 5)
	$("<td class='white-cell'><img src=\"images/ant-up.jpg\"></td>").appendTo(displayed_row);
    else
	$("<td class='white-cell'></td>").appendTo(displayed_row);
}

Board.prototype.display_row= function(displayed_board, row) {
    var displayed_row= $("<tr></tr>").appendTo(displayed_board);
    for (var column= 0; column < this.width(); column++)
	this.display_cell(displayed_row, row, column);
}

Board.prototype.display= function(container) {
    var ui= new Ui(container);
    var displayed_board= ui.display(this);
}

Board.prototype.add_ant= function() {
    return new Ant();
}
