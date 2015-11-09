function Board() {
    this.ant(null);
    this._cells= [];
    for (var row= 0; row < this.width(); row++) {
	var new_row= [];
	for (var column= 0; column < this.height(); column++)
	    new_row.push('white');
	this._cells.push(new_row);
    }
}

accessor(Board, "ant");

Board.prototype.width= function() {
    return 10;
}

Board.prototype.height= function() {
    return 10;
}

Board.prototype.cell_color= function(row, column, new_value) {
    if (new_value !== undefined)
	this._cells[row][column]= new_value;
    return this._cells[row][column];
}

Board.prototype.display= function(container) {
    var ui= new Ui(container);
    var displayed_board= ui.display(this);
}

Board.prototype.add_ant= function() {
    this.ant(new Ant(this));
    return this.ant();
}
