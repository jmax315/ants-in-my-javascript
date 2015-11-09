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

describe("Ant.step()", function() {
    var the_board= null;
    var the_ant= null;

    function step() {the_ant.step();}

    beforeEach(function() {
	the_board= new Board();
	the_ant= the_board.add_ant();
    });

    it("does not barf when the ant is off to the left of the board", function() {
	the_ant.column(-1);
	expect(step).not.toThrow();
    });

    it("does not barf when the ant is off to the right of the board", function() {
	the_ant.column(the_board.width());
	expect(step).not.toThrow();
    });

    it("does not barf when the ant is off above the board", function() {
	the_ant.row(-1);
	expect(step).not.toThrow();
    });

    it("does not barf when the ant is off below the board", function() {
	the_ant.row(the_board.height());
	expect(step).not.toThrow();
    });

    afterEach(function() {
	the_ant= null;
	the_board= null;
    });
});
