function accessor(constructor, name) {
    constructor.prototype[name]= function(new_value) {
	return this["_" + name];
    };
}

function Ant() {
    this._row= 5;
    this._column= 5;
    this._direction= 'up';
}

accessor(Ant, "row");
accessor(Ant, "column");
accessor(Ant, "direction");

Ant.prototype.step= function() {
    this._column= 6;
    this._direction= 'right';
};
