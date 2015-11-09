_.each(
    [
	{color: 'white', direction: 'up',    expected_image: "images/ant-on-white-up.jpg"},
	{color: 'white', direction: 'left',  expected_image: "images/ant-on-white-left.jpg"},
	{color: 'white', direction: 'down',  expected_image: "images/ant-on-white-down.jpg"},
	{color: 'white', direction: 'right', expected_image: "images/ant-on-white-right.jpg"},

	{color: 'black', direction: 'up',    expected_image: "images/ant-on-black-up.jpg"},
	{color: 'black', direction: 'left',  expected_image: "images/ant-on-black-left.jpg"},
	{color: 'black', direction: 'down',  expected_image: "images/ant-on-black-down.jpg"},
	{color: 'black', direction: 'right', expected_image: "images/ant-on-black-right.jpg"},
    ],
    function(test_case) {
	describe("a board with an ant on a " + test_case.color + " cell, facing " + test_case.direction + ", when displayed", function() {
	    var the_ant= null;
	    var displayed_table= null;

	    beforeEach(function() {
    		var the_board= new Board();
    		the_ant= the_board.add_ant();

		the_ant.direction(test_case.direction);
		the_board.cell_color(the_ant.row(), the_ant.column(), test_case.color);

		displayed_table= display_table(the_board);
	    });

	    it("puts the correct image in the ant's cell", function() {
		expect(displayed_cell(displayed_table, the_ant.row(), the_ant.column())).toHaveHtml("<img src=\"" + test_case.expected_image + "\">");
	    });

	    afterEach(function() {
		the_ant= null;
		displayed_table= null;
	    });
	});
    });

