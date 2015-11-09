function BoardDrawer(board_container) {
    this.container(board_container);
    this.board(null);
    this.displayed_board(null);
    this.row(0);
    this.column(0);
    this.displayed_row(null);
}

accessor(BoardDrawer, "container");
accessor(BoardDrawer, "board");
accessor(BoardDrawer, "displayed_board");
accessor(BoardDrawer, "row");
accessor(BoardDrawer, "column");
accessor(BoardDrawer, "displayed_row");

BoardDrawer.prototype.cell_class= function() {
    return this.board().cell_color(this.row(), this.column()) + "-cell";
}

BoardDrawer.prototype.cell_contents= function() {
    if (this.board().is_ant_at(this.row(), this.column())) {
	var color= this.board().cell_color(this.row(), this.column());
	var direction= this.board().ant().direction();
	return "<img src=\"images/ant-on-" + color + "-" + direction + ".jpg\">";
    }
    return "";
};

BoardDrawer.prototype.start_row= function() {
    this.displayed_row($("<tr></tr>").appendTo(this.displayed_board()));
};

BoardDrawer.prototype.done= function() {
    return this.row() >= this.board().height();
};

BoardDrawer.prototype.next_cell= function() {
    this.column(this.column() + 1);
    if (this.column() >= this.board().width()) {
	this.column(0);
	this.row(this.row() + 1);
    }
};

BoardDrawer.prototype.add_cell= function() {
    if (this.column() === 0)
	this.start_row();

    $("<td class='" + this.cell_class() + "'>" + this.cell_contents() + "</td>").appendTo(this.displayed_row());
    this.next_cell();
    return !this.done();
};

BoardDrawer.prototype.display= function(a_board) {
    this.board(a_board);
    this.displayed_board($("<table id='ant-board'></table>").appendTo(this.container()));
    while (this.add_cell())
	;
};
