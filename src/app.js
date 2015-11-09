function App() {
    this.container(null);
    this.board(null);
    this.ant(null);
    this.interval_handle(null);
}

accessor(App, "container");
accessor(App, "update_interval");
accessor(App, "board");
accessor(App, "ant");
accessor(App, "interval_handle");

App.prototype.setup= function(app_container) {
    this.container(app_container);
    this.board(new Board());
    this.ant(this.board().add_ant());
};

App.prototype.show_board= function() {
    var board_drawer= new BoardDrawer(this.container());
    board_drawer.display(this.board());
};

App.prototype.update_board= function() {
    this.container().html("");
    this.show_board();
};

App.step= function() {
    this.ant().step();
    this.update_board();
};

App.prototype.run= function() {
    this.show_board();

    this.interval_handle(setInterval(
	_.bind(
	    function() {
		this.step();
		if (!this.ant().on_board())
		    this.stop();
	    },
	    this),
	0));
};

App.prototype.stop= function() {
    if (!this.interval_handle())
	return;

    clearInterval(this.interval_handle());
    this.interval_handle(null);
};
