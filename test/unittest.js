function doUnitTest() {
	var iframe = document.getElementById('mainframe');

	describe('iframe', function () {
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
		it('should be in the DOM', function () {
			expect(document.getElementById('gn_header')).to.exist;
		});

		it('should contain 3 widgets', function () {
			expect(document.getElementById('visualstate_fieldset')).to.exist;
			expect(document.getElementById('visualtimer_fieldset')).to.exist;
			expect(document.getElementById('statedisplay_fieldset')).to.exist;
		});
	});

	describe('caching', function () {
		var cachedURIs = ['html/pregame.html',
                          'html/instructions.html',
                          'html/bidder.html',
                          'html/resp.html',
                          'html/solo.html',
                          'html/postgame.html',
                          'html/ended.html'];

		it('should have preloaded given pages', function () {
			var idx;

			expect(W.cache).to.exist;

			for (idx in cachedURIs) {
				expect(W.cache).to.have.property(cachedURIs[idx])
					.with.property('contents').that.exists;
			}
		});

		it('should be able to correctly display a cached page', function (done) {
			W.loadFrame('html/instructions.html', function () {
				var documentElement = (iframe.contentDocument ? iframe.contentDocument
					: iframe.contentWindow.document).documentElement;
				var body = documentElement.getElementsByTagName('body')[0];

				expect(iframe).to.exist;
				expect(documentElement).to.exist;
				expect(body).to.exist;
				expect(body).to.have.property('children').that.is.not.empty;

				expect(body.children[0].tagName).to.equal('H1');
				expect(body.children[0].innerHTML.trim()).to.equal(
					'Instructions of the Ultimatum Game. ' +
					'Please read them carefully');

				done();
			}, { cache: { loadMode: 'cache' } });
		});
	});
}
