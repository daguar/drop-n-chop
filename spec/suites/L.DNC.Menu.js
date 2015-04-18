describe("L.DNC.Menu > ", function () {

    // beforeEach(function () {
    //     map = new L.Map(document.createElement('div')).setView([0, 0], 15);
    // });

    describe("initialize options > ", function () {
        var menu = null;
        var title = "Test Menu";
        var fakeOptions = {foo: 'bar'};

        beforeEach(function () {
            menu = new L.DNC.Menu( title, fakeOptions );
        });

        // it("is activated correctly > ", function () {
        //     expect(menu instanceof L.DNC.Menu).to.equal(true);
        // });

        it("options correctly set > ", function () {
            expect(menu.options).to.eql(fakeOptions);
        });
        it("has title set > ", function () {
            expect(menu.title).to.eql(title);
        });

        // TODO: Test that _buildDomElement produces dom elemt
        // test that menu.domElement === _buildDomElement()
        it("has dom element > ", function () {
            // expect(menu.domElement).to.be.ok();
        });
    });
    // describe("initialize  > ", function () {

        // it("has fileReader ref activated correctly > ", function () {
        //     expect(menu.fileReader instanceof L.DNC.DropZone.FileReader).to.equal(true);
        // });
    // });

});
