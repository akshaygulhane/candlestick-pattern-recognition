
function find_hammer(body, wick, tail, body_length) {
    /*
        a candle whose body is 30% or less and has a long lower wick (usually the rest 70% of the candle’s height) but does not have an upper wick. 
    */

    let body_percent = 30 * body_length / 100;

    return tail > (body * 2) && wick < body_percent;
}

function calculate_body(candle_stick) {
    return Math.abs(candle_stick.open - candle_stick.close)
}

function calculate_total_length(candle_stick) {
    return Math.abs(candle_stick.high - candle_stick.low);
}

function calculate_wick(candle_stick) {
    return candle_stick.high - Math.max(candle_stick.open, candle_stick.close)
}

function calculate_tail(candle_stick) {
    return Math.min(candle_stick.open, candle_stick.close) - candle_stick.low
}

function find_invalid_stick(candle_stick) {
    return candle_stick.open < candle_stick.close;
}

module.exports = {

    find_hammer_data: function (parsed_data) {

        if (parsed_data.length > 0) {
            // console.log(parsed_data.length)
            let hammer_data = []

            for (let candle_stick of parsed_data) {

                let body_length = calculate_total_length(candle_stick)
                let body = calculate_body(candle_stick);
                let wick = calculate_wick(candle_stick);
                let tail = calculate_tail(candle_stick);

                let isHammer = find_hammer(body, wick, tail, body_length);
                // console.log("isHammer", isHammer)
                if (isHammer) {

                    hammer_data.push(candle_stick);
                }

            }

            return hammer_data;
        }
    },

    calculate_body,
    find_hammer,
    calculate_wick,
    calculate_tail
}