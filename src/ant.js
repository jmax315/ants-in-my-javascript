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
    this.column(6);
    this.direction('right');
};
