'use strick'
const fs = require('fs');
const file = fs.readFileSync('./data.json', 'utf8');

class Model {

    static read() {
        let listJSON = JSON.parse(file);
        return listJSON;
    }

    static write(data) {
        let dataJSON = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', dataJSON);
    }

    static findById(id) {
        var data = [];
        for(let i = 0; i < this.read().length; i++) {
            if(this.read()[i].id == id) {
                data.push(this.read()[i]);
            }
        }
        return data;
    }
}

module.exports = Model