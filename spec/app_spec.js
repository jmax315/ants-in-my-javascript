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

    it("does not have an ant", function() {
	expect(the_app.ant()).toBeUndefined();
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

    it("does not display the board", function() {
	expect($('#app-container>table')).not.toExist();
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
    
    it("displays the board into its container", function() {
	expect($('#app-container>table')).toBeVisible();
    });

    it("doesn't clear any old boards out of the container", function() {
	the_app.show_board();
	expect($('#app-container>table').length).toEqual(2);
    });
});

describe("App.update_board", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	the_app.initialize();
    });

    describe("when the board isn't shown", function() {
	beforeEach(function() {
	    the_app.update_board();
	});

	it("doesn't display the board", function() {
	    expect($('#app-container>table')).not.toExist();
	});
    });

    describe("when the board is shown", function() {
	beforeEach(function() {
	    the_app.board().cell_color(0, 0, 'white');
	    the_app.show_board();
	    the_app.board().cell_color(0, 0, 'black');
	    the_app.update_board();
	});

	it("doesn't display a new board", function() {
	    expect($('#app-container>table').length).toEqual(1);
	});

	it("updates the displayed board", function() {
	    var cells= $('#app-container>table td');
	    expect($(cells[0])).toHaveClass('black-cell');
	});
    });
});

describe("App.ant", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	the_app.initialize();
    });

    it("returns the board's ant", function() {
	expect(the_app.ant()).toEqual(the_app.board().ant());
    });
});

describe("App.step_and_update", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	the_app.initialize();
	spyOn(the_app.ant(), 'step');
	spyOn(the_app, 'update_board');
	the_app.step_and_update();
    });
    
    it("steps the ant", function() {
	expect(the_app.ant().step).toHaveBeenCalled();
    });

    it("updates the board display", function() {
	expect(the_app.update_board).toHaveBeenCalled();
    });
});

describe("App.run", function() {
    var the_app= null;

    beforeEach(function() {
	jasmine.getFixtures().set("<div id='app-container'></div>");
	the_app= new App($('#app-container'));

	spyOn(the_app, 'step_and_update');
	jasmine.clock().install();

	the_app.initialize();
	the_app.run();
	jasmine.clock().tick(501);
    });
    
    it("hits the timer callback", function() {
	expect(the_app.step_and_update).toHaveBeenCalled();
    });

    afterEach(function() {
	jasmine.clock().uninstall();
    });
});
