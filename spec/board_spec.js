describe("A 10x10 board", function() {
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
