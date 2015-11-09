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

Ant.prototype.step= function() {
    this.board().cell_color(this.row(), this.column(), 'black');
    switch(this.direction()) {
    case 'up':
	this.column(6);
	this.direction('right');
	break;
    case 'left':
	this.row(4);
	this.direction('up');
	break;
    case 'down':
	this.column(4);
	this.direction('left');
	break;
    case 'right':
	this.row(6);
	this.direction('down');
	break;
    }
};
