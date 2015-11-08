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
	    jasmine.getFixtures().set("<div id='board-div'></div>");
	    the_board.display($('#board-div'));
	});

	describe("creates a table", function() {
	    var display_table= null;

	    beforeEach(function() {
		display_table= $('#board-div>table#ant-board');
	    });

	    it("in the DOM", function() {
		expect(display_table).toBeInDOM();
	    }); 

	    it("with 10 rows", function() {
		expect(display_table[0].rows.length).toEqual(10);
	    });
	});
    });
    
    afterEach(function() {
	the_board= null;
    });
});
