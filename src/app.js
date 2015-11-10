function App(app_container) {
    this._container= app_container;
}

App.prototype.container= function() {
    return this._container;
};
