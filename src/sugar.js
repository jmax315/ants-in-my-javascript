function accessor(constructor, name) {
    constructor.prototype[name]= function(new_value) {
	var field= "_" + name;
	if (new_value !== undefined)
	    this[field]= new_value;
	return this[field];
    };
}
