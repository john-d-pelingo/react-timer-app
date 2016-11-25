'use strict';

var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
                // When stopped we reset the count and also cancel the set interval
                // Which means we have a fallthrough and it is acceptable in this case
                case 'stopped':
                    this.setState({ count: 0 });
                // In contrast to paused where we just cancel the set interval
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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
    //
    handleStatusChange: function handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function render() {
        var _this2 = this;

        var _state = this.state,
            count = _state.count,
            countdownStatus = _state.countdownStatus;

        // When we want to dynamically render something we have to a use a function

        var renderControlArea = function renderControlArea() {
            if (countdownStatus !== 'stopped') {
                // If not stopped render the controls
                return React.createElement(Controls, { countdownStatus: countdownStatus,
                    onStatusChange: _this2.handleStatusChange });
            } else {
                // If stopped render the countdown form
                // Pass down a function as a prop, we can wait for actions to get fired on the children
                // and then do something with those
                // Which is why we don't call it here
                return React.createElement(CountdownForm, { onSetCountdown: _this2.handleSetCountdown });
            }
        };

        return React.createElement(
            'div',
            null,
            React.createElement(Clock, { totalSeconds: count }),
            renderControlArea()
        );
    }
});

module.exports = Countdown;

//# sourceMappingURL=Countdown.js.map