_.each(
    [{row: 5, column: 5, direction: 'up',    expected_row: 5, expected_column: 6, expected_direction: 'right'},
     {row: 5, column: 5, direction: 'left',  expected_row: 4, expected_column: 5, expected_direction: 'up'},
     {row: 5, column: 5, direction: 'down',  expected_row: 5, expected_column: 4, expected_direction: 'left'},
     {row: 5, column: 5, direction: 'right', expected_row: 6, expected_column: 5, expected_direction: 'down'},

     {row: 3, column: 7, direction: 'up',    expected_row: 3, expected_column: 8, expected_direction: 'right'},
     {row: 3, column: 7, direction: 'left',  expected_row: 2, expected_column: 7, expected_direction: 'up'},
     {row: 3, column: 7, direction: 'down',  expected_row: 3, expected_column: 6, expected_direction: 'left'},
     {row: 3, column: 7, direction: 'right', expected_row: 4, expected_column: 7, expected_direction: 'down'}],

    function(test_case) {
	describe("after stepping an ant at [" + test_case.row + "," + test_case.column + "], on a white cell, facing " + test_case.direction, function() {
	    var the_board= null;
	    var the_ant= null;

	    beforeEach(function() {
		the_board= new Board();
		the_ant= the_board.add_ant();
		the_ant.row(test_case.row);
		the_ant.column(test_case.column);
		the_ant.direction(test_case.direction);
		the_ant.step();
	    });

	    it("is located at row " + test_case.expected_row, function() {
		expect(the_ant.row()).toEqual(test_case.expected_row);
	    });

	    it("is located at column " + test_case.expected_column, function() {
		expect(the_ant.column()).toEqual(test_case.expected_column);
	    });

	    it("is facing " + test_case.expected_direction, function() {
		expect(the_ant.direction()).toEqual(test_case.expected_direction);
	    });

	    it("its old cell is flipped to black", function() {
		expect(the_board.cell_color(test_case.row, test_case.column)).toEqual('black');
	    });
	});
    });
