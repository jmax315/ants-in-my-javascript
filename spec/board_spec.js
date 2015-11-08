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
	for (var row= 0; row < the_board.height(); row++)
	    for (var column= 0; column < the_board.width(); column++)
		expect(the_board.color(row, column)).toEqual('white', cell_message(row, column));
    });

    describe("when displayed, creates a table", function() {
	var displayed_table= null;

	beforeEach(function() {
	    displayed_table= display_table(the_board);
	});

	it("in the DOM", function() {
	    expect(displayed_table).toBeInDOM();
	}); 

	it("with 10 rows", function() {
	    expect(displayed_table[0].rows.length).toEqual(the_board.height());
	});

	it("with 10 columns", function() {
	    expect(displayed_table[0].rows[0].cells.length).toEqual(the_board.width());
	});

	it("with each cell having a CSS class of 'white-cell'", function() {
	    for (var row= 0; row < the_board.height(); row++)
		for (var column= 0; column < the_board.width(); column++)
		    expect(displayed_cell(displayed_table, row, column)).toHaveClass('white-cell', cell_message(row, column));
	});

	afterEach(function() {
	    displayed_table= null;
	});
    });
    
    afterEach(function() {
	the_board= null;
    });
});
