describe("A 10x10 board", function() {
    function cell_message(row, column) {
	return "for cell [" + row + "," + column + "]";
    }

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
	for (var row= 0; row < 10; row++)
	    for (var column= 0; column < 10; column++)
		expect(the_board.color(row, column)).toEqual('white', cell_message(row, column));
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

	    it("with 10 columns", function() {
		expect(display_table[0].rows[0].cells.length).toEqual(10);
	    });

	    it("with each cell having a CSS class of 'white-cell'", function() {
		for (var row= 0; row < 10; row++)
		    for (var column= 0; column < 10; column++)
			expect($(display_table[0].rows[row].cells[column])).toHaveClass('white-cell', cell_message(row, column));
	    });
	});
    });
    
    afterEach(function() {
	the_board= null;
    });
});
