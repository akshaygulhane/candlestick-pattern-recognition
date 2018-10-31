module.exports = {
    parse_data: async function (raw_data) {

        let parsed_data = [];

        let rows = raw_data.split("\n");

        for (let row of rows) {

            let columns = row.split(',');
            if (columns[0] != null) {
                parsed_data.push({
                    date: columns[0],
                    open: columns[1],
                    high: columns[2],
                    low: columns[3],
                    close: columns[4],
                    volume: columns[6]
                })
            }
        }

        return parsed_data;
    }
}