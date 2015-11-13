function App(app_container) {
    this._container= app_container;
}

reader(App, "container");
accessor(App, "board");

App.prototype.initialize= function() {
    this.board(new Board);
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(this.board());
};
