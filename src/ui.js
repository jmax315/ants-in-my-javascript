function Ui(container) {
    this._container= container;
    this._displayed_board= null;
}

Ui.prototype.container= function() {
    return this._container;
};

Ui.prototype.display_cell= function(displayed_row, row, column) {
    if (row === 5 && column === 5)
	$("<td class='white-cell'><img src=\"images/ant-up.jpg\"></td>").appendTo(displayed_row);
    else
	$("<td class='white-cell'></td>").appendTo(displayed_row);
}

Ui.prototype.display_row= function(a_board, row) {
    var displayed_row= $("<tr></tr>").appendTo(this._displayed_board);
    for (var column= 0; column < a_board.width(); column++)
	this.display_cell(displayed_row, row, column);
}

Ui.prototype.display= function(a_board) {
    this._displayed_board= $("<table id='ant-board'></table>").appendTo(this.container());
    for (var row= 0; row < a_board.height(); row++)
	this.display_row(a_board, row);
}
