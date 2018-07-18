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

    static find(id){
        let findData = []
        let readData = this.read()
        for(let i = 0; i < readData.length; i++){
            if(readData[i].id == id) {
                findData.push(readData[i])
            }
        }
        return findData
    }
}

module.exports = Model