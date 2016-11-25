'use strict';

var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    displayName: 'Countdown',

    getInitialState: function getInitialState() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    // Gets called after either props or state get updated
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },
    // Start the timer
    startTimer: function startTimer() {
        var _this = this;

        // Trigger a function once after a certain amount of time
        // setTimeout();
        // Keep triggering a function every interval
        // Give access to the variable so we can clear it later the user clicks pause
        // or when they click the clear button
        this.timer = setInterval(function () {
            var newCount = _this.state.count - 1;
            _this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            // If we have reached the end of the countdown then there is no reason to keep the timer around
        }, 1000);
    },
    handleSetCountdown: function handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
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

//# sourceMappingURL=Countdown.test.jsst.js.map