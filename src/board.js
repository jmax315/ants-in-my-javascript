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

Board.prototype.add_ant= function() {
    this.ant(new Ant(this));
    return this.ant();
}

Board.prototype.is_ant_at= function(row, column) {
    return this.ant() &&
	row === this.ant().row() &&
	column === this.ant().column();
};
