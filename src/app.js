function App(app_container) {
    this._container= app_container;
}

reader(App, "container");
accessor(App, "board");

App.prototype.ant= function() {
    return this.board().ant();
};

App.prototype.initialize= function() {
    this.board(new Board);
    this.board().add_ant();
};

App.prototype.show_board= function() {
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(this.board());
};

App.prototype.update_board= function() {
    if (this.container().html() === "")
	return;
    this.container().html("");
    this.show_board();
};

App.prototype.step= function() {
    this.board().ant().step();
};
