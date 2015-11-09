function Ant(a_board) {
    this.row(5);
    this.column(5);
    this.direction('up');
    this.board(a_board);
}

accessor(Ant, "row");
accessor(Ant, "column");
accessor(Ant, "direction");
accessor(Ant, "board");

Ant.prototype.flip_color= function() {
    this.board().cell_color(this.row(), this.column(), 'black');
};

Ant.prototype.turn_right= function() {
    switch(this.direction()) {
    case 'up':
	this.direction('right');
	break;
    case 'left':
	this.direction('up');
	break;
    case 'down':
	this.direction('left');
	break;
    case 'right':
	this.direction('down');
	break;
    }
};

Ant.prototype.move_forward= function() {
    switch(this.direction()) {
    case 'up':
	this.row(this.row() - 1);
	break;
    case 'left':
	this.column(this.column() - 1);
	break;
    case 'down':
	this.row(this.row() + 1);
	break;
    case 'right':
	this.column(this.column() + 1);
	break;
    }
};

Ant.prototype.step= function() {
    this.flip_color();
    this.turn_right();
    this.move_forward();
};
