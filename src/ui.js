function Ui(container) {
    this._container= container;
    this._displayed_board= null;
}

Ui.prototype.container= function() {
    return this._container;
};

Ui.prototype.display_row= function(a_board, row) {
    var displayed_row= $("<tr></tr>").appendTo(this._displayed_board);
    for (var column= 0; column < a_board.width(); column++)
	a_board.display_cell(displayed_row, row, column);
}

Ui.prototype.display= function(a_board) {
    this._displayed_board= $("<table id='ant-board'></table>").appendTo(this.container());
    for (var row= 0; row < a_board.height(); row++)
	this.display_row(a_board, row);
}
