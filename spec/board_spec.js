describe("A default board", function() {
    var the_board= null;
    
    beforeEach(function() {
	the_board= new Board();
    });

    it("has a width of 10", function() {
	expect(the_board.width()).toEqual(10);
    });

    it("has a height of 10", function() {
	expect(the_board.height()).toEqual(10);
    });

    it("has white cells everywhere", function() {
	for (var row= 0; row < the_board.height(); row++)
	    for (var column= 0; column < the_board.width(); column++)
		expect(the_board.cell_color(row, column)).toEqual('white', cell_message(row, column));
    });

    afterEach(function() {
	the_board= null;
    });
});

describe("Board.cell_color()", function() {
    var the_board= null;
    
    beforeEach(function() {
	the_board= new Board();
    });

    it("does not barf when passed a row that's too small", function() {
	expect(function() {the_board.cell_color(-1, 0);}).not.toThrow();
    });

    it("does not barf when passed a column that's too small", function() {
	expect(function() {the_board.cell_color(0, -1);}).not.toThrow();
    });

    it("does not barf when passed a row that's too large", function() {
	expect(function() {the_board.cell_color(the_board.height(), 0);}).not.toThrow();
    });

    it("does not barf when passed a column that's too large", function() {
	expect(function() {the_board.cell_color(0, the_board.width());}).not.toThrow();
    });

    afterEach(function() {
	the_board= null;
    });
});
