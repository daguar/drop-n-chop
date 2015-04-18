describe("L.DNC.Menu > ", function () {
    var menu = null;
    var title = "Test Menu";
    var fakeOptions = {foo: 'bar'};

    var begin_html =
        '<div class="menu">' +
          '<button class="menu-button">' +
            title +
            '<i class="fa fa-angle-down"></i>' +
          '</button>' +
          '<div class="menu-dropdown menu-expand">';
    var end_html =
          '</div>' +
        '</div>';
    var expected_html = begin_html + end_html;


    beforeEach(function () {
        menu = new L.DNC.Menu( title, fakeOptions );
    });

    describe("initialize options > ", function () {

        it("is activated correctly > ", function () {
            expect( menu instanceof L.DNC.Menu ).to.equal( true );
        });

        it("options correctly set > ", function () {
            expect( menu.options ).to.eql( fakeOptions );
        });

        it("has title set > ", function () {
            expect( menu.title ).to.equal( title );
        });
    });

    describe("dom element > ", function () {

        it("can build dom element > ", function () {
            expect( menu._buildDomElement ).to.be.ok;
            expect( menu._buildDomElement().outerHTML ).to.eql( expected_html );
        });

        it("has dom element > ", function () {
            expect( menu.domElement ).to.be.ok;
            expect( menu.domElement.outerHTML ).to.equal( expected_html );
        });
    });

    describe("public methods > ", function (){

        it("has addTo > ", function () {
            expect( menu.addTo ).to.be.ok;

            var parent = document.createElement('div');
            menu.addTo(parent);

            expect( parent.outerHTML ).to.equal( '<div>' + expected_html + '</div>');
        });

        it("has addChild > ", function () {
            expect( menu.addChild ).to.be.ok;

            var child = document.createElement('div');
            var innerHtml = "<b>This is probably where a button would be</b>";

            child.innerHTML = innerHtml;
            menu.addChild( {domElement: child} );
            expect( menu.domElement.outerHTML ).to.equal( begin_html + child.outerHTML + end_html );
        });

    });

    describe("event handlers > ", function (){

        // To Test...
        // Event Handlers
        // - When clicked, "expaned" is added to .menu-dropdown
        // - When clicked again, "expaned" is removed from .menu-dropdown

    });
});
