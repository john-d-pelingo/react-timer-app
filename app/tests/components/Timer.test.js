'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// Makes tests for React components easier
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', function () {
    it('should exist', function () {
        expect(Timer).toExist();
    });

    it('should start timer on started status', function (done) {
        var timer = TestUtils.renderIntoDocument(React.createElement(Timer, null));
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);

        // Test that after just over a second the count gets updated
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(function () {
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe('started');
            done();
        }, 1001);
    });

    it('should pause timer on paused status', function (done) {
        var timer = TestUtils.renderIntoDocument(React.createElement(Timer, null));
        timer.setState({ count: 10 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        // Test that after just over a second the count doesn't get updated
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(function () {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
    });

    it('should clear count on stopped status', function (done) {
        var timer = TestUtils.renderIntoDocument(React.createElement(Timer, null));
        timer.setState({ count: 22 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        // Test that after just over a second the count becomes 0
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(function () {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1001);
    });
});

//# sourceMappingURL=Timer.test.js.map