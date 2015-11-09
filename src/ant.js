function Ant() {
    this._column= 5;
    this._direction= 'up';
}

Ant.prototype.row= function() {
    return 5;
};

Ant.prototype.column= function() {
    return this._column;
};

Ant.prototype.direction= function() {
    return this._direction;
};

Ant.prototype.step= function() {
    this._column= 6;
    this._direction= 'right';
};
