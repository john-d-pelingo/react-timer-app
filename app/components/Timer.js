'use strict';

var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

// This component will handle all of the logic of the timer functionality
var Timer = React.createClass({
    displayName: 'Timer',

    componentWillUnmount: function componentWillUnmount() {
        // console.log('componentWillUnmount');
        // Stop the interval
        clearInterval(this.timer);
        this.timer = undefined;
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate');
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                // When set the state to stopped or paused
                // we reset the count and also cancel the set interval
                // Which means we have a fallthrough and it is acceptable in this case
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                // In contrast to paused where we just cancel the set interval
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function startTimer() {
        var _this = this;

        this.timer = setInterval(function () {
            var newCount = _this.state.count + 1;
            _this.setState({
                count: newCount
            });
        }, 1000);
    },
    getInitialState: function getInitialState() {
        // console.log('getInitialState');

        return {
            count: 0,
            // The timer is initially paused
            timerStatus: 'paused'
        };
    },
    handleStatusChange: function handleStatusChange(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    render: function render() {
        var _state = this.state,
            count = _state.count,
            timerStatus = _state.timerStatus;


        return React.createElement(
            'div',
            { className: 'timer' },
            React.createElement(
                'h1',
                { className: 'page-title' },
                'Timer App'
            ),
            React.createElement(Clock, { totalSeconds: count }),
            React.createElement(Controls, { countdownStatus: timerStatus, onStatusChange: this.handleStatusChange })
        );
    }
});

module.exports = Timer;

//# sourceMappingURL=Timer.js.map