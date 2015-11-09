function Board() {
}

Board.prototype.width= function() {
    return 10;
}

Board.prototype.height= function() {
    return 10;
}

Board.prototype.cell_color= function(row, column) {
    return 'white';
}

Board.prototype.display= function(container) {
    var ui= new Ui(container);
    var displayed_board= ui.display(this);
}

Board.prototype.add_ant= function() {
    return new Ant();
}
