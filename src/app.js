function App(app_container) {
    this._container= app_container;
    this.board(new Board);
}

reader(App, "container");
accessor(App, "board");

App.prototype.initialize= function() {
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(this.board());
};
