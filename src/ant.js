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
}

Ant.prototype.move_forward= function() {
    switch(this.direction()) {
    case 'up':
	this.row(4);
	break;
    case 'left':
	this.column(4);
	break;
    case 'down':
	this.row(6);
	break;
    case 'right':
	this.column(6);
	break;
    }
}

Ant.prototype.step= function() {
    this.board().cell_color(this.row(), this.column(), 'black');
    this.turn_right();
    this.move_forward();
};
