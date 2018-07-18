const fs = require('fs')
const dataJson = fs.readFileSync('./data.json', 'utf8')

class Model {
    static read(){
        let listJson = JSON.parse(dataJson)
        return listJson
    }

    static write(data){
        let writeData = JSON.stringify(data, null, 2)
        fs.writeFileSync('./data.json', writeData)
    }

    static deleteData(){
        let deleted = this.read()
    }
}

module.exports = Model