describe("a newly created App", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));
    });
    
    it ("knows its container", function() {
	expect(the_app.container()).toEqual($('#app-container'));
    });

    it ("does not put anything into its container", function() {
	expect(the_app.container()).toBeEmpty();

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

    it("puts the board into its container", function() {
	expect($('#app-container>table')).toBeVisible();
    });
});

