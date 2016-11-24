'use strict';

var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    displayName: 'Countdown',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Clock, { totalSeconds: 198 })
        );
    }
});

module.exports = Countdown;

//# sourceMappingURL=Countdown.js.map