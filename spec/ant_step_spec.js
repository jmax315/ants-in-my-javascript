describe("after stepping an ant at [5,5], facing up, on a white cell", function() {
    var the_board= null;
    var the_ant= null;

    beforeEach(function() {
	the_board= new Board();
	the_ant= the_board.add_ant();
	the_ant.step();
    });

    it("is located at row 5", function() {
	expect(the_ant.row()).toEqual(5);
    });

    it("is located at column 6", function() {
	expect(the_ant.column()).toEqual(6);
    });

    it("is facing right", function() {
	expect(the_ant.direction()).toEqual('right');
    });

    it("its old cell is flipped to black", function() {
	expect(the_board.cell_color(5, 5)).toEqual('black');
    });
});
