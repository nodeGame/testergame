function doUnitTest() {
	describe('iframe', function () {
		var iframe = document.getElementById('mainframe');

		it('is in the DOM', function () {
			should.exist(iframe);
		});
	});
};
