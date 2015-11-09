describe("a board with an ant on it, when displayed", function() {
    var the_ant= null;
    var displayed_table= null;

    beforeEach(function() {
    	var the_board= new Board();
    	the_ant= the_board.add_ant();
	displayed_table= display_table(the_board);
    });

    it("puts the ant image in the ant's cell", function() {
	expect(displayed_cell(displayed_table, the_ant.row(), the_ant.column())).toHaveHtml("<img src=\"images/ant-up.jpg\">");
    });

    afterEach(function() {
	the_ant= null;
	displayed_table= null;
    });
});

describe("a board with an ant, after stepping, when displayed", function() {
    var the_ant= null;
    var displayed_table= null;

    beforeEach(function() {
    	var the_board= new Board();
    	the_ant= the_board.add_ant();
	the_ant.step();
	displayed_table= display_table(the_board);
    });

    it("puts the ant image in the ant's cell", function() {
	expect(displayed_cell(displayed_table, the_ant.row(), the_ant.column())).toHaveHtml("<img src=\"images/ant-up.jpg\">");
    });

    afterEach(function() {
	the_ant= null;
	displayed_table= null;
    });
});
