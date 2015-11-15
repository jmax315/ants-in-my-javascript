_.each(
    [
	{color: 'white', row: 0, column: 5, direction: 'left',  new_row: 9, new_column: 5},
	{color: 'white', row: 9, column: 5, direction: 'right', new_row: 0, new_column: 5},
	{color: 'white', row: 5, column: 0, direction: 'down',  new_row: 5, new_column: 9},
	{color: 'white', row: 5, column: 9, direction: 'up',    new_row: 5, new_column: 0},
    ],

    function(test_case) {
	describe("after stepping, an ant which started at [" + test_case.row + "," + test_case.column + "]," +
		 " on a " + test_case.color + " cell," +
		 " facing " + test_case.direction,
		 function() {
		     var the_board= null;
		     var the_ant= null;

		     beforeEach(function() {
			 the_board= new Board();
			 the_board.cell_color(test_case.row, test_case.column, test_case.color);
			 the_ant= the_board.add_ant();
			 the_ant.row(test_case.row);
			 the_ant.column(test_case.column);
			 the_ant.direction(test_case.direction);
			 the_ant.step();
		     });

		     it("is located at row " + test_case.new_row, function() {
			 expect(the_ant.row()).toEqual(test_case.new_row);
		     });

		     it("is located at column " + test_case.new_column, function() {
			 expect(the_ant.column()).toEqual(test_case.new_column);
		     });
		 });
    });
