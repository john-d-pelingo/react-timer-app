let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
// Makes tests for React components easier
let TestUtils = require('react-addons-test-utils');

let Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        // With the done parameter we tell mocha that we're doing an asynchronous test
        // and it should wait until done is called to stop the test
        it('should set state to started and countdown', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // Test that after just over a second the count gets updated
            // setTimeout is asynchronous
            // Mocha doesn't support asynchronous so we use done
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should should never set count to less than zero', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 2001);
        });

        it('should pause countdown on paused status', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);

            // The state should be paused now
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop countdown on stopped status', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);

            // The state should be stopped now
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});