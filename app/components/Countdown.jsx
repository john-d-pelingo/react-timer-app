let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');
let Controls = require('Controls');

let Countdown = React.createClass({
    getInitialState   : function () {
        return {
            count          : 0,
            countdownStatus: 'stopped'
        };
    },
    // Will get fired as our component gets first mounted
    // Means that we don't have access to the refs or the DOM
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    // Gets fired right after everything gets rendered in the DOM
    // This means that we will have access to any refs
    componentDidMount : function () {
        console.log('componentDidMount');
    },
    // Gets fired before the fact
    // Gets passed on the next props and the next state
    componentWillUpdate : function (nextProps, nextState) {

    },
    // Lifecycle methods !!!
    // Gets fired right after either props or state get updated
    componentDidUpdate  : function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                // When stopped we reset the count and also cancel the set interval
                // Which means we have a fallthrough and it is acceptable in this case
                case 'stopped':
                    this.setState({count: 0});
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
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
        // Stop the interval
        clearInterval(this.timer);
        this.timer = undefined;
    },
    // Start the timer
    startTimer          : function () {
        // Trigger a function once after a certain amount of time
        // setTimeout();
        // Keep triggering a function every interval
        // Give access to the variable so we can clear it later the user clicks pause
        // or when they click the clear button
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            // If we have reached the end of the countdown then there is no reason to keep the timer around
            if (newCount === 0) {
                this.setState({
                    countdownStatus : 'stopped'
                });
            }
        }, 1000);
    },
    handleSetCountdown  : function (seconds) {
        this.setState({
            count          : seconds,
            countdownStatus: 'started'
        });
    },
    //
    handleStatusChange  : function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render              : function () {
        let {count, countdownStatus} = this.state;

        // When we want to dynamically render something we have to a use a function
        let renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                // If not stopped render the controls
                return <Controls countdownStatus={countdownStatus}
                                 onStatusChange={this.handleStatusChange}/>
            } else {
                // If stopped render the countdown form
                // Pass down a function as a prop, we can wait for actions to get fired on the children
                // and then do something with those
                // Which is why we don't call it here
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;