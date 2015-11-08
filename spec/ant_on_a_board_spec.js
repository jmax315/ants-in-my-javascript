describe("a board with an ant on it, when displayed", function() {
    var the_ant= null;
    var displayed_table= null;

    beforeEach(function() {
    	var the_board= new Board();
    	the_ant= the_board.add_ant();
	jasmine.getFixtures().set("<div id='board-div'></div>");
	the_board.display($('#board-div'));
	displayed_table= $('#board-div>table#ant-board');
    });

    it("puts the ant image in the ant's cell", function() {
	expect(displayed_cell(displayed_table, the_ant.row(), the_ant.column())).toHaveHtml("<img src=\"images/ant-up.jpg\">");
    });
});
