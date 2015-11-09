describe("when displayed, creates a table", function() {
    var the_board= null;
    var displayed_table= null;

    beforeEach(function() {
	the_board= new Board();
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
	the_board= null;
	displayed_table= null;
    });
});
