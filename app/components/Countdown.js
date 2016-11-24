'use strict';

var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    displayName: 'Countdown',

    getInitialState: function getInitialState() {
        return {
            count: 0
        };
    },
    handleSetCountdown: function handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function render() {
        var count = this.state.count;


        return React.createElement(
            'div',
            null,
            React.createElement(Clock, { totalSeconds: count }),
            React.createElement(CountdownForm, { onSetCountdown: this.handleSetCountdown })
        );
    }
});

module.exports = Countdown;

//# sourceMappingURL=Countdown.js.map