function App(app_container) {
    this._container= app_container;
    this.board(new Board);
}

accessor(App, "board");

App.prototype.container= function() {
    return this._container;
};

App.prototype.initialize= function() {
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(this.board());
};
