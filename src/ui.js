function Ui(ui_container) {
    this.container(ui_container);
    this.board(null);
    this.displayed_board(null);
    this.row(0);
    this.column(0);
    this.displayed_row(null);
}

accessor(Ui, "container");
accessor(Ui, "board");
accessor(Ui, "displayed_board");
accessor(Ui, "row");
accessor(Ui, "column");
accessor(Ui, "displayed_row");

Ui.prototype.cell_class= function() {
    return this.board().cell_color(this.row(), this.column()) + "-cell";
}

Ui.prototype.cell_contents= function() {
    if (this.board().is_ant_at(this.row(), this.column()))
	return "<img src=\"images/ant-up.jpg\">";
    return "";
};

Ui.prototype.start_row= function() {
    this.displayed_row($("<tr></tr>").appendTo(this.displayed_board()));
};

Ui.prototype.done= function() {
    return this.row() >= this.board().height();
};

Ui.prototype.next_cell= function() {
    this.column(this.column() + 1);
    if (this.column() >= this.board().width()) {
	this.column(0);
	this.row(this.row() + 1);
    }
};

Ui.prototype.add_cell= function() {
    if (this.column() === 0)
	this.start_row();

    $("<td class='" + this.cell_class() + "'>" + this.cell_contents() + "</td>").appendTo(this.displayed_row());
};

Ui.prototype.display= function(a_board) {
    this.board(a_board);
    this.displayed_board($("<table id='ant-board'></table>").appendTo(this.container()));
    while (!this.done()) {
	this.add_cell();
	this.next_cell();
    }
};
