let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
// Makes tests for React components easier
let TestUtils = require('react-addons-test-utils');

let Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should render pause when started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            
            // Find a button with a text of Pause
            // jQuery stuff
            let $pauseButton = $el.find('button:contains(Pause)');

            // .length is equal to the number of items it found
            expect($pauseButton.length).toBe(1);
        });

        it('should render start when started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));

            // Find a button with a text of Pause
            // jQuery stuff
            let $startButton = $el.find('button:contains(Start)');

            // .length is equal to the number of items it found
            expect($startButton.length).toBe(1);
        });
    });
});