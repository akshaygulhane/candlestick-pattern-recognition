const fs = require('fs');

module.exports = {
    write_csv: function (file_path, data_to_write) {
        let header = 'Date, Open, High, Low, Close, Volume \n';
        fs.writeFileSync(file_path, header)

        for (let i = 0; i < data_to_write.length; i++) {

            let row = `${data_to_write[i].date}, ${data_to_write[i].open}, ${data_to_write[i].high}, ${data_to_write[i].low}, ${data_to_write[i].close}, ${data_to_write[i].volume} \n`;

            fs.appendFileSync(file_path, row);

        }

    }
}