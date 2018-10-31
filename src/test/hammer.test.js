const assert = require('assert');
const { calculate_body, calculate_tail, calculate_wick, calculate_total_length } = require('./../hammer/hammer');

describe("test cases for hammer.js", function () {

    describe("test cases for calculate_body() function", function () {
        it("checks if body is 0 for open = 0 and close = 0", function () {

            let candle_stick = {
                open: 0,
                close: 0
            }

            assert.equal(calculate_body(candle_stick), 0)
        });

        it("checks if body is 0 for open = 100 and close = 100", function () {

            let candle_stick = {
                open: 100,
                close: 100
            }

            assert.equal(calculate_body(candle_stick), 0)
        });

        it("checks if body is 100 for open = 0 and close = 100", function () {

            let candle_stick = {
                open: 0,
                close: 100
            }

            assert.equal(calculate_body(candle_stick), 100)
        });
    })

    describe("test cases for calculate_tail() function", function () {
        it("checks if tail is 0 for open = 0, close = 0 and low = 0", function () {

            let candle_stick = {
                open: 0,
                close: 0,
                low: 0
            }

            assert.equal(calculate_tail(candle_stick), 0)
        });

        it("checks if tail is 100 for open = 100, close = 100 and low = 0", function () {

            let candle_stick = {
                open: 100,
                close: 100,
                low: 0
            }

            assert.equal(calculate_tail(candle_stick), 100)
        });

        it("checks if tail is 0 for open = 0, close = 100 and low = 0", function () {

            let candle_stick = {
                open: 0,
                close: 100,
                low: 0
            }

            assert.equal(calculate_tail(candle_stick), 0)
        });
    })

    describe("test cases for calculate_wick() function", function () {
        it("checks if wick is 0 for open = 0, close = 0 and high = 0", function () {

            let candle_stick = {
                high: 0,
                open: 0,
                close: 0
            }

            assert.equal(calculate_wick(candle_stick), 0)
        });

        it("checks if wick is -100 for open = 100, close = 100 and high = 0", function () {

            let candle_stick = {
                high: 0,
                open: 100,
                close: 100
            }

            assert.equal(calculate_wick(candle_stick), -100)
        });

        it("checks if wick is -100 for open = 0, close = 100 and high = 0", function () {

            let candle_stick = {
                high: 0,
                open: 0,
                close: 100
            }

            assert.equal(calculate_wick(candle_stick), -100)
        });

        it("checks if wick is 100 for open = 0, close = 0 and high = 100", function () {

            let candle_stick = {
                high: 100,
                open: 0,
                close: 0
            }

            assert.equal(calculate_wick(candle_stick), 100)
        });
    })

    describe("test cases for calculate_total_length() function", function () {
        it("checks if wick is 0 for open = 0, close = 0 and high = 0", function () {

            let candle_stick = {
                high: 0,
                low: 0
            }

            assert.equal(calculate_total_length(candle_stick), 0)
        });

        it("checks if wick is -100 for open = 100, close = 100 and high = 0", function () {

            let candle_stick = {
                high: 100,
                low: 0
            }

            assert.equal(calculate_total_length(candle_stick), 100)
        });

    })

})