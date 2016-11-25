'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// Makes tests for React components easier
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', function () {
    it('should exist', function () {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', function () {
        // With the done parameter we tell mocha that we're doing an asynchronous test
        // and it should wait until done is called to stop the test
        it('should set state to started and countdown', function (done) {
            var countdown = TestUtils.renderIntoDocument(React.createElement(Countdown, null));
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // Test that after just over a second the count gets updated
            // setTimeout is asynchronous
            // Mocha doesn't support asynchronous so we use done
            setTimeout(function () {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should should never set count to less than zero', function (done) {
            var countdown = TestUtils.renderIntoDocument(React.createElement(Countdown, null));
            countdown.handleSetCountdown(1);

            setTimeout(function () {
                expect(countdown.state.count).toBe(0);
                done();
            }, 2001);
        });

        it('should pause countdown on paused status', function (done) {
            var countdown = TestUtils.renderIntoDocument(React.createElement(Countdown, null));
            countdown.handleSetCountdown(3);

            // The state should be paused now
            countdown.handleStatusChange('paused');

            setTimeout(function () {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop countdown on stopped status', function (done) {
            var countdown = TestUtils.renderIntoDocument(React.createElement(Countdown, null));
            countdown.handleSetCountdown(3);

            // The state should be stopped now
            countdown.handleStatusChange('stopped');

            setTimeout(function () {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});

//# sourceMappingURL=Countdown.test.js.map