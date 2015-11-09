function Ui(ui_container) {
    this.container(ui_container);
    this.board(null);
    this.displayed_board(null);
}

accessor(Ui, "container");
accessor(Ui, "board");
accessor(Ui, "displayed_board");

Ui.prototype.display_cell= function(displayed_row, row, column) {
    if (this.board().is_ant_at(row, column))
	$("<td class='" + this.board().cell_color(row, column) + "-cell'><img src=\"images/ant-up.jpg\"></td>").appendTo(displayed_row);
    else
	$("<td class='" + this.board().cell_color(row, column) + "-cell'></td>").appendTo(displayed_row);
};

Ui.prototype.display_row= function(a_board, row) {
    var displayed_row= $("<tr></tr>").appendTo(this.displayed_board());
    for (var column= 0; column < this.board().width(); column++)
	this.display_cell(displayed_row, row, column);
};

Ui.prototype.display= function(a_board) {
    this.board(a_board);
    this.displayed_board($("<table id='ant-board'></table>").appendTo(this.container()));
    for (var row= 0; row < this.board().height(); row++)
	this.display_row(this.board(), row);
};
