function doUnitTest() {
	describe('iframe', function () {
		var iframe = document.getElementById('mainframe');
		var documentElement;
		var body;

		it('should be in the DOM', function () {
			expect(iframe).to.exist;
		});

		it('should have the correct initial content', function () {
			documentElement = (iframe.contentDocument ? iframe.contentDocument
				: iframe.contentWindow.document).documentElement;

			expect(documentElement).to.exist;

			body = documentElement.getElementsByTagName('body')[0];

			expect(body).to.exist;
			expect(body).to.have.property('children').with.length.of.at.least(2);

			expect(body.children[0].tagName).to.equal('H1');
			expect(body.children[0].innerHTML.trim()).to.equal(
				'Good! We are about to start...');

			expect(body.children[1].tagName).to.equal('DIV');
			expect(body.children[1].innerHTML.trim()).to.equal(
				'The game has not started yet. We are waiting for all the ' +
				'players to connect.');
		});
	});

	describe('info bar', function () {
		it('should be in the DOM', function() {
			expect(document.getElementById('gn_header')).to.exist;
		});

		it('should contain 3 boxes', function() {
			expect(document.getElementById('visualstate_fieldset')).to.exist;
			expect(document.getElementById('visualtimer_fieldset')).to.exist;
			expect(document.getElementById('statedisplay_fieldset')).to.exist;
		});
	});

	describe('caching', function () {
	});
};
