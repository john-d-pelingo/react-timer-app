let React = require('react');

let Controls = React.createClass({
    propTypes     : {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange : React.PropTypes.func.isRequired
    },
    // Currying function
    // The return value of onStatusChange is a function that is going to get called
    // when the person clicks the button
    // We're using a function to generate a different function
    onStatusChange: function (newStatus) {
        return () => {
            // this.props.onStatusChange is what is passed from the parent component which is a function
            // and this is what is called when someone clicks a button
            this.props.onStatusChange(newStatus);
            ;
        };
    },
    componentWillReceiveProps : function (newProps) {
        console.log('componentWillReceiveProps', newProps.countdownStatus);
    },
    render        : function () {
        let {countdownStatus} = this.props;

        // Render the correct buttons according to the current status
        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
            }
        };

        // Always render clear button in the beginning
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }

});

module.exports = Controls;