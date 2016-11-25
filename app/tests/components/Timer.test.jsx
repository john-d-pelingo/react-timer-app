let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
// Makes tests for React components easier
let TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);

        // Test that after just over a second the count gets updated
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe('started');
            done();
        }, 1001);
    });

    it('should pause timer on paused status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');


        // Test that after just over a second the count doesn't get updated
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
    });

    it('should clear count on stopped status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({count: 22});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');


        // Test that after just over a second the count becomes 0
        // setTimeout is asynchronous
        // Mocha doesn't support asynchronous so we use done
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1001);
    });
});