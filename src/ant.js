function Ant() {
    this._column= 5;
}

Ant.prototype.row= function() {
    return 5;
};

Ant.prototype.column= function() {
    return this._column;
};

Ant.prototype.direction= function() {
    return 'up';
};

Ant.prototype.step= function() {
    this._column= 6;
};
