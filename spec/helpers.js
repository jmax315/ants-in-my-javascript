function displayed_cell(displayed_table, row, column) {
    return $(displayed_table[0].rows[row].cells[column]);
}

function display_table(the_board) {
    jasmine.getFixtures().set("<div id='board-div'></div>");
    the_board.display($('#board-div'));
    return $('#board-div>table#ant-board');
}
