describe("a board with an ant on it, when displayed", function() {
    var the_ant= null;
    var display_table= null;

    beforeEach(function() {
    	var the_board= new Board();
    	the_ant= the_board.add_ant();
	jasmine.getFixtures().set("<div id='board-div'></div>");
	the_board.display($('#board-div'));
	display_table= $('#board-div>table#ant-board');
    });

    it("puts the ant image in the ant's cell", function() {
	expect($(display_table[0].rows[the_ant.row()].cells[the_ant.column()])).toHaveHtml("<img src=\"images/ant-up.jpg\">");
    });
});
