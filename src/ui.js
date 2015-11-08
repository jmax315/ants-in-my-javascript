function Ui(container) {
    this._container= container;
}

Ui.prototype.container= function() {
    return this._container;
};

Ui.prototype.display= function(a_board) {
    var displayed_board= $("<table id='ant-board'></table>").appendTo(this.container());
    for (var row= 0; row < a_board.height(); row++)
	a_board.display_row(displayed_board, row);
}
