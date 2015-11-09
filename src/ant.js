function accessor(constructor, name) {
    constructor.prototype[name]= function(new_value) {
	var field= "_" + name;
	if (new_value !== undefined)
	    this[field]= new_value;
	return this[field];
    };
}

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
