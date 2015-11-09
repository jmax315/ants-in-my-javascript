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

Ant.prototype.color= function(new_value) {
    return this.board().cell_color(this.row(), this.column(), new_value);
};
    
Ant.prototype.flip_color= function() {
    if (this.color() === 'white')
	this.color('black');
    else
	this.color('white');
};

Ant.prototype.turn_left= function() {
    switch(this.direction()) {
    case 'up':
	this.direction('left');
	break;
    case 'left':
	this.direction('down');
	break;
    case 'down':
	this.direction('right');
	break;
    case 'right':
	this.direction('up');
	break;
    }
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

Ant.prototype.turn= function() {
    if (this.color() === 'white')
	this.turn_left();
    else
	this.turn_right();
}

Ant.prototype.step= function() {
    this.flip_color();
    this.turn();
    this.move_forward();
};
