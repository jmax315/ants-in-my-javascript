function Ant() {
    this.row(5);
    this.column(5);
    this.direction('up');
}

accessor(Ant, "row");
accessor(Ant, "column");
accessor(Ant, "direction");

Ant.prototype.step= function() {
    this.column(6);
    this.direction('right');
};
