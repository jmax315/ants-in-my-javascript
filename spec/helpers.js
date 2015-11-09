function displayed_cell(displayed_table, row, column) {
    return $(displayed_table[0].rows[row].cells[column]);
}

function display_table(the_board) {
    jasmine.getFixtures().set("<div id='board-div'></div>");

    var ui= new Ui($('#board-div'));
    var displayed_board= ui.display(the_board);

    return $('#board-div>table#ant-board');
}

function cell_message(row, column) {
    return "for cell [" + row + "," + column + "]";
}
