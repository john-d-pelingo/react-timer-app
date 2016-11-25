let React = require('react');

let CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();

        let strSeconds = this.refs.seconds.value || 0;

        if (strSeconds.length > 0 && strSeconds.match(/^[0-9][0-9]*$/)) {
            if (parseInt(strSeconds) !== 0) {
                this.refs.seconds.value = '';
                // 10 specifies the base
                this.props.onSetCountdown(parseInt(strSeconds, 10));
            }
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onSubmit} ref="form" className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;