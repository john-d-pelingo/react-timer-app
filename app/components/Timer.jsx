let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');

// This component will handle all of the logic of the timer functionality
let Timer = React.createClass({
    componentWillUnmount: function () {
        // console.log('componentWillUnmount');
        // Stop the interval
        clearInterval(this.timer);
        this.timer = undefined;
    },
    componentDidUpdate  : function (prevProps, prevState) {
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
                        count: 0,
                        // This would work too but it is kinda dangerous
                        // because we might add more features in our Timer component
                        // like laps or something
                        // timerStatus: 'paused'
                    });
                // In contrast to paused where we just cancel the set interval
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer      : function () {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });

        }, 1000);
    },
    getInitialState: function () {
        // console.log('getInitialState');

        return {
            count          : 0,
            // The timer is initially paused
            timerStatus: 'paused'
        };
    },
    handleStatusChange : function (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    render: function () {
        let {count, timerStatus} = this.state;

        return (
            <div className="timer">
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;