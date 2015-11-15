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

Ant.prototype.direction_table= {
    up:    {turn_left: 'left',  turn_right: 'right', row_increment: -1, column_increment: 0},
    left:  {turn_left: 'down',  turn_right: 'up',    row_increment:  0, column_increment: -1},
    down:  {turn_left: 'right', turn_right: 'left',  row_increment:  1, column_increment: 0},
    right: {turn_left: 'up',    turn_right: 'down',  row_increment:  0, column_increment: 1}
};

Ant.prototype.color_table= {
    'black': {flipped_color: 'white', turn_direction: 'turn_right'},
    'white': {flipped_color: 'black', turn_direction: 'turn_left'},
};

Ant.prototype.color_table_lookup= function() {
    return this.color_table[this.color()];
};

Ant.prototype.direction_table_lookup= function() {
    return this.direction_table[this.direction()];
}

Ant.prototype.new_direction= function() {
    var turn_direction= this.color_table_lookup().turn_direction;
    return this.direction_table_lookup()[turn_direction];
};

Ant.prototype.flipped_color= function() {
    return this.color_table_lookup().flipped_color;
};

Ant.prototype.row_increment= function() {
    return this.direction_table_lookup().row_increment;
};

Ant.prototype.column_increment= function() {
    return this.direction_table_lookup().column_increment;
};

Ant.prototype.color= function(new_value) {
    return this.board().cell_color(this.row(), this.column(), new_value);
};
    
Ant.prototype.flip_color= function() {
    this.color(this.flipped_color());
};

Ant.prototype.move_forward= function() {
    this.row(this.row() + this.row_increment());
    this.column(this.column() + this.column_increment());
    this.wrap_ant();
};

Ant.prototype.wrap_ant= function() {
    this.row((this.row() + this.board().height()) % this.board().height());
    this.column((this.column() + this.board().width()) % this.board().width());
};

Ant.prototype.turn= function() {
    this.direction(this.new_direction());
};

Ant.prototype.on_board= function() {
    return this.board() &&
	this.column() >= 0 && this.column() < this.board().width() &&
	this.row() >= 0 && this.row() < this.board().height();
};

Ant.prototype.step= function() {
    if (!this.on_board())
	return;

    this.flip_color();
    this.turn();
    this.move_forward();
};
