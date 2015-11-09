describe("when a board is displayed it, creates a table", function() {
    var the_board= null;
    var displayed_table= null;

    beforeEach(function() {
	the_board= new Board();
	the_board.cell_color(0, 0, 'black');
	the_board.cell_color(1, 1, 'white');
	displayed_table= display_table(the_board);
    });

    it("which is visible", function() {
	expect(displayed_table).toBeVisible();
    }); 

    it("with the same number of rows as the board", function() {
	expect(displayed_table[0].rows.length).toEqual(the_board.height());
    });

    it("with the same number of columns as the board", function() {
	expect(displayed_table[0].rows[0].cells.length).toEqual(the_board.width());
    });

    it("with each cell having a CSS class to match its color", function() {
	for (var row= 0; row < the_board.height(); row++)
	    for (var column= 0; column < the_board.width(); column++) {
		var expected_class= the_board.cell_color(row, column) + "-cell";
		expect(displayed_cell(displayed_table, row, column)).toHaveClass(expected_class, cell_message(row, column));
	    }
    });

    afterEach(function() {
	the_board= null;
	displayed_table= null;
    });
});
