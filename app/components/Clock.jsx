let React = require('react');

let Clock = React.createClass({
    getDefaultProps: function () {
        // In case the prop total Seconds is not set, we initialize it to 0
        return {
            // totalSeconds: 0
        };
    },
    propTypes      : {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds  : function (totalSeconds = 0) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;

        return minutes + ':' + seconds;
    },
    render         : function () {
        let {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        );
    }
});

module.exports = Clock;