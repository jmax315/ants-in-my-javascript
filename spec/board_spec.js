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

    for (var row= 0; row < 10; row++)
	for (var column= 0; column < 10; column++)
	    it("has a white square at [" + row + "," + column + "]", function() {
		expect(the_board.color(row, column)).toEqual('white');
	    });

    afterEach(function() {
	the_board= null;
    });
});
