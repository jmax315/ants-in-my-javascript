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

Ant.prototype.directions= {
    up:    {turn_left: 'left',  turn_right: 'right', row_increment: -1, column_increment: 0},
    left:  {turn_left: 'down',  turn_right: 'up',    row_increment:  0, column_increment: -1},
    down:  {turn_left: 'right', turn_right: 'left',  row_increment:  1, column_increment: 0},
    right: {turn_left: 'up',    turn_right: 'down',  row_increment:  0, column_increment: 1}
};

Ant.prototype.colors= {
    'black': {flipped_color: 'white', turn: function() {this.direction(this.directions[this.direction()].turn_right);} },
    'white': {flipped_color: 'black', turn: function() {this.direction(this.directions[this.direction()].turn_left);} }
};

Ant.prototype.color= function(new_value) {
    return this.board().cell_color(this.row(), this.column(), new_value);
};
    
Ant.prototype.flip_color= function() {
    this.color(this.colors[this.color()].flipped_color);
};

Ant.prototype.move_forward= function() {
    this.row(this.row() + this.directions[this.direction()].row_increment);
    this.column(this.column() + this.directions[this.direction()].column_increment);
};

Ant.prototype.turn= function() {
    this.colors[this.color()].turn.call(this);
}

Ant.prototype.step= function() {
    this.flip_color();
    this.turn();
    this.move_forward();
};
