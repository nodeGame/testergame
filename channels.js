/**
 * # Channels definition file for Tester Game
 * Copyright(c) 2014 Stefano Balietti
 * MIT Licensed
 */
module.exports = [
    {
        name: 'testergame',
        admin: 'testergame/admin',
        player: 'testergame',

        waitingRoom: {
            logicPath:  'game.room.js',
            name:       'waitRoom'
        }
    }
];
