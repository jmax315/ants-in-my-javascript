describe("A 10x10 board", function() {
    var the_board= null;
    
    beforeEach(function() {
	the_board= new Board();
    });

    it("has a width of 10", function() {
	expect(the_board.width()).toEqual(10);
    });

    afterEach(function() {
	the_board= null;
    });
});
