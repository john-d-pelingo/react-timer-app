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
    // Will get fired as our component gets first mounted
    // Means that we don't have access to the refs or the DOM
    componentWillMount: function componentWillMount() {
        console.log('componentWillMount');
    },
    // Gets fired right after everything gets rendered in the DOM
    // This means that we will have access to any refs
    componentDidMount: function componentDidMount() {
        console.log('componentDidMount');
    },
    // Gets fired before the fact
    // Gets passed on the next props and the next state
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {},
    // Lifecycle methods !!!
    // Gets fired right after either props or state get updated
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
    // Automatically gets fired by React right before our component gets removed from the DOM
    // In this case will get fired when we click at the menu links
    componentWillUnmount: function componentWillUnmount() {
        console.log('componentWillUnmount');
        // Stop the interval
        clearInterval(this.timer);
        this.timer = undefined;
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
            if (newCount === 0) {
                _this.setState({
                    countdownStatus: 'stopped'
                });
            }
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