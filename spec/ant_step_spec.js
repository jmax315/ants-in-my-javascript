_.each(
    [
	{color: 'white', row: 5, column: 5, direction: 'up',    new_color: 'black', new_row: 5, new_column: 6, new_direction: 'right'},
	{color: 'white', row: 5, column: 5, direction: 'left',  new_color: 'black', new_row: 4, new_column: 5, new_direction: 'up'},
	{color: 'white', row: 5, column: 5, direction: 'down',  new_color: 'black', new_row: 5, new_column: 4, new_direction: 'left'},
	{color: 'white', row: 5, column: 5, direction: 'right', new_color: 'black', new_row: 6, new_column: 5, new_direction: 'down'},

	{color: 'white', row: 3, column: 7, direction: 'up',    new_color: 'black', new_row: 3, new_column: 8, new_direction: 'right'},
	{color: 'white', row: 3, column: 7, direction: 'left',  new_color: 'black', new_row: 2, new_column: 7, new_direction: 'up'},
	{color: 'white', row: 3, column: 7, direction: 'down',  new_color: 'black', new_row: 3, new_column: 6, new_direction: 'left'},
	{color: 'white', row: 3, column: 7, direction: 'right', new_color: 'black', new_row: 4, new_column: 7, new_direction: 'down'},

	{color: 'black', row: 5, column: 5, direction: 'up',    new_color: 'white', new_row: 5, new_column: 4, new_direction: 'left'},
	{color: 'black', row: 5, column: 5, direction: 'left',  new_color: 'white', new_row: 6, new_column: 5, new_direction: 'down'},
	{color: 'black', row: 5, column: 5, direction: 'down',  new_color: 'white', new_row: 5, new_column: 6, new_direction: 'right'},
	{color: 'black', row: 5, column: 5, direction: 'right', new_color: 'white', new_row: 4, new_column: 5, new_direction: 'up'},

	{color: 'black', row: 3, column: 7, direction: 'up',    new_color: 'white', new_row: 3, new_column: 6, new_direction: 'left'},
	{color: 'black', row: 3, column: 7, direction: 'left',  new_color: 'white', new_row: 4, new_column: 7, new_direction: 'down'},
	{color: 'black', row: 3, column: 7, direction: 'down',  new_color: 'white', new_row: 3, new_column: 8, new_direction: 'right'},
	{color: 'black', row: 3, column: 7, direction: 'right', new_color: 'white', new_row: 2, new_column: 7, new_direction: 'up'},
    ],

    function(test_case) {
	describe("after stepping an ant at [" + test_case.row + "," + test_case.column + "]," +
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

		     it("is facing " + test_case.new_direction, function() {
			 expect(the_ant.direction()).toEqual(test_case.new_direction);
		     });

		     it("the cell at [" + test_case.row + "," + test_case.column + "] is " + test_case.new_color, function() {
			 expect(the_board.cell_color(test_case.row, test_case.column)).toEqual(test_case.new_color);
		     });
		 });
    });
