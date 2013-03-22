// This file gets automatically read by the nodeGame server
module.exports = function(sn) {
	
	var testerChannel = sn.addChannel({
		name: 'testergame',
		admin: 'testergame/admin',
		player: 'testergame',
		game: 'testergame' // not used at the moment
	});

	// We can load a game here
	var path = require('path');
	var logic = path.resolve(__dirname, '../tester.logic.js');
	sn.startGame('testergame', logic);
	
	return true;
};



