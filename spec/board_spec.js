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

    describe("when displayed, creates a table", function() {
	var displayed_table= null;

	beforeEach(function() {
	    jasmine.getFixtures().set("<div id='board-div'></div>");
	    the_board.display($('#board-div'));
	    displayed_table= $('#board-div>table#ant-board');
	});

	it("in the DOM", function() {
	    expect(displayed_table).toBeInDOM();
	}); 

	it("with 10 rows", function() {
	    expect(displayed_table[0].rows.length).toEqual(10);
	});

	it("with 10 columns", function() {
	    expect(displayed_table[0].rows[0].cells.length).toEqual(10);
	});

	it("with each cell having a CSS class of 'white-cell'", function() {
	    for (var row= 0; row < 10; row++)
		for (var column= 0; column < 10; column++)
		    expect(displayed_cell(displayed_table, row, column)).toHaveClass('white-cell', cell_message(row, column));
	});
    });
    
    afterEach(function() {
	the_board= null;
    });
});
