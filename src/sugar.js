function accessor(constructor, name) {
    var field= "_" + name;
    constructor.prototype[name]= function(new_value) {
	if (new_value !== undefined)
	    this[field]= new_value;
	return this[field];
    };
}

function reader(constructor, name) {
    var field= "_" + name;
    constructor.prototype[name]= function() {
	return this[field];
    };
}
