function App(app_container) {
    this._container= app_container;
}

App.prototype.container= function() {
    return this._container;
};

App.prototype.initialize= function() {
    var the_board= new Board();
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(the_board);
};
