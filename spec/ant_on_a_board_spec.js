describe("an ant on the board", function() {
    var the_board= null;
    var the_ant= null;

    beforeEach(function() {
    	the_board= new Board();
    	the_ant= the_board.add_ant();
    });

    it("is located at [5,5]", function() {
	expect(the_ant.location()).toEqual([5,5]);
    });

    it("is is pointing up", function() {
	expect(the_ant.direction()).toEqual('up');
    });
});
