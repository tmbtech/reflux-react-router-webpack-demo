'use strict';
var Reflux = require('reflux');
var ActionCreators = Reflux.createActions([
    'addRoom',
    'openRoom',
    'addUnconfirmedMessage'
]);
module.exports = ActionCreators;
