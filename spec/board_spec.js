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

    it("has white squares everywhere", function() {
	for (var row= 0; row < 10; row++)
	    for (var column= 0; column < 10; column++)
		expect(the_board.color(row, column)).toEqual('white', "for square [" + row + "," + column + "]");
    });

    describe("when displayed", function() {
	beforeEach(function() {
	    the_board.display();
	});

	it("creates a table", function() {
	    expect($('#ant-board')).toBeVisible();
	}); 
    });
    
    afterEach(function() {
	the_board= null;
    });
});
