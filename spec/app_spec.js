describe("an App", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));
    });
    
    describe("when newly created", function() {
	it ("knows its container", function() {
	    expect(the_app.container()).toEqual('app-container');
	});
    });
});
