describe("a newly created App", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));
    });
    
    it ("knows its container", function() {
	expect(the_app.container()).toEqual($('#app-container'));
    });

    it("does not put anything into its container", function() {
	expect(the_app.container()).toBeEmpty();
    });

    it("does not create a board", function() {
	expect(the_app.board()).toBeUndefined();
    });
});

describe("App.initialize()", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	the_app.initialize();
    });
    
    it("creates a board", function() {
	expect(the_app.board()).toBeTruthy();
    });

    it("does not put the board into its container", function() {
	expect($('#app-container>table')).toBeEmpty();
    });

    it("adds an ant to the board", function() {
	expect(the_app.board().ant()).toBeTruthy();
    });
});

describe("App.show_board()", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	the_app.initialize();
	the_app.show_board();
    });
    
    it("puts the board into its container", function() {
	expect($('#app-container>table')).toBeVisible();
    });
});

