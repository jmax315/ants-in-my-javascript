describe("after stepping an ant at [5,5], facing up, on a white cell", function() {
    var the_ant= null;

    beforeEach(function() {
	the_ant= new Ant();
	the_ant.step();
    });

    it("is located at row 5", function() {
	expect(the_ant.row()).toEqual(5);
    });

    it("is located at column 6", function() {
	expect(the_ant.column()).toEqual(6);
    });
});
