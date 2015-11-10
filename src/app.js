function App(app_container) {
    this._container= app_container;
    this.container().html("<h2>Hi there</h2>");
}

App.prototype.container= function() {
    return this._container;
};
