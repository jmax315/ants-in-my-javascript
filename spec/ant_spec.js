describe("an ant", function() {
    var the_ant= null;

    beforeEach(function() {
    	the_ant= new Ant();
    });

    it("is located at [5,5]", function() {
	expect(the_ant.location()).toEqual([5,5]);
    });

    it("is is pointing up", function() {
	expect(the_ant.direction()).toEqual('up');
    });
});
