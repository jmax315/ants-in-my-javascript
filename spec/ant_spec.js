describe("an ant with default values", function() {
    var the_ant= null;

    beforeEach(function() {
    	the_ant= new Ant();
    });

    it("is located at row 5", function() {
	expect(the_ant.row()).toEqual(5);
    });

    it("is located at column 5", function() {
	expect(the_ant.column()).toEqual(5);
    });

    it("is is pointing up", function() {
	expect(the_ant.direction()).toEqual('up');
    });
});
